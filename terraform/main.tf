##############################################
# Security Group
##############################################
resource "aws_security_group" "app_sg" {
  name        = "app-sg"
  description = "Allow inbound HTTP and SSH"

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

##############################################
# Automatically fetch the latest Ubuntu 22.04 AMI
##############################################
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical (Ubuntu)

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
}

##############################################
# EC2 Instance
##############################################
resource "aws_instance" "app_server" {
  ami             = data.aws_ami.ubuntu.id
  instance_type   = var.instance_type
  key_name        = var.key_name
  security_groups = [aws_security_group.app_sg.name]

  user_data = <<-EOF
    #!/bin/bash
    sudo apt-get update -y
    sudo apt-get install -y docker.io
    sudo systemctl start docker
    sudo systemctl enable docker
    echo "${var.dockerhub_password}" | docker login -u "${var.dockerhub_username}" --password-stdin
    docker pull ${var.docker_image}
    docker run -d -p 80:3000 ${var.docker_image}
  EOF

  tags = {
    Name = "Ecommerce-App"
  }
}

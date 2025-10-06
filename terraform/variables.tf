variable "aws_region" {
  default = "us-east-1"
}

variable "instance_type" {
  default = "t2.micro"
}

variable "key_name" {
  description = "An existing EC2 KeyPair name for SSH access"
  default     = "my-keypair"
}

variable "dockerhub_username" {}
variable "dockerhub_password" {}
variable "docker_image" {
  description = "Docker image with my app (e.g. nawra/electromart:latest)"
}

# ⚡ ElectroMart

ElectroMart is a simple **Node.js e-commerce web application** for a tech shop.  
This project is built as part of a **DevOps pipeline project** to demonstrate modern practices like containerization, CI/CD, IaC, monitoring, and DevSecOps.

---

## 🚀 Features
- 🛒 Product listing with simple UI
- 📦 Shopping cart functionality
- ✅ Checkout process
- 🐳 Dockerized for containerized deployment
- ⚙️ Ready for CI/CD with GitHub Actions 
- ☁️ Infrastructure as Code with Terraform
- 🔐 Basic DevSecOps practices (Trivy for image scanning)
- 📊 Monitoring with Prometheus + Grafana 

---

## 🏗️ Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, Vanilla JS
- **Database:** MongoDB (optional, can run without for demo)
- **Containerization:** Docker
- **Infrastructure:** AWS (EC2, S3, Security Groups) via Terraform
- **CI/CD:** GitHub Actions 
- **Monitoring:** Prometheus + Grafana
- **Security:** Trivy for container scanning

---
![WhatsApp Image 2025-10-14 at 18 30 42_b89f638e](https://github.com/user-attachments/assets/5becf232-978e-4ab3-badf-ae24a8c1baa6)

---

## 📂 Project Structure
electromart/
├── .github/workflows/ # CI/CD pipeline configurations

├── config/ # Database configuration

├── controllers/ # Controllers for products & users

├── models/ # Mongoose models (optional for DB)

├── node_modules/ # Installed dependencies

├── public/ # Frontend files (HTML, CSS, JS)

├── routes/ # API routes

├── src/ # Core app (app.js, server.js)

├── terraform/ # Infrastructure as Code (Terraform files)

├── .env # Environment variables

├── .gitignore # Git ignored files

├── docker-compose.yml # Multi-container setup (future)

├── Dockerfile # Docker image definition

├── package-lock.json # Dependency lock file

├── package.json # Project dependencies and scripts

├── prometheus.yml # Prometheus monitoring configuration

└── README.md # Project documentation


---

## 🐳 Run Locally with Docker
# Build image
docker build -t electromart .

# Run container
docker run -p 5000:5000 electromart

Access the app:
👉 http://54.242.59.32/

📌 DevOps Roadmap

✅ Build Node.js backend & frontend

✅ Dockerize the application

✅ Set up GitHub Actions pipeline

✅ Push Docker images to DockerHub

✅ Provision AWS infrastructure with Terraform

✅ Deploy app to AWS EC2 / ECS

✅ Add monitoring with Prometheus + Grafana

✅ Secure pipeline with Trivy + secret management

🤝 Contributing

This project is for learning purposes, but feel free to fork and enhance it.

📜 License

MIT License



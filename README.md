# ⚡ ElectroMart

ElectroMart is a simple **Node.js e-commerce web application** for a tech shop.  
This project is built as part of a **DevOps pipeline project** to demonstrate modern practices like containerization, CI/CD, IaC, monitoring, and DevSecOps.

---

## 🚀 Features
- 🛒 Product listing with simple UI
- 📦 Shopping cart functionality
- ✅ Checkout process
- 🐳 Dockerized for containerized deployment
- ⚙️ Ready for CI/CD with GitHub Actions / Jenkins
- ☁️ Infrastructure as Code with Terraform
- 🔐 Basic DevSecOps practices (Trivy for image scanning)
- 📊 Monitoring with Prometheus + Grafana (to be integrated later)

---

## 🏗️ Tech Stack
- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, Vanilla JS
- **Database:** MongoDB (optional, can run without for demo)
- **Containerization:** Docker
- **Infrastructure:** AWS (EC2, S3, Security Groups) via Terraform
- **CI/CD:** GitHub Actions / Jenkins
- **Monitoring:** Prometheus + Grafana
- **Security:** Trivy for container scanning

---

## 📂 Project Structure
electromart/
├── config/ # Database configuration
├── controllers/ # Controllers for products & users
├── models/ # Mongoose models (optional for DB)
├── public/ # Frontend files (HTML, CSS, JS)
├── routes/ # API routes
├── src/ # Core app (app.js, server.js)
├── Dockerfile # Docker image definition
├── docker-compose.yml# Multi-container setup (future)
├── .gitignore # Ignored files
└── README.md # Documentation


---

## 🐳 Run Locally with Docker
```bash
# Build image
docker build -t electromart .

# Run container
docker run -p 5000:5000 electromart


Access the app:
👉 http://localhost:5000

📌 DevOps Roadmap

✅ Build Node.js backend & frontend

✅ Dockerize the application

⏳ Set up GitHub Actions pipeline

⏳ Push Docker images to DockerHub

⏳ Provision AWS infrastructure with Terraform

⏳ Deploy app to AWS EC2 / ECS

⏳ Add monitoring with Prometheus + Grafana

⏳ Secure pipeline with Trivy + secret management

🤝 Contributing

This project is for learning purposes, but feel free to fork and enhance it.

📜 License

MIT License


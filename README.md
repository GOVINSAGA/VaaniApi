# 🚀 Vaani API – Full Stack AI Text Improvement Platform

## 🌐 Live Demo

* 🔗 Frontend: https://vaani-ui.vercel.app
* 🔗 Backend API: https://govinsaga.pp.ua/api/swagger

---

## 📌 Project Overview

Vaani is a full-stack AI-powered application that allows users to:

* ✍️ Improve text using AI
* 🔐 Register & Login securely (JWT Authentication)
* 📜 View history of previous improvements

The system is deployed in a **production-ready architecture** using cloud infrastructure, reverse proxy, and HTTPS.

---

## 🧠 Architecture Overview

```
User (Browser)
    ↓
Frontend (Angular - Vercel)
    ↓ HTTPS
Domain (govinsaga.pp.ua)
    ↓
Nginx (Reverse Proxy + SSL)
    ↓
ASP.NET Core API (Port 5000)
    ↓
Service Layer (Business Logic)
    ↓
Entity Framework Core
    ↓
SQLite Database
```

---

## ⚙️ Tech Stack

### 🖥️ Frontend

* Angular (Standalone Architecture)
* Tailwind CSS
* Hosted on Vercel

### 🔙 Backend

* ASP.NET Core Web API (.NET 8)
* Entity Framework Core (Code First)
* SQLite Database
* JWT Authentication
* BCrypt Password Hashing

### ☁️ Deployment & DevOps

* Oracle Cloud Infrastructure (OCI)
* Ubuntu 22.04 VM
* Nginx (Reverse Proxy)
* Certbot (SSL / HTTPS)
* systemd (24/7 backend service)

---

## 🔐 Features

### ✅ Authentication

* User Registration
* Secure Login (JWT Token)
* Password hashing using BCrypt

### ✨ AI Text Improvement

* Sends user input to AI service
* Returns improved text
* Stores results in database

### 📜 History

* Fetch user-specific history
* Secured using JWT
* Sorted by latest entries

---

## 🔄 API Endpoints

### 🔐 Auth

```
POST /api/Auth/register
POST /api/Auth/login
```

### ✨ Improve

```
POST /api/Improve
```

### 📜 History

```
GET /api/History
```

---

## 🔑 Authentication Flow

1. User logs in → receives JWT token
2. Token stored in frontend (localStorage)
3. Token sent in headers:

```
Authorization: Bearer <token>
```

4. Backend validates token for protected routes

---

## 🚀 Deployment Steps (Summary)

### Backend

* Clone repository
* Install .NET SDK
* Publish project
* Run using systemd service (24/7)

### Server Setup

* Open ports (80, 443, 5000) in OCI
* Configure Nginx as reverse proxy
* Route `/api` → backend

### HTTPS

* Install Certbot
* Generate SSL certificate
* Enable HTTPS on domain

### Frontend

* Update API base URL
* Deploy via Vercel

---

## 🌍 Production URLs

| Service  | URL                                 |
| -------- | ----------------------------------- |
| Frontend | https://vaani-ui.vercel.app         |
| Backend  | https://govinsaga.pp.ua/api         |
| Swagger  | https://govinsaga.pp.ua/api/swagger |

---

## 🔥 Challenges & Solutions

### ❌ Mixed Content Error

* **Problem:** HTTPS frontend calling HTTP backend
* **Solution:** Enabled HTTPS using Certbot

---

### ❌ Port 5000 Not Accessible

* **Problem:** API not reachable from browser
* **Solution:**

  * Opened port in OCI security list
  * Fixed iptables firewall rules

---

### ❌ Backend Stops When Terminal Closes

* **Problem:** API ran only manually
* **Solution:** Configured systemd service

---

### ❌ Direct Port Exposure (:5000)

* **Problem:** Unclean production URL
* **Solution:** Used Nginx reverse proxy

---

## 📈 Future Improvements

* PostgreSQL instead of SQLite
* Docker containerization
* CI/CD pipeline
* Subdomain setup (`api.domain.com`)
* Logging & monitoring (Serilog, Prometheus)

---

## 👨‍💻 Author

**Govind**
Full Stack Developer | AI Enthusiast

---

## ⭐ Acknowledgement

This project demonstrates a **real-world production deployment** combining:

* Full-stack development
* Cloud infrastructure
* DevOps practices
* Secure API design

---

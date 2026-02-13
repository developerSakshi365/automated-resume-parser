# 📄 Automated Resume Parser Web Application

An **Automated Resume Parser** is a full-stack web application that extracts structured information from uploaded resumes (PDF files) such as **Name, Email, Phone Number, Skills, and Education** using Natural Language Processing (NLP). The parsed data is stored in a PostgreSQL database and displayed in a web dashboard.

This project demonstrates real-world implementation of **Python NLP, Flask backend, PostgreSQL database, and React frontend**.

---

## 🚀 Live Demo
 link - https://automated-resume-parser.vercel.app/

*(Replace with your deployed URLs)*

---

## 🧠 Features

- 📤 Upload PDF resumes
- 🧾 Automatically extract:
  - Name  
  - Email  
  - Phone Number  
  - Skills  
  - Education details
- 🗄 Store parsed data in PostgreSQL database
- 📊 Display parsed resumes in a table dashboard
- 🔄 Real-time refresh of parsed data
- 🌍 Web-based system accessible from anywhere

---

## 🛠️ Tech Stack

### 🔹 Frontend
- React.js  
- Axios  
- HTML, CSS  

### 🔹 Backend
- Python  
- Flask  
- spaCy (NLP)  
- PDFPlumber  
- Regular Expressions (Regex)  

### 🔹 Database
- PostgreSQL  

---

## ⚙️ How It Works

1. User uploads a resume (PDF).
2. Backend extracts text using **PDFPlumber**.
3. **spaCy NLP** and Regex detect:
   - Name
   - Email
   - Phone
   - Skills
   - Education
4. Parsed data is saved into **PostgreSQL database**.
5. React frontend fetches and displays data in a table.

---



### 🏗️ Project Structure

Automated-Resume-Parser/
│
├── frontend/ # React frontend
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend/ # Flask backend
│ ├── app.py
│ ├── parser.py
│ ├── requirements.txt
│ └── database.py
│
└── README.md


---

## 🧪 Installation & Running Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Automated-Resume-Parser.git
cd Automated-Resume-Parser

📦 Deployment
🌐 Frontend

Deployed on Vercel 

⚙️ Backend

Deployed on Render

🗄️ Database

PostgreSQL 
```

## 👩‍💻 Author

Sakshi Vishwakarma
B.Sc(IT) Student | Full Stack Developer | Python & Data Science Enthusiast

📧 Email: developersakshi365@gmail.com

🔗 GitHub: https://github.com/developerSakshi365


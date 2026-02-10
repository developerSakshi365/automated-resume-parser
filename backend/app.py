from flask import Flask, request, jsonify
from flask_cors import CORS
from parser import extract_text, parse_resume
from database import SessionLocal, engine, Base
from models import Resume
import os

Base.metadata.create_all(bind=engine)

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route("/", methods=["GET"])
def home():
    return jsonify({"status": "Backend is running"})

@app.route("/upload", methods=["POST"])
def upload_resume():
    file = request.files["file"]
    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    text = extract_text(filepath)
    data = parse_resume(text)

    db = SessionLocal()
    resume = Resume(**data)
    db.add(resume)
    db.commit()

    return jsonify(data)

@app.route("/resumes", methods=["GET"])
def get_resumes():
    db = SessionLocal()
    resumes = db.query(Resume).all()
    return jsonify([
        {
            "name": r.name,
            "email": r.email,
            "phone": r.phone,
            "skills": r.skills,
            "education": r.education
        }
        for r in resumes
    ])


if __name__ == "__main__":
    app.run(debug=True)

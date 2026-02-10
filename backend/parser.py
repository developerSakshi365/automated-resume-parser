import spacy
import pdfplumber
import re

nlp = spacy.load("en_core_web_sm")

def extract_text(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            if page.extract_text():
                text += page.extract_text() + "\n"
    return text


def parse_resume(text):
    text_lower = text.lower()
    doc = nlp(text)

    # ---------------- NAME
    name = ""
    lines = text.split("\n")
    for line in lines[:5]:
        if len(line.split()) <= 4 and line.replace(" ", "").isalpha():
            name = line.strip()
            break

    if not name:
        for ent in doc.ents:
            if ent.label_ == "PERSON":
                name = ent.text
                break

    # ---------------- EMAIL
    email = re.findall(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", text)

    # ---------------- PHONE
    phone = re.findall(r"\+?\d[\d -]{8,12}\d", text)

    # ---------------- SKILLS
    skills_list = ["python", "java", "c++", "react", "sql", "machine learning", "data science"]
    found_skills = [s.upper() for s in skills_list if s in text_lower]

    # ================= EDUCATION SECTION EXTRACTION ==================

    education = ""
    lines = text.split("\n")
    edu_section = False
    edu_lines = []

    for line in lines:
        line_lower = line.lower()

        # Start education section
        if "education" in line_lower:
            edu_section = True
            continue

        # Stop when another section starts
        if edu_section and any(h in line_lower for h in ["skills", "experience", "projects", "certifications"]):
            break

        # Collect education lines
        if edu_section and len(line.strip()) > 3:
            edu_lines.append(line.strip())

        # Limit lines
        if len(edu_lines) >= 5:
            break

    education = " | ".join(edu_lines)

    # ================================================================

    return {
        "name": name,
        "email": email[0] if email else "",
        "phone": phone[0] if phone else "",
        "skills": ", ".join(found_skills),
        "education": education
    }

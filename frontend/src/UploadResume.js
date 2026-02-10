import { useState } from "react";
import API from "./api";     // ✅ USE API FILE
import "./style.css";

function UploadResume({ setRefresh }) {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    await API.post("/upload", formData);  // ✅ FIXED
    alert("Resume Uploaded!");
    setRefresh(prev => !prev);
  };

  return (
    <div className="upload-card">
      <h2>📤 Upload Resume</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={upload}>Upload Resume</button>
    </div>
  );
}

export default UploadResume;

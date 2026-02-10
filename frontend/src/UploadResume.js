import { useState } from "react";   // ✅ import useState
import axios from "axios";  
import "./style.css";               // ✅ import axios

function UploadResume({ setRefresh }) {
  const [file, setFile] = useState(null);

  const upload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    await axios.post("http://localhost:5000/upload", formData);
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

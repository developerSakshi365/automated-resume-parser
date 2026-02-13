import { useEffect, useState } from "react";
import API from "./api";        // ✅ USE API FILE
import "./style.css";

function ResumeList({ refresh }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/resumes")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [refresh]);

  return (
    <div className="table-card">
      <h2>📄 Parsed Resumes</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Skills</th>
            <th>Education</th>
          </tr>
        </thead>

        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.phone}</td>
              <td>
                {r.skills?.split(",").map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </td>
              <td>
                <span className="edu-tag">{r.education}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ); 
}

export default ResumeList;
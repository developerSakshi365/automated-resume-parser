import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

function ResumeList({ refresh }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/resumes")
      .then(res => setData(res.data));
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
    <th>Education</th> {/* NEW */}
  </tr>
</thead>

       <tbody>
  {data.map((r, i) => (
    <tr key={i}>
      <td>{r.name}</td>
      <td>{r.email}</td>
      <td>{r.phone}</td>
      <td>
        {r.skills.split(",").map(skill => (
          <span className="skill-tag">{skill}</span>
        ))}
      </td>
<td>
  <span className="edu-tag">{r.education}</span>
</td>    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
}


export default ResumeList;


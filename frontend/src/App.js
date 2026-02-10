import React from "react";
import ResumeList from "./ResumeList";
import UploadResume from "./UploadResume";

function App() {
  const [refresh, setRefresh] = React.useState(false);

  return (
    <div className="app-container">
      <UploadResume setRefresh={setRefresh} />
      <ResumeList refresh={refresh} />
    </div>
  );
}

export default App;

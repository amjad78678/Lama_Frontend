import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Upload from "./components/projects/Upload/Upload";
import TranscriptEdit from "./components/projects/TranscriptEdit/TranscriptEdit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />}>
          <Route path="upload/:projectId" element={<Upload />} />
          <Route path="transcript/:projectId/:fileId" element={<TranscriptEdit />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

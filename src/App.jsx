import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Upload from "./components/projects/Upload/Upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />}>
          <Route path="upload/:projectId" element={<Upload />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

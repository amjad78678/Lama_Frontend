import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Upload from "./components/projects/upload/Upload";
import TranscriptEdit from "./components/projects/transcriptEdit/TranscriptEdit";
import WidgetConfigurations from "./components/projects/widgetConfigurations/WidgetConfigurations";
import SettingsPage from "./pages/SettingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />}>
          <Route path="upload/:projectId" element={<Upload />} />
          <Route
            path="transcript/:projectId/:fileId"
            element={<TranscriptEdit />}
          />
          <Route path="widget/:projectId" element={<WidgetConfigurations />} />
          <Route path="settings/:projectId" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

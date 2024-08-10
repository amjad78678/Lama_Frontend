import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import WidgetConfigurations from "./components/projects/widgetConfigurations/WidgetConfigurations";
import SettingsPage from "./pages/SettingsPage";
import TranscriptEdit from "./components/projects/transcriptEdit/TranscriptEdit.jsx";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Upload from "./components/projects/upload/Upload.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="" element={<ProtectedRoute />}>
          <Route path="/projects" element={<ProjectsPage />}>
            <Route path="upload/:projectId" element={<Upload />} />
            <Route
              path="transcript/:projectId/:fileId"
              element={<TranscriptEdit />}
            />
            <Route
              path="widget/:projectId"
              element={<WidgetConfigurations />}
            />
            <Route path="settings/:projectId" element={<SettingsPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

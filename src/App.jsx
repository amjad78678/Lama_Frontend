import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import Loader from "./components/common/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const WidgetConfigurations = lazy(() =>
  import("./components/projects/widgetConfigurations/WidgetConfigurations.jsx")
);
const SettingsPage = lazy(() => import("./pages/SettingsPage.jsx"));
const TranscriptEdit = lazy(() =>
  import("./components/projects/transcriptEdit/TranscriptEdit.jsx")
);
const Upload = lazy(() => import("./components/projects/upload/Upload.jsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </Router>
  );
}

export default App;

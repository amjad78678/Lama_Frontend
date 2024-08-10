import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Loader from "./components/common/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const WidgetConfigurations = lazy(() =>
  import("./components/projects/widgetConfigurations/WidgetConfigurations")
);
const SettingsPage = lazy(() => import("./pages/SettingsPage"));
const TranscriptEdit = lazy(() =>
  import("./components/projects/transcriptEdit/TranscriptEdit")
);
const Upload = lazy(() => import("./components/projects/upload/Upload"));

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

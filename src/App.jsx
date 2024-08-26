import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import Loader from "./components/common/Loader.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage.jsx"));
const WidgetConfigurations = lazy(() =>
  import("./components/projects/widgetConfigurations/WidgetConfigurations.jsx")
);
const SettingsPage = lazy(() => import("./pages/SettingsPage.jsx"));
const TranscriptEdit = lazy(() =>
  import("./components/projects/transcriptEdit/TranscriptEditFile.jsx")
);
const Upload = lazy(() =>
  import("./components/projects/common/UploadComponent.jsx")
);

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
//fix envs

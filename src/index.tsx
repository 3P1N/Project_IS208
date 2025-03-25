import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./i18n";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { HomePage } from "./pages/Home";
import { ProjectPage } from "./pages/Project";
import { TimelinePage } from "./pages/Timeline";
import { ProjectAgreementPage } from "./pages/ProjectAgreement"

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/Introduce" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Introduce/home" element={<HomePage />} />
          <Route path="/Introduce/about" element={<AboutPage />} />
          <Route path="/Introduce/project" element={<ProjectPage />} />
          <Route path="/Introduce/project-agreement" element={<ProjectAgreementPage />} />
          <Route path="/Introduce/timeline" element={<TimelinePage />} />
          <Route path="/Introduce/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>,
);
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
          <Route path="/Project_IS208" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Project_IS208/home" element={<HomePage />} />
          <Route path="/Project_IS208/about" element={<AboutPage />} />
          <Route path="/Project_IS208/project" element={<ProjectPage />} />
          <Route path="/Project_IS208/project-agreement" element={<ProjectAgreementPage />} />
          <Route path="/Project_IS208/timeline" element={<TimelinePage />} />
          <Route path="/Project_IS208/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  </StrictMode>,
);
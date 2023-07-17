import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from "./component/Header";

import Education from "./component/resume/Education";
import Skills from "./component/resume/Skills";
import Experience from "./component/resume/Experience";
import ResumeHome from "./component/resume/ResumeHome";
import PageLoader from "./component/PageLoader";

// Dynamic imports
const Home = lazy(() => import("./Home"));
const Features = lazy(() => import("./Features"));
const Resume = lazy(() => import("./Resume"));
const Blog = lazy(() => import("./Blog"));
const Contacts = lazy(() => import("./Contacts"));
const Footer = lazy(() => import("./Footer"));

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <AnimatePresence>
        <Suspense fallback={<PageLoader />}>
          <Routes location={location} key={location.key}>
            <Route index element={<Home />} />
            <Route path="features" element={<Features />} />
            <Route path="resume" element={<Resume />}>
              <Route index element={<ResumeHome />} />
              <Route path="education" element={<Education />} />
              <Route path="skills" element={<Skills />} />
              <Route path="experience" element={<Experience />} />
            </Route>
            <Route path="blog" element={<Blog />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
export default App;

import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Header from "./ui/Header";

import Education from "./component/resume/Education";
import Skills from "./component/resume/Skills";
import Experience from "./component/resume/Experience";
import ResumeHome from "./component/resume/ResumeHome";
import Modal from "./ui/Modal";
import PageLoader from "./ui/PageLoader";

// Dynamic imports
const Home = lazy(() => import("./pages/Home"));
const Features = lazy(() => import("./pages/Features"));
const Resume = lazy(() => import("./pages/Resume"));
const Blog = lazy(() => import("./pages/Blog"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Footer = lazy(() => import("./pages/Footer"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const close = () => setOpenModal(false);
  return (
    <div className="App">
      {openModal && (
        <Modal onClose={close} title={"under building"}>
          Sorry! These pages are under construction. We will build those pages
          as soon as possible. If you need any contact information or any
          material you can contact us through website or directly through email.
          Thank You
        </Modal>
      )}
      <AnimatePresence>
        <Header />
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
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
      <Footer setOpenModal={setOpenModal} />
    </div>
  );
}
export default App;

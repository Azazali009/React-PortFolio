import Header from "./component/Header";
import Home from "./Home";
import Features from "./Features";
import Resume from "./Resume";
import Contacts from "./Contacts";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Education from "./component/resume/Education";
import Skills from "./component/resume/Skills";
import Experience from "./component/resume/Experience";
import ResumeHome from "./component/resume/ResumeHome";
import Blog from "./Blog";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* <Router> */}
      <Header />
      <AnimatePresence>
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
      </AnimatePresence>
      <Footer />
      {/* </Router> */}
    </div>
  );
}

export default App;

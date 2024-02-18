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
import Login from "./pages/Login";
import Register from "./pages/Register";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import UserAccount from "./component/user/UserAccount";
import ForgotPassword from "./component/forgotPassword/ForgotPassword";
import RecoverPassword from "./component/forgotPassword/RecoverPassword";

// Dynamic imports
const Home = lazy(() => import("./pages/Home"));
const Features = lazy(() => import("./pages/Features"));
const Resume = lazy(() => import("./pages/Resume"));
const Blog = lazy(() => import("./pages/Blog"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Footer = lazy(() => import("./pages/Footer"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
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
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: "8px", fontFamily: "Montserrat" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "10px 24px",
              fontWeight: "500",
              background: "white",
              color: "rgb(33, 21, 21)",
            },
          }}
        />
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
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="me" element={<UserAccount />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="update-password" element={<RecoverPassword />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
        <Footer setOpenModal={setOpenModal} />
      </QueryClientProvider>
    </div>
  );
}
export default App;

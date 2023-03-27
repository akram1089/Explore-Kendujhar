import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Blog from "./Components/pages/Blog";
import Contact from "./Components/pages/Contact";
import Nav from "./Components/Nav";
import AdminPanel from "./Components/pages/AdminPanel";
import GotoTop from "./Components/pages/scrolltoTop";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { auth } from "./Components/database/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DetailsBlog from "./Components/pages/DetailsBlog";
import ErrorPage from "./Components/pages/ErrorPage";

import { popup } from "./Components/database/firebase";
import { provider } from "./Components/database/firebase";
function App() {

const login_first = useRef()

const log_first = ()=>{

  login_first.current.click()
}


  const Google_signin = () => {
    signInWithPopup(auth, provider)
    return toast.success('Welcome to explore kendujhar !', {
      position: toast.POSITION.TOP_CENTER
    });
  }




  const [user, setuser] = useState(null)
  const dismiss_login = useRef()
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dismiss_login.current.click()
        setuser(authUser)
      }
      else {
        setuser(null)
      }
    })
  }, [])
  const handleLogout = () => {
    signOut(auth).then(() => {
      setuser(null)
      return toast.warning('You have been logged  out  !', {
        position: toast.POSITION.TOP_CENTER
      });
    })
  }

  return (
    <BrowserRouter>
      <Nav user={user} handleLogout={handleLogout} dismiss_login={dismiss_login} Google_signin={Google_signin} login_first={login_first} />
      <ToastContainer position="top-center" />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog user={user} log_first={log_first} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<DetailsBlog user={user} />} />
        <Route path="/Admin_panel" element={<AdminPanel />} />

        <Route path="*" element={<ErrorPage />} />

      </Routes>
      <GotoTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

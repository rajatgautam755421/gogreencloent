import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Blog from "./components/blog/Blog";
import Signup from "./components/Register";
import Profile from "./components/Profle/Profile";
import SignIn from "./components/SignIn";
import Checkout from "./components/Checkout/Checkout";
import Dashboard from "./components/dashboard/MYDASHBOARD";

import { Toaster, toast } from "react-hot-toast";
import Blogpost from "./components/Blogpost/Blogpost";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <>
                <Navbar />
                <Signup />
              </>
            }
          ></Route>
          <Route
            path="/blog"
            element={
              <>
                <Navbar />
                <Blog />
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <>
                <Navbar />
                <Profile />
              </>
            }
          ></Route>
          <Route
            path="/signin"
            element={
              <>
                <Navbar />
                <SignIn />
              </>
            }
          ></Route>
          <Route
            path="/blog/blogpost"
            element={
              <>
                <Navbar />
                <Blogpost />
              </>
            }
          ></Route>
          <Route path="/cart" element={<Checkout />}></Route>
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar />
                <Dashboard />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

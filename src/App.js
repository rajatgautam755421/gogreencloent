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

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/cart" element={<Checkout />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

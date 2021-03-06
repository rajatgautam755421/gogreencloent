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
import { Toaster } from "react-hot-toast";
import Blogpost from "./components/Blogpost/Blogpost";
import CreatePost from "./components/createAPost/CreatePost";
import ViewUserProfile from "./components/ViewUserProfile/ViewUserProfile";
import ScrollToTop from "./components/ScrollToTop";
import CommentOnBlog from "./components/commentOnBlog/CommentOnBlog";
import UserCheckoutDetails from "./components/UserCheckoutDetails/UserCheckoutDetails";
import AllSalesItems from "./components/AllSalesItems/AllSalesItems";
import UpdateUserInfo from "./components/UpdateUserInfo/UpdateUserInfo";
import Aerika from "./components/Aerika/Aerika";
import AericaCart from "./components/AericaCart/AericaCart";
import AddAreca from "./components/AddAreca/AddAreca";
import UpdateUserPic from "./components/UpdateUserPic";

function App() {
  localStorage.setItem("mycart", JSON.stringify([]));
  return (
    <div className="App">
      <Toaster />
      <Router>
        <ScrollToTop>
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
              path="/aerika"
              element={
                <>
                  <Navbar />
                  <Aerika />
                </>
              }
            />
            <Route
              path="/add-aerika"
              element={
                <>
                  <Navbar />
                  <AddAreca />
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
              path="/checkout/details/:id"
              element={
                <>
                  <Navbar />
                  <UserCheckoutDetails />
                </>
              }
            ></Route>
            <Route
              path="/update-user-info/:info"
              element={
                <>
                  <UpdateUserInfo />
                </>
              }
            ></Route>
            <Route
              path="/update-user-pic"
              element={
                <>
                  <UpdateUserPic />
                </>
              }
            ></Route>
            <Route
              path="/allsalesitems"
              element={
                <>
                  <Navbar />
                  <AllSalesItems />
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
              path="/comment/:blogId"
              element={
                <>
                  <Navbar />
                  <CommentOnBlog />
                </>
              }
            ></Route>
            <Route
              path="/signup"
              element={
                <>
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
                  <SignIn />
                </>
              }
            ></Route>
            <Route
              path="/user-profile/:id"
              element={
                <>
                  <Navbar />
                  <ViewUserProfile />
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

            <Route
              path="/createpost"
              element={
                <>
                  <Navbar />
                  <CreatePost />
                </>
              }
            ></Route>
            <Route
              path="/cart/:id"
              element={
                <>
                  <Navbar />
                  <Checkout />
                </>
              }
            ></Route>
            <Route
              path="/aericacart"
              element={
                <>
                  <Navbar />
                  <AericaCart />
                </>
              }
            ></Route>
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
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

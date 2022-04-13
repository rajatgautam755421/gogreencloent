import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const SignUp = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [unHashedPassword, setUnHashedPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [picLoading, setPicLoading] = useState(false);
  const [retypePass, setReTypePass] = useState("");
  const [pic, setPic] = useState();
  const [type, setType] = useState(false);
  const [not, setNot] = useState(true);
  const [secured, setSecured] = useState(false);

  const [role, setRole] = useState("Buyer");
  const navigate = useNavigate();
  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    console.log(pics);

    const data = new FormData();
    data.append("file", pics);

    data.append("upload_preset", "ml_default");

    data.append("cloud_name", "mechi-pharma1233");

    fetch("https://api.cloudinary.com/v1_1/mechi-pharma1233/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setPic(data.url.toString());

        console.log(pic);
        setPicLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPicLoading(false);
      });
  };

  const handleClick = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (name === "" || email === "" || unHashedPassword === "" || role === "") {
      toast.error("Fields Are Empty");
    } else {
      if (unHashedPassword !== retypePass) {
        toast.error("Password Did Not Matched");
      } else {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/register",
          {
            name,
            email,
            unHashedPassword,
            pic,
            role,
          }
        );
        try {
          console.log(data);
          setEmail("");
          setName("");
          setUnHashedPassword("");

          if (data.status === "failed") {
            setError(data.msg);
          }
          toast.success("Registration Successfull...");
          toast.success("Redirecting To Login.");
          setTimeout(() => {
            navigate("/signin");
          }, 1600);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          console.log(error.message.msg);
          setLoading(false);
        }
      }
    }
  };
  if (error !== "") {
    toast.error(error);
  }

  const handleKey = () => {
    const regex = new RegExp("(?=.*[0-9])");
    const regex1 = new RegExp("(?=.*[!@#$%^&*])");
    const regex2 = new RegExp("(?=.*[A-Z])");

    if (
      unHashedPassword.match(regex) &&
      unHashedPassword.match(regex1) &&
      unHashedPassword.match(regex2)
    ) {
      setSecured(true);
    } else {
      setSecured(false);
    }
  };
  return (
    <>
      <div>
        <Toaster />
      </div>

      <section className="overflow-hidden">
        <div className="w-1/1 flex min-h-screen overflow-hidden ">
          <div
            className="
            flex flex-col
            w-1/1
            justify-center
            flex-1
            px-4
            
            overflow-hidden
            sm:px-6
            lg:flex-none lg:px-20
            xl:px-24
            main__secction
          "
            style={{ width: "100%" }}
          >
            <div className="w-1/1 max-w-xl mx-auto lg:w-1/1 register__main">
              <div>
                <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                  {" "}
                  Sign Up To <span style={{ color: "#22C514" }}>
                    Go Green
                  </span>{" "}
                </h2>
              </div>
              <div className="mt-8">
                <div className="mt-6">
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Name{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          autocomplete="email"
                          required=""
                          placeholder="Your Name"
                          className="
                          block
                          w-full
                          px-5
                          py-3
                          text-base text-neutral-600
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autocomplete="email"
                          required=""
                          placeholder="Your Email"
                          className="
                          block
                          w-full
                          px-5
                          py-3
                          text-base text-neutral-600
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        for="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div
                        className="mt-1"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          id="password"
                          name="password"
                          type={type ? "text" : "password"}
                          autocomplete="current-password"
                          required=""
                          placeholder="Your Password"
                          className="
                          block
                          w-full
                          px-5
                          py-3
                          text-base text-neutral-600
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                          value={unHashedPassword}
                          onChange={(e) => setUnHashedPassword(e.target.value)}
                          onKeyUp={handleKey}
                        />
                        {not ? (
                          <VisibilityOffIcon
                            className="no__visibility"
                            onClick={() => {
                              setType(!type);
                              setNot(!not);
                            }}
                          />
                        ) : (
                          <VisibilityIcon
                            className="no__visibility"
                            onClick={() => {
                              setType(!type);
                              setNot(!not);
                            }}
                          />
                        )}
                        {secured && (
                          <CheckCircleOutlineOutlinedIcon className="check__icon" />
                        )}
                      </div>
                    </div>

                    {/* Retype Password */}
                    <div className="space-y-1">
                      <label
                        for="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Retype Password{" "}
                      </label>
                      <div
                        className="mt-1"
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          id="password"
                          name="password"
                          type={type ? "text" : "password"}
                          autocomplete="current-password"
                          required=""
                          placeholder="Retype Password"
                          className="
                          block
                          w-full
                          px-5
                          py-3
                          text-base text-neutral-600
                          placeholder-gray-300
                          transition
                          duration-500
                          ease-in-out
                          transform
                          border border-transparent
                          rounded-lg
                          bg-gray-50
                          focus:outline-none
                          focus:border-transparent
                          focus:ring-2
                          focus:ring-white
                          focus:ring-offset-2
                          focus:ring-offset-gray-300
                        "
                          value={retypePass}
                          onChange={(e) => setReTypePass(e.target.value)}
                        />
                        {not ? (
                          <VisibilityOffIcon
                            className="no__visibility"
                            onClick={() => {
                              setType(!type);
                              setNot(!not);
                            }}
                          />
                        ) : (
                          <VisibilityIcon
                            className="no__visibility"
                            onClick={() => {
                              setType(!type);
                              setNot(!not);
                            }}
                          />
                        )}
                      </div>
                    </div>
                    {/* Radio Buttons */}

                    {/* Input File */}

                    <div class="mb-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Profile Picture{" "}
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="formFile"
                        accept="image/*"
                        onChange={(e) => postDetails(e.target.files[0])}
                        style={{ marginTop: "6px" }}
                      />
                    </div>

                    {/* Buyer Or Seller */}
                    <label
                      for="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Are You A Buyer Or Seller?
                    </label>
                    <div
                      className="container"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div
                        className={`${
                          role === "Buyer" ? "color" : "container__all"
                        }`}
                        style={{
                          width: "200px",
                          height: "60px",
                          border: "1px solid black",
                          cursor: "pointer",
                          borderRadius: "6px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "20px",
                        }}
                        onClick={() => setRole("Buyer")}
                      >
                        <h1>Buyer</h1>
                      </div>
                      <div
                        className={`${
                          role === "Seller" ? "color1" : "container__all"
                        }`}
                        style={{
                          width: "200px",
                          height: "60px",
                          border: "1px solid black",
                          cursor: "pointer",
                          borderRadius: "6px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "20px",
                        }}
                        onClick={() => setRole("Seller")}
                      >
                        <h1>Seller</h1>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="
                        flex
                        items-center
                        justify-center
                        w-full
                        px-10
                        py-4
                        text-base
                        font-medium
                        text-center text-white
                        transition
                        duration-500
                        ease-in-out
                        transform
                        bg-blue-600
                        rounded-xl
                        hover:bg-blue-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-500
                      "
                        style={{ backgroundColor: "#22c514" }}
                        onClick={handleClick}
                      >
                        {" "}
                        Sign Up{" "}
                      </button>
                    </div>
                  </form>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="
                      w-full
                      items-center
                      block
                      px-10
                      py-3.5
                      text-base
                      font-medium
                      text-center text-blue-600
                      transition
                      duration-500
                      ease-in-out
                      transform
                      border-2 border-white
                      shadow-md
                      rounded-xl
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-gray-500
                    "
                    >
                      <div
                        style={{ color: "#22c514" }}
                        className="flex items-center justify-center"
                      >
                        Already A User :
                        <Link to="/signin">
                          <span className="ml-4">Login</span>
                        </Link>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;

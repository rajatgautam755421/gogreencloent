import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Spinner from "./Spinner";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState(false);
  const [not, setNot] = useState(true);
  const [loading, setLoading] = useState(false);

  const history = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleClick = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:3000/api/v1/login", {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      history("/");
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data.msg);
      setError(error.response.data.msg);
      setLoading(false);
    }
    if (error !== "") {
      toast.error(error);
    }
  };

  useEffect(() => {
    if (userInfo) {
      history("/");
    }
  });

  return (
    <>
      {loading && <Spinner />}
      <section className="overflow-hidden">
        <div className="flex min-h-screen overflow-hidden">
          <div className="w-full max-w-xl mx-auto lg:w-96 mt-6 register__main">
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-600">
                {" "}
                Sign In To <span style={{ color: "#22C514" }}>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <a
                        style={{ color: "#22c514" }}
                        href="#"
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        {" "}
                        Forgot your password?{" "}
                      </a>
                    </div>
                  </div>
                  <div>
                    <button
                      style={{ backgroundColor: "#22c514" }}
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
                      onClick={handleClick}
                    >
                      {" "}
                      Sign in{" "}
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
                      Not A User :
                      <Link to="/signup">
                        <span className="ml-4">Register</span>
                      </Link>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;

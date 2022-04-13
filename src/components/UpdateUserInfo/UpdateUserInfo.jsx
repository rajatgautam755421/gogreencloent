import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const UpdateUserInfo = () => {
  const { info } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleChange = (e) => {
    e.preventDefault();
    if (info === "name") {
      setName(e.target.value);
      console.log(name);
    } else {
      setEmail(e.target.value);
      console.log(email);
    }
  };
  const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[@][a-zA-Z]+[.][a-zA-Z]+$/;
  const handleClick = async () => {
    if (info === "name") {
      if (name !== "") {
        try {
          const { data } = await axios.put(
            `http://localhost:3000/api/v1/finduserandupdatename/${
              userInfo ? userInfo._id : null
            }`,
            { name }
          );
          console.log(data);
          localStorage.setItem("userInfo", JSON.stringify(data));
          toast.success(
            info === "name" ? "Your Name Is Updated" : "Your Email Is Updated"
          );
          setName("");
        } catch (error) {
          console.log(error.messsage);
          toast.error("Name Already Exists");
        }
      } else {
        toast.error("Name Can't Be Empty");
      }
    } else if (info === "email") {
      if (email.match(emailRegex)) {
        const { data } = await axios.put(
          `http://localhost:3000/api/v1/finduserandupdateemail/${
            userInfo ? userInfo._id : null
          }`,
          { email }
        );
        console.log(data);
        try {
          if (data !== "This Email Already Exists") {
            localStorage.setItem("userInfo", JSON.stringify(data));
            toast.success(
              info === "name" ? "Your Name Is Updated" : "Your Email Is Updated"
            );
            setEmail("");
          } else {
            toast.error("Email Already Exists");
          }
        } catch (error) {
          console.log(error);
          toast.error("Email Already Exists");
        }
      } else {
        toast.error("Email Can't Be Empty");
      }
    }
  };
  return (
    <>
      <h1 style={{ fontSize: "25px", margin: "20px 0px", textAlign: "center" }}>
        {info === "name" ? "Update Your Name" : "Update Your Email"}
      </h1>
      <div className="container">
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="text"
            autocomplete="email"
            required=""
            placeholder={
              info === "name" ? "Update Your Name" : "Update Your Email"
            }
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
            value={`${info === "name" ? name : email}`}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="container comment__div">
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
          Update{" "}
        </button>
      </div>

      <Link to="/profile">
        <h1
          style={{ fontSize: "20px", margin: "20px 0px", textAlign: "center" }}
        >
          Go Back To Profile
        </h1>
      </Link>
    </>
  );
};

export default UpdateUserInfo;

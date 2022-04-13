import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./index.css";

const Index = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [pic, setPic] = useState("");
  const postDetails = (pics) => {
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = async () => {
    if (pic !== "") {
      try {
        const { data } = await axios.put(
          `http://localhost:3000/api/v1/finduserandupdatephoto/${
            userInfo ? userInfo._id : null
          }`,
          { pic }
        );
        console.log(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        toast.success("Your Profile Picture Is Updated");
        setPic("");
      } catch (error) {
        console.log(error.messsage);
      }
    } else {
      toast.error("Picture Can't Be Empty");
    }
  };

  return (
    <>
      {/* Input File */}
      <div className="container mt-10">
        <div class="mb-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-600"
          >
            {" "}
            Update Your Profile Picture{" "}
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

export default Index;

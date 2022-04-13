import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import Spinner from "../Spinner";
import Typewriter from "typewriter-effect";
import "./CreatePost.css";

const CreatePost = () => {
  const [product_desc, setProduct_desc] = useState("");
  const [product_price, setProduct_price] = useState();
  const [product_amount, setProduct_amount] = useState();
  const [location, setLocation] = useState("");
  const [product_image, setProduct_image] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const user_id = userInfo._id;

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
        setProduct_image(data.url.toString());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (
      product_desc === "" ||
      product_price === "" ||
      product_amount === "" ||
      location === ""
    ) {
      toast.error("Fields Are Empty");
      setLoading(false);
    } else {
      if (product_amount <= 0 || product_price <= 0) {
        toast.error("Fields Can't Be negative");
      } else {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/sales",
          {
            user_id,
            product_image,
            product_desc,
            product_price,
            product_amount,
            location,
          }
        );
        try {
          console.log(data);
          if (data.status === "failed") {
            setError(data.msg);
          }
          setLoading(false);
          setProduct_amount("");
          setProduct_desc("");
          setLocation("");
          setProduct_price("");
          toast.success("Successfully Posted");
        } catch (error) {
          setError(error.message);
          console.log(error.message.msg);
          setLoading(false);
        }
      }
    }
  };

  return (
    <>
      {loading && <Spinner />}
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
                <h1 className="mainservices__title__main">
                  <Typewriter
                    options={{
                      strings: ["Create A Sell Seller!!!"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
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
                        Product Price{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="number"
                          autocomplete="email"
                          required=""
                          placeholder="Product Price"
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
                          value={product_price}
                          onChange={(e) => setProduct_price(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Product Amount{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="number"
                          autocomplete="email"
                          required=""
                          placeholder="Product Amount"
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
                          value={product_amount}
                          onChange={(e) => setProduct_amount(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Product Description{" "}
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="email"
                          name="email"
                          type="text"
                          autocomplete="email"
                          required=""
                          placeholder="Product Description"
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
                          value={product_desc}
                          onChange={(e) => setProduct_desc(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Location{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="text"
                          autocomplete="email"
                          required=""
                          placeholder="Location"
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
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Input File */}
                    <div class="mb-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Select Product Image{" "}
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
                        Post{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatePost;

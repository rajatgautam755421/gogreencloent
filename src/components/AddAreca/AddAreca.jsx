import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "./AddAreca.css";

const AddAreca = () => {
  const [name, setName] = useState("");
  const [iteminfo, setItemInfo] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [photo, setPhoto] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      iteminfo !== "" &&
      price !== undefined &&
      quantity !== undefined &&
      photo !== ""
    ) {
      const { data } = await axios.post("http://localhost:3000/api/v1/aerika", {
        name,
        iteminfo,
        price,
        quantity,
        photo,
      });
      try {
        console.log(data);
        setName("");
        setItemInfo("");
        setPhoto("");
        setPrice(undefined);
        setQuantity(undefined);
        toast.success("Successfully Posted");
      } catch (error) {
        console.log(error.message);
      }
    } else {
      toast.error("Fileds Are Empty");
    }
  };

  return (
    <>
      <section className="overflow-hidden">
        <div className="flex min-h-screen overflow-hidden">
          <div className="w-full max-w-xl mx-auto lg:w-96 mt-6 register__main">
            <div>
              <h2 className="text-3xl font-extrabold text-neutral-600">
                {" "}
                Post Areca Product
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
                        placeholder="Name"
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
                      Item Info{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autocomplete="email"
                        required=""
                        placeholder="Item Info"
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
                        value={iteminfo}
                        onChange={(e) => setItemInfo(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      for="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Price{" "}
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
                        type="number"
                        autocomplete="current-password"
                        required=""
                        placeholder="Price"
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
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      for="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Quantity{" "}
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
                        type="number"
                        autocomplete="current-password"
                        required=""
                        placeholder="Quantity"
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
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      for="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Photo{" "}
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
                        type="text"
                        autocomplete="current-password"
                        required=""
                        placeholder="Photo"
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
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                      />
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
                      Post{" "}
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
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddAreca;

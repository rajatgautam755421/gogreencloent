import axios from "axios";
import React, { useState } from "react";
import "./Blogpost.css";
import { toast } from "react-hot-toast";

const Blogpost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    if (title !== "" || description !== "") {
      try {
        const { data } = await axios.post("http://localhost:3000/api/v1/blog", {
          title,
          description,
        });
        console.log(data);
        toast.success("Blog Posted Successfully");
        setDescription("");
        setTitle("");
      } catch (error) {
        console.log(error.message);
        toast.success("Blog Is Not Posted");
      }
    } else {
      toast.error("Fields Are Empty");
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
                Post A Blog
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
                      Title Of The Post{" "}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        autocomplete="email"
                        required=""
                        placeholder="Title"
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label
                      for="password"
                      className="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Description Of The Post{" "}
                    </label>
                    <div
                      className="mt-1"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <textarea
                        id="password"
                        name="password"
                        type="text"
                        autocomplete="current-password"
                        required=""
                        placeholder="Description"
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
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
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

export default Blogpost;

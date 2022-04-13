import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Confirm = ({ setConfirm }) => {
  let navigate = useNavigate();

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const handleClick = async () => {
    const { data } = await axios.delete(
      `http://localhost:3000/api/v1/deleteUser/${
        userInfo ? userInfo._id : null
      }`
    );
    try {
      console.log(data);
      localStorage.removeItem("userInfo");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <section>
        <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div class="grid grid-cols-1 ">
            <div class="w-full max-w-lg mx-auto my-4 bg-white shadow-xl rounded-xl">
              <div class="p-6 lg:text-center">
                <h4 class="mt-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl ">
                  {" "}
                  Do You Want To Delete Your Account?
                </h4>

                <div class="flex gap-2 mt-6 max-w-7xl lg:justify-center">
                  <div class="mt-3 rounded-lg sm:mt-0 ">
                    <button
                      class="
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
                      onClick={() => setConfirm(false)}
                    >
                      {" "}
                      Decline{" "}
                    </button>
                  </div>
                  <div class="mt-3 rounded-lg sm:mt-0 ">
                    <button
                      class="
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
                      onClick={handleClick}
                    >
                      {" "}
                      Accept{" "}
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

export default Confirm;

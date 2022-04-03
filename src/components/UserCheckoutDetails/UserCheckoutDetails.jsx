import React from "react";
import "./UserCheckoutDetails.css";

const UserCheckoutDetails = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return (
    <>
      <h1 style={{ fontSize: "20px", textAlign: "center", margin: "10px 0px" }}>
        Hey {userInfo ? userInfo.name : null} . Please Enter Your Additional
        Details
      </h1>
      <form action="" style={{ width: "40%", margin: "20px auto" }}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-600"
          >
            {" "}
            Address1{" "}
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="text"
              autocomplete="email"
              required=""
              placeholder="Your Address1"
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
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div style={{ margin: "10px 0px" }}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-600"
          >
            {" "}
            Address2{" "}
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="text"
              autocomplete="email"
              required=""
              placeholder="Your Address2"
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
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div style={{ margin: "10px 0px" }}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-600"
          >
            {" "}
            Phone Number{" "}
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="text"
              autocomplete="email"
              required=""
              placeholder="Your Phone Number"
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
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div style={{ margin: "10px 0px" }}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-600"
          >
            {" "}
            Purpose Of Buying The Product
          </label>
          <div className="mt-1">
            <textarea
              id="email"
              name="email"
              type="text"
              autocomplete="email"
              required=""
              placeholder="Purpose"
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
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div style={{ margin: "10px 0px" }}>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-600"
          >
            {" "}
            Description About Yourself{" "}
          </label>
          <div className="mt-1">
            <textarea
              id="email"
              name="email"
              type="text"
              autocomplete="email"
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
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default UserCheckoutDetails;

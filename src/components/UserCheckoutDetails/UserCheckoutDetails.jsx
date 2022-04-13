import React, { useEffect, useState } from "react";
import "./UserCheckoutDetails.css";
import KhaltiCheckout from "khalti-checkout-web";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReviewUser from "../ReviewUser/ReviewUser";

let config = {
  publicKey: "test_public_key_217cd8ec1209455bbc10c8a7c1c7813e",
  productIdentity: "1234567890",
  productName: "Drogon",
  productUrl: "http://localhost:3001",
  eventHandler: {
    onSuccess(payload) {
      toast.success("Payment Successful");
      console.log(payload);
      axios
        .post("http://localhost:3000/api/v1/payment/verify/", payload)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      const { amount, idx, mobile, product_name, product_url } = payload;
      const { data } = axios.post("http://localhost:3000/api/v1/payment", {
        amount,
        idx,
        mobile,
        product_name,
        product_url,
      });
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

let checkout = new KhaltiCheckout(config);

const UserCheckoutDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState(false);
  const [sales, setSales] = useState({});
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [number, setNumber] = useState("");
  const [buying, setBuying] = useState("");
  const [desc, setDesc] = useState("");
  const [checkOut, setCheckOut] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/findsales/${id}`
      );
      try {
        setSales(data[0]);
        console.log(sales);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchSales();
  }, []);

  // const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[@][a-zA-Z]+[.][a-zA-Z]+$/;

  useEffect(() => {
    if (
      address1 !== "" &&
      address2 !== "" &&
      number !== "" &&
      desc !== "" &&
      buying !== "" &&
      number.length === 10
    ) {
      setCheckOut(true);
    } else {
      setCheckOut(false);
    }
  });
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const handleClick = async (e) => {
    e.preventDefault();
    checkout.show({ amount: 1000 });
  };

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
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
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
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
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
              value={buying}
              onChange={(e) => setBuying(e.target.value)}
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
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>

        {checkOut ? (
          <div className="title ">
            {/* button */}
            <button
              onClick={handleClick}
              style={{
                width: "100px",
                height: "40px",
                color: "white",
                backgroundColor: "#4D2A7A",
                borderRadius: "10px",
                fontSize: "16px",
              }}
            >
              Checkout
            </button>
          </div>
        ) : null}
      </form>
    </>
  );
};

export default UserCheckoutDetails;

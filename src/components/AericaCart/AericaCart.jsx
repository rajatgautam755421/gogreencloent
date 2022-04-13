import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/AericaItemsContext";
import AericaCard from "../Aerika/AericaCard";
import Typewriter from "typewriter-effect";
import axios from "axios";
import KhaltiCheckout from "khalti-checkout-web";
import { toast } from "react-hot-toast";

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
      const { data } = axios.post(
        "http://localhost:3000/api/v1/payment-areca",
        {
          amount,
          idx,
          mobile,
          product_name,
          product_url,
        }
      );
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

const AericaCart = () => {
  const { items } = useContext(cartContext);
  const totalPrice = items
    ? items.reduce((a, b) => {
        return a + b.price;
      }, 0)
    : null;

  const handleClick = async (e) => {
    e.preventDefault();
    checkout.show({ amount: 1000 });
  };
  return (
    <>
      <h1 className="mainservices__title">
        <Typewriter
          options={{
            strings: ["My Cart"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      {items.length === 0 ? (
        <>
          <h1
            style={{
              fontSize: "25px",
              margin: "20px 0px",
              textAlign: "center",
            }}
          >
            No Items In Cart Add Something
          </h1>
          <Link
            to="/aerika"
            style={{
              fontSize: "25px",
              margin: "20px 0px",
              textAlign: "center",
              color: "blue",
            }}
          >
            <h1
              style={{
                fontSize: "25px",
                margin: "20px 0px",
                textAlign: "center",
              }}
            >
              Buy Aerika Utensils
            </h1>
          </Link>
        </>
      ) : (
        <div className="container">
          <div className="row">
            {items
              ? items.map((value) => {
                  return (
                    <>
                      <AericaCard value={value} />
                    </>
                  );
                })
              : null}
          </div>
        </div>
      )}

      {totalPrice !== 0 ? (
        <div
          className="border border-gray-200 p-6 rounded-lg"
          style={{ width: "40%", margin: "50px auto" }}
        >
          <h2
            className="text-lg text-gray-700 font-medium title-font mb-2"
            style={{ textAlign: "center", fontSize: "20px" }}
          >
            Total Price For {items ? items.length : null} Products
          </h2>
          <div className="container" style={{ marginTop: "20px" }}></div>
          <h2
            className="text-xl text-gray-1400 font-medium title-font mb-2"
            style={{ textAlign: "center", fontSize: "40px", marginTop: "20px" }}
          >
            Rs. {totalPrice}
          </h2>
        </div>
      ) : null}

      <div style={{ display: "flex", justifyContent: "center" }}>
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
          Pay Rs. {totalPrice ? totalPrice : null}
        </button>
      </div>
    </>
  );
};

export default AericaCart;

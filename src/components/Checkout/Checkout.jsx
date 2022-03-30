import React, { useState, useEffect } from "react";
import KhaltiCheckout from "khalti-checkout-web";
import "./Checkout.css";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import CheckoutEmements from "./CheckoutEmements";

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

const total = 100;

const handleClick = (e) => {
  e.preventDefault();
  checkout.show({ amount: total * 100 });
};

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (name !== "" && email !== "" && number !== "" && address !== "") {
      setValid(true);
    } else {
      setValid(false);
    }
  });

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="container">
        <h3 className="title">My Cart</h3>
        <br />

        <div className="row">
          <div className="col-md-6 col-sm-12 col-xl-5">
            <CheckoutEmements />
            <CheckoutEmements />
            <CheckoutEmements />
            <CheckoutEmements />
            <CheckoutEmements />

            <h1 style={{ fontSize: "20px" }}>Total Price : Rs.1000</h1>
          </div>

          {/* <div className="col-md-6 col-sm-12 col-xl-5">
            <div className="box">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-xl-7">
                  <h6 className="itemtitle">Item info </h6>
                  <div className="itemDetail">
                    Name:Bottle <br />
                    Quantity:4kg
                  </div>
                </div>

                <div className="col-md-6 col-sm-6 col-xl-5">
                  <img
                    className="Image"
                    src="https://www.euractiv.com/wp-content/uploads/sites/2/2021/09/Bali-plastic-polllution-scaled.jpg"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="box">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xl-7">
                  <h6 className="itemtitle">Item info </h6>
                  <div className="itemDetail">
                    Name:Bottle <br />
                    Quantity:4kg
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xl-5">
                  <img
                    className="Image"
                    src="https://www.euractiv.com/wp-content/uploads/sites/2/2021/09/Bali-plastic-polllution-scaled.jpg"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="box">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-xl-7">
                  <h6 className="itemtitle">Item info </h6>
                  <div className="itemDetail">
                    Name:Bottle <br />
                    Quantity:4kg
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 col-xl-5">
                  <img
                    className="Image"
                    src="https://www.euractiv.com/wp-content/uploads/sites/2/2021/09/Bali-plastic-polllution-scaled.jpg"
                  />
                </div>
              </div>
            </div>
            <br />
            <h1 style={{ fontSize: "40px" }}>Rs.{total}</h1>
          </div> */}
          <div className="col-md-6 col-sm-12 col-xl-1"></div>
          <div className="col-md-6 col-sm-12 col-xl-6">
            <h4 className="price">Enter all Fields</h4>
            <hr className="horizontal" />
            <form>
              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" class="form-label">
                  User name:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              {valid && (
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
                    }}
                  >
                    Checkout
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        <br />

        <br />
      </div>
    </>
  );
};

export default Checkout;

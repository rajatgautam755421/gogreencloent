import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Checkout.css";
import ReactStars from "react-stars";
import { toast } from "react-hot-toast";

const Checkout = () => {
  const { id } = useParams();
  const [sales, setSales] = useState({});
  const [showReviews, setShowReviews] = useState(false);
  const [ratings, setratings] = useState([]);
  const [averageRat, setAvegareRat] = useState(0);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const product_id = id;
  const email = userInfo.email;
  const image = userInfo.pic;

  const ratingChanged = async (newRating) => {
    console.log(newRating);
    const rating = newRating;
    try {
      const { data } = await axios.post(
        `http://localhost:3000/api/v1/rating/${product_id}`,
        { email, image, rating }
      );
      console.log(data);
      toast.success(`You Have Rated This Product With Rating ${rating}`);
    } catch (error) {
      console.log(error.message);
    }
  };

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

  useEffect(() => {
    const fetchRating = async () => {
      const product_id = id;
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/rating/all/${product_id}`
        );
        setratings(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchRating();
  });

  const sumRating = ratings
    ? ratings.reduce((a, b) => {
        return a + b.rating;
      }, 0)
    : null;

  useEffect(() => {
    const averageRating = sumRating / ratings.length;
    setAvegareRat(averageRating);
  });

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-1 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {sales.product_desc}
              </h1>
              <div className="flex mb-4">
                <a
                  className={
                    showReviews === false
                      ? "flex-grow text-indigo-500 py-2 text-lg px-1 show__border"
                      : "flex-grow text-indigo-500 border-b-2 border-gray-300 py-2 text-lg px-1"
                  }
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                  }}
                  onClick={() => setShowReviews(false)}
                >
                  Description
                </a>
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                  }}
                  className={
                    showReviews
                      ? "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 show__border"
                      : "flex-grow border-b-2 border-gray-300 py-2 text-lg px-1"
                  }
                  onClick={() => setShowReviews(true)}
                >
                  Reviews
                </a>
              </div>

              {showReviews === false ? (
                <>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Product Amount</span>
                    <span className="ml-auto text-gray-900">
                      {sales.product_amount}
                    </span>
                  </div>
                  <div className="flex border-t border-gray-200 py-2">
                    <span className="text-gray-500">Product Price</span>
                    <span className="ml-auto text-gray-900">
                      {sales.product_price}
                    </span>
                  </div>
                  <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                    <span className="text-gray-500">Location</span>
                    <span className="ml-auto text-gray-900">
                      {sales.location}
                    </span>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      Rs. {sales.product_price}
                    </span>
                    <Link to={`/checkout/details/${id}`}>
                      <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded checkout__button">
                        Checkout
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <h1>Review this product {userInfo ? userInfo.name : null}</h1>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={37}
                    color2={"#ffd700"}
                  />

                  <div className="border border-gray-200 p-6 rounded-lg">
                    <h2
                      className="text-lg text-gray-600 font-medium title-font mb-2"
                      style={{ textAlign: "center" }}
                    >
                      Average Rating Of This Product
                    </h2>
                    <h2
                      className="text-xl text-gray-900 font-medium title-font mb-2"
                      style={{ textAlign: "center" }}
                    >
                      <div
                        className="container"
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={37}
                          value={averageRat}
                          color2={"#ffd700"}
                          style={{ margin: "0px auto" }}
                          edit={false}
                        />
                      </div>
                    </h2>
                  </div>

                  <h1
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      margin: "10px 0px",
                      color: "black",
                    }}
                  >
                    View All Ratings
                  </h1>

                  <h1
                    style={{
                      fontSize: "20px",
                      textAlign: "center",
                      margin: "10px 0px",
                      color: "black",
                    }}
                  >
                    {ratings.length === 0 &&
                      "No Ratings Yet . Be The First To Rate This Product"}
                  </h1>

                  {ratings ? (
                    ratings.map((value) => {
                      return (
                        <>
                          <div
                            className="container"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: "30px",
                            }}
                          >
                            <div className="all">
                              <img
                                src={value.image}
                                alt=""
                                srcset=""
                                style={{
                                  width: "50px",
                                  height: "50px",
                                  borderRadius: "50%",
                                }}
                              />
                              <h1 style={{ marginTop: "10px", color: "black" }}>
                                {value.email}
                              </h1>
                            </div>
                            <ReactStars
                              count={5}
                              size={37}
                              value={value.rating}
                              color2={"#ffd700"}
                              edit={false}
                            />
                          </div>
                        </>
                      );
                    })
                  ) : (
                    <h1>No Ratings Yet</h1>
                  )}
                </>
              )}
            </div>
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
              style={{ height: "460px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;

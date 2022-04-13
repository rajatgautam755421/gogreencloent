import React, { useState } from "react";
import "./ReviewUser.css";
import ReactStars from "react-stars";
import axios from "axios";

const ReviewUser = ({ setReview, user_email }) => {
  const [rating, setRating] = useState(0);
  const ratingChanged = async (newRating) => {
    setRating(newRating);
    const review = newRating;
    const { data } = await axios.post(
      "http://localhost:3000/api/v1/reviewuser",
      { user_email, review }
    );
    try {
      // console.log(data);
      setReview(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="container reviewUsers"
        style={{ border: "1px solid black" }}
      >
        <div className="container">
          <h1
            style={{
              textAlign: "center",
              margin: "10px 0px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Would you like you review the seller?
          </h1>
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={37}
            //   value={averageRat}
            color2={"#FDCC0D"}
            style={{ margin: "0px auto" }}
          />
        </div>
        <h1
          style={{
            textAlign: "center",
            margin: "10px 0px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          {rating}
        </h1>
        <h1
          onClick={() => setReview(false)}
          style={{
            cursor: "pointer",
            textAlign: "center",
            fontWeight: "bold",
            color: "red",
          }}
        >
          Close
        </h1>
      </div>
    </>
  );
};

export default ReviewUser;

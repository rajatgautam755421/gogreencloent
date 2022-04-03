import React from "react";
import "./Top.css";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";

const TopBuyerCard = ({
  product_image,
  id,
  sales_id,
  product_desc,
  product_price,
  product_amount,
  location,
  posted_date,
}) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <>
      <article className="card">
        <header className="card__thumb">
          <a href="#top">
            <img
              alt=""
              src={product_image}
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
            />
          </a>
        </header>
        <date className="card__rank">
          <span className="card__rank__position">#1</span>
        </date>

        <div className="card__body">
          <div className="card__subtitle">
            <Link to={`/user-profile/${id}`}>
              <span style={{ marginLeft: "35px" }}>View Seller</span>
            </Link>
          </div>

          <p className="card__description">
            <span style={{ fontWeight: "600", margin: "10px 0px" }}>Price</span>
            :Rs.{product_price} <br />
            <span style={{ fontWeight: "600", margin: "10px 0px" }}>
              Quantity
            </span>
            :{product_amount} Kg <br />
            <span style={{ fontWeight: "600", margin: "10px 0px" }}>
              Address
            </span>
            :{location} <br />
            <span style={{ fontWeight: "600", margin: "10px 0px" }}>
              Posted AT
            </span>
            :{posted_date} <br />
          </p>
        </div>

        <footer className="card__footer">
          <span className="icon ion-clock"></span>
          <a style={{ paddingRight: "5px" }} href="#top">
            {" "}
            39 Likes
          </a>
          <span className="icon ion-clock"></span>
          <a style={{ padding: "5px" }} href="#top">
            {" "}
            42 comments
          </a>
          <span className="icon ion-clock"></span>
          <a style={{ padding: "5px" }} href="#top">
            {" "}
            Share <ShareIcon />
          </a>
        </footer>
      </article>
      {userInfo ? (
        userInfo.role === "Buyer" ? (
          <Link to={`/cart/${sales_id}`}>
            <button
              className="inline-flex items-center bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 nav__button"
              style={{
                color: "#22c514",
                fontSize: "20px",
                width: "170px",
                height: "40px",
                margin: "20px 0px",
              }}
            >
              <h1>Add To Cart</h1>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        ) : null
      ) : null}
    </>
  );
};

export default TopBuyerCard;

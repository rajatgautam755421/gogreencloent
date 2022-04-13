import React from "react";
import ReactStars from "react-stars";

const UserInfo = ({ totalAmountSold, level, averageRating }) => {
  console.log(averageRating);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/3 w-1/2 sm:border-r border-gray-400 sm:border-t-0 border-t">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {totalAmountSold} Kg
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "#22c514", cursor: "pointer" }}
              >
                Amount Sold
              </p>
            </div>
            <div className="p-4 sm:w-1/3 w-1/2 sm:border-r border-gray-400 sm:border-t-0 border-t">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                {level}
              </h2>
              <p
                className="leading-relaxed"
                style={{ color: "#22c514", cursor: "pointer" }}
              >
                Level
              </p>
            </div>

            <div
              className="p-4 sm:w-1/3 w-full sm:border-r border-gray-400 sm:border-t-0 border-t"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ReactStars
                count={5}
                size={37}
                color2={"#ffd700"}
                value={averageRating}
                edit={false}
              />

              <p
                className="leading-relaxed"
                style={{ color: "#22c514", cursor: "pointer" }}
              >
                Ratings
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserInfo;

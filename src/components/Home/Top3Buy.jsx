import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Top.css";
import TopBuyerCard from "./TopBuyerCard";
import Typewriter from "typewriter-effect";

const Top3Buy = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/top-sellers"
        );
        setData1(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="PMS__title__main" style={{ color: "#22C514" }}>
        <Typewriter
          options={{
            strings: ["Top Sells(Quantity Of Products)"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <div className="containerrr">
        <div className="row">
          {data1
            ? data1.slice(0, 6).map((value) => {
                return (
                  <>
                    <div className="col-md-4 col-12">
                      <TopBuyerCard
                        sales_id={value.sales_id}
                        id={value.user_id}
                        posted_date={value.posted_date}
                        product_amount={value.product_amount}
                        product_desc={value.product_desc}
                        product_image={value.product_image}
                        product_price={value.product_price}
                        location={value.location}
                      />
                    </div>
                  </>
                );
              })
            : null}
        </div>
      </div>

      {/* <h1 className="PMS__title__main" style={{ color: "#22C514" }}>
        <Typewriter
          options={{
            strings: ["Top Sells(Price Of Products)"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <div className="containerrr">
        <div className="row">
          {data2
            ? data2.map((value) => {
                return (
                  <>
                    <div className="col-md-4 col-12">
                      <TopBuyerCard
                        id={value.user_id}
                        posted_date={value.posted_date}
                        product_amount={value.product_amount}
                        product_desc={value.product_desc}
                        product_image={value.product_image}
                        product_price={value.product_price}
                        location={value.location}
                      />
                    </div>
                  </>
                );
              })
            : null}
        </div>
      </div> */}
    </>
  );
};

export default Top3Buy;

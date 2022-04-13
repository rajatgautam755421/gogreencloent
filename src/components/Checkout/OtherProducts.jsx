import axios from "axios";
import React, { useEffect, useState } from "react";
import TopBuyerCard from "../Home/TopBuyerCard";

const OtherProducts = ({ user_id, id }) => {
  const [items, setItems] = useState([]);
  console.log(user_id);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:3000/api/v1/findsales-user/${user_id}`
      );
      try {
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [user_id]);

  return (
    <>
      <h1 style={{ marginTop: "50px", fontSize: "30px", textAlign: "center" }}>
        Recommended Products
      </h1>
      <div className="container" style={{ marginTop: "80px" }}>
        <div className="row">
          {items
            ? items.map((value) => {
                return (
                  <>
                    <div
                      className="col-md-4 col-10"
                      style={{ margin: "0px auto" }}
                    >
                      <TopBuyerCard
                        sales_id={value.sales_id}
                        id={value.user_id}
                        posted_date={value.posted_date}
                        product_amount={value.product_amount}
                        product_desc={value.product_desc}
                        product_image={value.product_image}
                        product_price={value.product_price}
                        location={value.location}
                        paramsId={id}
                      />
                    </div>
                  </>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default OtherProducts;

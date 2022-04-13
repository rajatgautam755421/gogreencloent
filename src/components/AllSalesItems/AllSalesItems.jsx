import axios from "axios";
import React, { useEffect, useState } from "react";
import AllSalesItemCard from "./AllSalesItemCard";
import "./AllSalesItems.css";
import { toast } from "react-hot-toast";

import SortIcon from "@mui/icons-material/Sort";
import Spinner from "../Spinner";
const AllSalesItems = () => {
  const [data1, setData1] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [showDrop, setShowDrop] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetch, setFetch] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/v1/top-sellers"
        );
        setData1(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [fetch]);

  const filteredValues = data1
    ? data1.filter((Events) => {
        return Events.location.toLowerCase().includes(search.toLowerCase());
      })
    : null;

  const keyPress = () => {
    if (filteredValues.length === 0) {
      setError(true);
      console.log("No such events");
    } else {
      setError(false);
      console.log("Yes Events");
    }
  };

  const handleLowestAmount = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/top-sellersamtlowest"
      );
      setData1(data);
      setShowDrop(false);
      toast.success("Sorted By Lowest Amount");
      console.log(data1);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleHighestPrice = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/top-highestprice"
      );
      setData1(data);
      setShowDrop(false);
      toast.success("Sorted By Highest Price");
      setLoading(false);
      console.log(data1);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleLowestPrice = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/top-lowestPrice"
      );
      setData1(data);
      setShowDrop(false);
      toast.success("Sorted By Lowest Price");
      setLoading(false);
      console.log(data1);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container mt-4 main__col__search">
        <div className="row">
          <div className="col-10 " style={{ margin: "0px auto" }}>
            <input
              type="search"
              id="form1"
              className="form-control search__control"
              placeholder="Search For Location"
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={keyPress}
            />
          </div>
          <div
            className="col-2 "
            style={{ cursor: "pointer", margin: "0px auto" }}
            onClick={() => setShowDrop(!showDrop)}
          >
            <div>
              <div
                className="container"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "20px" }}>Filter</h1>
                <SortIcon className="sort__icon" />
              </div>
              {showDrop ? (
                <div
                  x-show="open"
                  className="absolute right-0 z-30 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48"
                >
                  <div className="px-2 py-2 bg-white rounded-md shadow dropdown__main">
                    <h4
                      onClick={handleLowestPrice}
                      className="
  block
  px-4
  py-2
  mt-2
  text-sm text-gray-600
  md:mt-0
  hover:text-blue-600
  focus:outline-none focus:shadow-outline
"
                    >
                      Lowest Price
                    </h4>
                    <h4
                      onClick={handleHighestPrice}
                      className="
  block
  px-4
  py-2
  mt-2
  text-sm text-gray-600
  md:mt-0
  hover:text-blue-600
  focus:outline-none focus:shadow-outline
"
                    >
                      Highest Price
                    </h4>
                    <h4
                      onClick={handleLowestAmount}
                      className="
  block
  px-4
  py-2
  mt-2
  text-sm text-gray-600
  md:mt-0
  hover:text-blue-600
  focus:outline-none focus:shadow-outline
"
                    >
                      Lowest Amount
                    </h4>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {loading && <Spinner />}
      {error ? (
        <h1
          style={{ fontSize: "25px", textAlign: "center", margin: "20px 0px" }}
        >
          No Such Location
        </h1>
      ) : null}
      <div className="containerrr">
        <div className="row">
          {filteredValues
            ? filteredValues.map((value) => {
                return (
                  <>
                    <div className="col-md-4 col-12">
                      <AllSalesItemCard
                        sales_id={value.sales_id}
                        id={value.user_id}
                        posted_date={value.posted_date}
                        product_amount={value.product_amount}
                        product_desc={value.product_desc}
                        product_image={value.product_image}
                        product_price={value.product_price}
                        location={value.location}
                        value={value}
                        setFetch={setFetch}
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

export default AllSalesItems;

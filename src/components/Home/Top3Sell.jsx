import React from "react";
import {Link} from 'react-router-dom';
import "../Home/topsell.css";
import TopSellerCard from './TopSellerCard'

const Top3Sell = () => {
  return (
    <div className="top-seller">
      <div className="wrap-seller">
        <div className="container">
          <h1 className="text-center py-3" style={{color:'#22c154'}}>Top 3 Sales</h1>
          <div className="row py-3 ">
            <div className="col-lg-4">
              <TopSellerCard />
            </div>
            <div className="col-lg-4 ">
              <TopSellerCard />
            </div>
            <div className="col-lg-4 ">
              <TopSellerCard />
            </div>
          </div>
          <div className="load-more">
            <Link to=''>
            Load More
            <span className="ms-2"><i className="fa fa-chevron-right"></i></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top3Sell;

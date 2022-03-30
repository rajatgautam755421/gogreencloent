import React from "react";

const CheckoutEmements = () => {
  return (
    <div>
      <div className="box">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xl-7">
            <h6 className="itemtitle"> </h6>
            <div className="itemDetail">
              <span style={{ fontWeight: "600" }}>Name:</span>
              ABC
              <br />
              <span style={{ fontWeight: "600" }}>Weight:</span>
              DEF
              <br />
              <span style={{ fontWeight: "600" }}>Price:</span>
              1000
              <br />
              <span style={{ fontWeight: "600" }}>Total:</span>
              1000
              <br />
            </div>
          </div>
          <div className="col-md-6 col-sm-4 col-xl-5">
            <img
              alt=""
              className="Image"
              src="https://www.euractiv.com/wp-content/uploads/sites/2/2021/09/Bali-plastic-polllution-scaled.jpg"
            />
          </div>
        </div>
        <button className="product-removal">Remove from Cart</button>
      </div>
    </div>
  );
};

export default CheckoutEmements;

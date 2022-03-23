import React from "react";
import './topsellercard.css';
const TopBuyerCard = () => {
  return (
    <div class="card text-start mx-auto mb-3">
      <img src="https://i0.wp.com/sgkplanet.com/wp-content/uploads/2021/06/FAQs-about-Environment-Website-SGK-PLANET-Aixa-Chacin.jpg?resize=850%2C580&ssl=1" class="card-img-top" alt="..."/>
      <div class="card-body">
        <div className="d-flex align-items-center">
          <img src="https://i0.wp.com/sgkplanet.com/wp-content/uploads/2021/06/FAQs-about-Environment-Website-SGK-PLANET-Aixa-Chacin.jpg?resize=850%2C580&ssl=1" className="profile-image" alt="" />
          <p className="fw-bold ms-2">Ashish Ghimire</p>
        </div>
        <div className="detail-product py-1">
          <p>Quantity: 20</p>
          <p>Location: 20</p>
          <p>Posted Date: 20</p>
        </div>
        <div className="description">
          <h5>Description</h5>
          <p>Loremrit sint veritaaksjaskjaskjsk,tis natus? Veritatis corrupti earumidunt dolor architecto eveniet?</p>
        </div>
        <div className="like-comment">
          <div className="row">
            <div className="col-lg-4">
              <i className="fa fa-thumbs-up"></i>
              <p>991 Likes</p>
            </div>
            <div className="col-lg-4">
              <i className="fa fa-comment"></i>
              <p>12 Comment</p>
            </div>
            <div className="col-lg-4">
              <i className="fa fa-star"></i>
              <p>User Rating</p>
            </div>
          </div>
        </div>            
      </div>
    </div>
  );
};

export default TopBuyerCard;

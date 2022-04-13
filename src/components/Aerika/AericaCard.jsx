import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/AericaItemsContext";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { toast } from "react-hot-toast";

const AericaCard = ({ value, setFetch }) => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const { items, addToCart, removeFromCart } = useContext(cartContext);
  const itemId = value.itemId;
  const name = value.name;
  const iteminfo = value.iteminfo;

  const price = value.price;
  const quantity = value.quantity;
  const photo = value.photo;
  console.log(itemId);
  const isInCart = items.some((value) => value.itemId === itemId);
  const handleClick = (e) => {
    e.preventDefault();

    if (isInCart === false) {
      addToCart({ itemId, name, iteminfo, price, quantity, photo });
    } else {
      removeFromCart(itemId);
    }
  };
  console.log(items);
  useEffect(() => {
    localStorage.setItem("mycart", JSON.stringify(items));
  }, [items]);

  const handleDelete = async () => {
    const { data } = await axios.delete(
      `http://localhost:3000/api/v1/aerika/${value ? value.itemId : null}`
    );
    setFetch(true);
    toast.success("Item Deleted");
    try {
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="col-md-4 col-sm-10">
        <div
          className="card cart__card"
          style={{
            width: "19rem",
            margin: "20px auto",
          }}
        >
          <img src={value.photo} className="card-img-top" alt="..." />
          <hr height={"20px"} />
          <div
            className="card-body"
            style={{
              backgroundColor: "#F9F9F9",
              borderBottom: "2px solid #22C514",
              borderLeft: "2px solid #22C514",
            }}
          >
            <h5 className="card-title mt-4" style={{ fontSize: "19px" }}>
              {value.name}
            </h5>
            <p className="card-text">{value.iteminfo}</p>
            <h3
              className="card-title"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Rs.{value.price}
            </h3>
            <h5 className="card-title">{value.quantity} Kgs available</h5>
            {userInfo.role !== "Admin" ? (
              <button
                className={
                  isInCart === false
                    ? "btn btn-primary cart__butt add__to__cart"
                    : "btn btn-danger cart__butt__remove"
                }
                onClick={handleClick}
              >
                {isInCart === false ? "Add To Cart" : "Remove From Cart"}
              </button>
            ) : (
              <div
                className="container container__delete__icon"
                style={{ width: "100%" }}
              >
                <DeleteIcon className="delete__areca" onClick={handleDelete} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AericaCard;

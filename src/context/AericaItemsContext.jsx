import React, { createContext, useState } from "react";
export const cartContext = createContext();

const AericaItemsContext = ({ children }) => {
  const mycart = JSON.parse(localStorage.getItem("mycart"));
  const [items, setItems] = useState(mycart);

  function addToCart({ itemId, name, iteminfo, price, quantity, photo }) {
    setItems([...items, { itemId, name, iteminfo, price, quantity, photo }]);
  }

  function removeFromCart(itemId) {
    setItems((prevCart) => {
      return prevCart.filter((value) => value.itemId !== itemId);
    });
  }
  const context = {
    items,
    addToCart,
    removeFromCart,
  };

  return (
    <cartContext.Provider value={context}>{children}</cartContext.Provider>
  );
};

export default AericaItemsContext;

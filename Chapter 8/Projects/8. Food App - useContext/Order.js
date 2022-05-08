import React, { useContext } from "react";
import { shopContext } from "./App";

const Order = (props) => {
  const isTheShopOpen = useContext(shopContext);
  const orderFood = () => {
    alert("Food ordered");
  };
  return (
    <>
      {isTheShopOpen === "Open" && <button onClick={orderFood}>Order</button>}
    </>
  );
};
export default Order;

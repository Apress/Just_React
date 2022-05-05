import React, { Fragment, useState } from "react";
import "./FoodOrder.css";

const FoodOrder = (props) => {
  const selectedFood = props.food;
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(selectedFood.price);
  const [isOrdered, setIsOrdered] = useState(false);

  const handleQuantityChange = (event) => {
    setTotalAmount(selectedFood.price * event.target.value);
    setQuantity(event.target.value);
  };

  const handleClick = () => {
    setIsOrdered(true);
    props.updateQuantity(selectedFood.id, quantity);
  };

  return (
    <Fragment>
      <h4 className="selFoodTitle">{selectedFood.name}</h4>
      <img
        className="selFoodImg"
        src={require(`./images/${selectedFood.image}`)}
        alt={selectedFood.name}
      />
      <ul className="ulFoodDetails">
        <li>
          <p className="selFoodDesc">{selectedFood.desc}</p>
        </li>
        <li>
          <p className="selFoodPrice">{totalAmount}$</p>
        </li>
        <li className="selQuantity">
          <label>Quantity</label>
          <input
            type="number"
            defaultValue={1}
            className="quantity"
            min="1"
            max="10"
            onChange={handleQuantityChange}
          />
        </li>

        <li className="liDetails">
          <label for="name"></label>
          <input
            type="text"
            className="inputFields"
            id="name"
            name="name"
            placeholder="Your Name"
          />
        </li>
        <li>
          <label for="mobile"></label>
          <input
            type="text"
            className="inputFields"
            id="mobile"
            name="mobile"
            placeholder="Your mobile number"
          />
        </li>

        <li>
          <button className="btn btnOrder" onClick={handleClick}>
            Submit Order
          </button>
          <button className="btn btnReturnMenu" onClick={props.returnToMenu}>
            Return to Menu
          </button>
        </li>
        {isOrdered && (
          <li className="liMessage">
            <label>
              Order Submitted! You will receive an SMS to once ready for pickup.
            </label>
          </li>
        )}
      </ul>
    </Fragment>
  );
};

export default FoodOrder;

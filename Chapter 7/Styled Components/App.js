import "./App.css";
import React, { useState } from "react";
import Foods from "./Foods";
import styled from "styled-components";
export const foodItemsContext = React.createContext();
const App = () => {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Chicken Burger",
      quantity: 40,
      desc: "Fried chicken burger - lettuce, tomato, cheese and mayonnise",
      price: "24",
      image: "cb.jpg",
    },
    {
      id: 2,
      name: "Veg Burger",
      quantity: 30,
      desc: "Plant-based burger - - lettuce, tomato, vegan cheese and mayonnise",
      price: "22",
      image: "vb.jpg",
    },
    {
      id: 3,
      name: "Chips",
      quantity: 50,
      desc: "Potato chips fried to perfection",
      price: "7",
      image: "chips.jpg",
    },
    {
      id: 4,
      name: "Ice Cream",
      quantity: 30,
      desc: "Ice cream - Vanilla ice cream double scoop",
      price: "4",
      image: "ic.jpg",
    },
  ]);
  const StyledtoggleButton = styled.button`
    float: left;
    margin: 5px 0px 0px 3px;
    align-items: center;
    padding: 6px 14px;
    border-radius: 8px;
    border: none;
    color: #fff;
    background-color: #367af6;
    cursor: pointer;
  `;

  return (
    <foodItemsContext.Provider value={menuItems}>
      <div className="App">
        <StyledtoggleButton
          onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
        >
          {isChooseFoodPage ? "Availability Check" : "Order Food"}
        </StyledtoggleButton>
        <h3 className="title">Just Food Online Shop</h3>
        {!isChooseFoodPage && (
          <>
            <h4 className="subTitle">Menu Availability</h4>
            <ul className="ulApp">
              {menuItems.map((item) => {
                return (
                  <li key={item.id} className="liApp">
                    {item.name} - {item.quantity}
                  </li>
                );
              })}
            </ul>
          </>
        )}
        {isChooseFoodPage && <Foods foodItems={menuItems}></Foods>}
      </div>
    </foodItemsContext.Provider>
  );
};

export default App;

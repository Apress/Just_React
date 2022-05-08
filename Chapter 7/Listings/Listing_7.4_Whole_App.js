import appStyles from "./App.module.css";
import React, { Fragment, useState } from "react";
import Foods from "./Foods";
import { useMediaQuery } from "react-responsive";
export const foodItemsContext = React.createContext();
const App = () => {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const isLapOrDeskTop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Chicken Burger",
      quantity: 40,
      desc: "Fried chicken burger - lettuce, tomato, cheese and mayonnaise",
      price: "24",
      image: "cb.jpg",
    },
    {
      id: 2,
      name: "Veg Burger",
      quantity: 30,
      desc: "Plant-based burger — lettuce, tomato, vegan cheese and mayonnaise",
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

  return (
    <foodItemsContext.Provider value={menuItems}>
      {isMobile && (
        <div className={appStyles.App}>
          <button
            className={appStyles.toggleButton}
            onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
          >
            {isChooseFoodPage ? "Availability Check" : "Order Food"}
          </button>
          <h3 className={appStyles.titleMobile}>Just Food Online Shop</h3>
          {!isChooseFoodPage && (
            <>
              <h4 className={appStyles.subTitleMobile}>Menu Availability</h4>
              <ul className={appStyles.ulAppMobile}>
                {menuItems.map((item) => {
                  return (
                    <li key={item.id} className={appStyles.liAppMobile}>
                      {item.name} - {item.quantity}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {isChooseFoodPage && <Foods foodItems={menuItems}></Foods>}
        </div>
      )}
      {isLapOrDeskTop && (
        <div className={appStyles.App}>
          <button
            className={appStyles.toggleButton}
            onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
          >
            {isChooseFoodPage ? "Availability Check" : "Order Food"}
          </button>

          <h3 className={appStyles.title}>Just Food Online Shop</h3>
          {!isChooseFoodPage && (
            <>
              <h4 className={appStyles.subTitle}>Menu Availability</h4>
              <ul className={appStyles.ulApp}>
                {menuItems.map((item) => {
                  return (
                    <li key={item.id} className={appStyles.liApp}>
                      {item.name} - {item.quantity}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
          {isChooseFoodPage && <Foods foodItems={menuItems}></Foods>}
        </div>
      )}
    </foodItemsContext.Provider>
  );
};

export default App;

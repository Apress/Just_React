import appStyles from "./App.module.css";
import React, { useEffect, useState } from "react";
import Foods from "./Foods";
import { auth, logOut } from "./auth/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const foodItemsContext = React.createContext();
const App = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState("");

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
  useEffect(() => {
    if (user) {
      const user = auth.currentUser;
      setUserEmail(user.email);
      if (user.email === "admin1@justfood.com") {
        setIsAdmin(true);
      }
    } else {
      navigate("/");
    }
  }, [user, loading]);

  return (
    <foodItemsContext.Provider value={menuItems}>
      <div className={appStyles.App}>
        <button className={appStyles.signOutButton} onClick={logOut}>
          Sign Out
        </button>
        {isAdmin && (
          <button
            className={appStyles.toggleButton}
            onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
          >
            {isChooseFoodPage ? "Availability Check" : "Order Food"}
          </button>
        )}
        <span className={appStyles.signedInMessage}>
          Signed in as {userEmail}
        </span>

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
    </foodItemsContext.Provider>
  );
};

export default App;

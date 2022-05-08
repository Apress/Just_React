import React, { Fragment, useState } from "react";
import foodsStyles from  "./Foods.module.css";
import FoodOrder from "./FoodOrder";
const Foods = (props) => {
  const [selectedFood, setSelectedFood] = useState("");

  const handleSelect = (event) => {
    setSelectedFood(
      props.foodItems.find((item) => {
        return item.id === parseInt(event.currentTarget.dataset.id);
      })
    );
  };

  return (
    <Fragment>
      {!selectedFood && (
        <Fragment>
          <h4 className={foodsStyles.foodTitle}>Choose from our Menu</h4>
          <ul className={foodsStyles.ulFoods}>
            {props.foodItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className={foodsStyles.liFoods}
                  data-id={item.id}
                  onClick={handleSelect}
                >
                  <img
                    className={foodsStyles.foodImg}
                    src={require(`./images/${item.image}`)}
                    alt={item.name}
                  />
                  <div className={foodsStyles.foodItem}>
                    <p className={foodsStyles.foodDesc}>{item.desc}</p>
                    <p className={foodsStyles.foodPrice}>{item.price}$</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
      {selectedFood && (
        <FoodOrder
          food={selectedFood}
          returnToMenu={() => setSelectedFood("")}
        />
      )}
    </Fragment>
  );
};

export default Foods;

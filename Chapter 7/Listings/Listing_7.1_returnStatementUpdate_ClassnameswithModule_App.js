return (
  <foodItemsContext.Provider value={menuItems}>
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
  </foodItemsContext.Provider>
);

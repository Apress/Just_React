return (
  <div className="App">
    <button
      className="toggleButton"
      onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
    >
      {isChooseFoodPage ? "Availability Check" : "Order Food"}
    </button>
    <h3 className="title">Just Food Online Shop</h3>
    {!isChooseFoodPage && (
      <Fragment>
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
      </Fragment>
    )}
    {isChooseFoodPage && <Foods foodItems={menuItems}></Foods>}
  </div>
);

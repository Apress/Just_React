const Order = (props) => {
  const orderFood = () => {
    alert("Food ordered");
  };
  return (
    <>{props.isOpen === "Open" && <button onClick={orderFood}>Order</button>}</>
  );
};
export default Order;

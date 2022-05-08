import Order from "./Order";
const Menu = (props) => {
  console.log(`Due to shop ${props.isOpen}, Menu component rendered`);
  return (
    <>
      <ul>
        <li>Pizza</li>
        <li>Nuggets</li>
        <li>Chips</li>
        <li>Protein Shake</li>
      </ul>
      <Order open={props.isOpen} />
    </>
  );
};
export default Menu;

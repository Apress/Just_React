import React, { useState } from "react";
import Menu from "./Menu";
const App = (props) => {
  const [shopOpen, setShopOpen] = useState("Open");
  const [btnText, setBtnText] = useState("Close");
  const openOrCloseShop = () => {
    if (shopOpen === "Open") {
      setShopOpen("Closed");
      setBtnText("Open");
    } else {
      setShopOpen("Open");
      setBtnText("Closed");
    }
  };
  return (
    <>
      <h1>Food Shop is now {shopOpen}</h1>
      <button onClick={openOrCloseShop}>{btnText}</button>
      <Menu isOpen={shopOpen} />
    </>
  );
};
export default App;

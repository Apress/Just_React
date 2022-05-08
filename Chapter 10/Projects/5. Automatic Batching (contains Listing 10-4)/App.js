import { useEffect, useState } from "react";
const App = () => {
  const [number, setNumber] = useState(0);
  const [bg, setBg] = useState("lightgreen");

  useEffect(() => {
    if (number) console.log("The Component Rendered!");
  });

  const handleOnClick = () => {
    setNumber(number + 1);
    setBg((color) => !color);
  };

 setTimeout(() => {
    setNumber(number + 1);
    setBg((color) => !color);
  }, 5000);


  return (
    <>
      <button
        style={{ backgroundColor: bg ? "orange" : "lightgreen" }}
        onClick={() => {
          handleOnClick();
        }}
      >
        Change Color
      </button>
      <br />
      <span>Changed color {number} times</span>
    </>
  );
};
export default App;

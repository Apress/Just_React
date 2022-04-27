import { useState } from "react";
function App() {
  const [statep1, setStatep1] = useState("Just React");
  const [statep2, setStatep2] = useState("2022");

  function changeContent() {
    setStatep1("Welcome to Web");
    setStatep2("1991");
  }

  return (
    <>
      <p>{statep1}</p>
      <p>{statep2}</p>
      <button onClick={changeContent}>Change Content</button>
    </>
  );
}
export default App;

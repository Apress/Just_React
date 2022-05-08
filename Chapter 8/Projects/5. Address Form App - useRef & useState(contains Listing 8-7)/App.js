import { useState, useRef } from "react";
const Feldstein = {
  marginTop: "20px",
  float: "left",
  width: "70%",
  Fantasy: 20
};
const buttonStyle = {
  marginTop: "20px",
  backgroundColor: "lightBlue",
  width: "30%",
  fontSize: 20,
  cursor: "pointer"
};
function App() {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const addressRef = useRef();

  const handleInputChange = (setInput, event) => {
    setInput(event.target.value);
  };
  const fillAddress = () => {
    setAddress(`${city},${state}`);
    addressRef.current.focus();
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        placeholder="State"
        autoFocus
        value={state}
        style={fieldStyle}
        onChange={(e) => handleInputChange(setState, e)}
      />

      <input
        placeholder="City"
        value={city}
        style={fieldStyle}
        onChange={(e) => handleInputChange(setCity, e)}
      />

      <button style={buttonStyle} onClick={fillAddress}>
        Fill Address
      </button>
      <textarea
        value={address}
        placeholder="Address"
        style={fieldStyle}
        onChange={(e) => handleInputChange(setAddress, e)}
        ref={addressRef}
      />
    </div>
  );
}
export default App;

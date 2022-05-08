import React, { useState } from "react";
import Combinations from "./Combinations";
import Shelf from "./Shelf";
const fieldStyle = {
  marginTop: "20px",
  float: "left",
  width: "75%",
  fontSize: 20
};

function App() {
  const [bookCount, setBookCount] = useState("");
  const [shelfName, setShelfName] = useState("");
  const [shelfSpace, setShelfSpace] = useState("");

  const handleClick = (theSpace) => {   
    setShelfSpace(theSpace);
  };


  const handleShelfChange = (e) => {
    setShelfName(e.target.value);
  };
  const handleBookCountChange = (e) => {
    setBookCount(e.target.value);
  };

  return (
    <div width="100%">
      <input
        placeholder="Shelf name"
        style={fieldStyle}
        value={shelfName}
        onChange={handleShelfChange}
      />

      <label style={fieldStyle}>
        <Shelf shelfName={shelfName} />
      </label>

      <input
        placeholder="How many books?"
        style={fieldStyle}
        value={bookCount}
        onChange={handleBookCountChange}
      />
      <label style={fieldStyle}>
        {bookCount > 0 &&  <Combinations countBooks={bookCount} checkSpace={handleClick} />}
      </label>
     {shelfSpace && (
        <p style={fieldStyle}>The space at the shelf is - {shelfSpace}</p>
     )}

    </div>
  );
}

export default App;

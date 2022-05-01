import "./App.css";
import EnrolmentForm from "./EnrolmentForm";
import { useState } from "react";

function App() {
  const [program, setProgram] = useState("UG");
  const handleChange = (event) => {
    setProgram(event.target.value);
  };

  return (
    <div className="App">
      <div className="programs">
        <label>Choose Program:</label>
        <select className="appDropDowns"
          onChange={handleChange}
          value={program} >
          <option value="UG">Undergraduate</option>
          <option value="PG">Postgraduate</option>
        </select>
      </div>
      <EnrolmentForm chosenProgram={program} />
    </div>
  );
}
export default App;

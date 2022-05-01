import "./App.css";
import EnrolmentForm from "./EnrolmentForm";
import { useState } from "react";

function App() {
  const [program, setProgram] = useState("UG");
  const [seats, setSeats] = useState(100);
  const handleChange = (event) => {
    setProgram(event.target.value);
  };
  const setUpdatedSeats = (updatedSeats) => {
    setSeats(updatedSeats);
  };
  return (
    <div className="App">
      <div className="programs">
        <label>Remaining Seats - {seats}</label>
        <br />
        <br />
        <label>Choose Program:</label>
        <select
          className="appDropDowns"
          onChange={handleChange}
          value={program}
        >
          <option value="UG">Undergraduate</option>
          <option value="PG">Postgraduate</option>
        </select>
      </div>
      <EnrolmentForm
        chosenProgram={program}
        setUpdatedSeats={setUpdatedSeats}
        currentSeats={seats}
      />
    </div>
  );
}
export default App;

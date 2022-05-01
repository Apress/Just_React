import { useState } from "react";
import "./App.css";

function EnrolmentForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const handleSubmit = (event) => {
    setWelcomeMessage(`Welcome ${firstName} ${lastName}`);
    event.preventDefault();
  };

  return (
    <div>
      <form className="enrolForm" onSubmit={handleSubmit}>
        <h1>{props.selectedProgram} Student Details</h1>
        <label>First name:</label>
        <input
          type="text"
          name="fname"
          onBlur={(event) => setFirstName(event.target.value)}
        />
        <br />
        <label>Last name:</label>
        <input
          type="text"
          name="lname"
          onBlur={(event) => setLastName(event.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
        <br />
        <label id="studentMsg" className="message">
          {welcomeMessage}
        </label>
      </form>
    </div>
  );
}

export default EnrolmentForm;

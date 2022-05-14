import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { format, parseISO } from "date-fns";
const fieldStyle = {
  marginTop: "20px",
  float: "left",
  width: "70%",
  fontSize: 20
};
const buttonStyle = {
  marginTop: "20px",
  backgroundColor: "lightBlue",
  width: "30%",
  fontSize: 20,
  cursor: "pointer",
  marginRight: "20px"
};

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [display, setDisplay] = useState("");

  const submit = () => {
    axios
      .post(`https://reqres.in/api/users`, { name: name, job: role })
      .then((res) => {
        setDisplay(
          `${name} is appointed as ${role} on ${format(
            parseISO(res.data.createdAt),
            "dd-MMM-yyyy"
          )} with ID ${res.data.id}`
        );
        console.log(res.data);
      });
  };
  const getManagerName = () => {
    axios.get(`https://reqres.in/api/users/2`).then((res) => {
      console.log(res.data);
      setDisplay(
        `${res.data.data.first_name} is the manager. The contact  email is  ${res.data.data.email}`
      );
    });
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        placeholder="Name"
        value={name}
        style={fieldStyle}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Role"
        value={role}
        style={fieldStyle}
        onChange={(e) => setRole(e.target.value)}
      />
      <button style={buttonStyle} onClick={submit}>
        Submit
      </button>

      <button style={buttonStyle} onClick={getManagerName}>
        Get Manager name
      </button>
      <br />
      {display && <label style={fieldStyle}> {display}</label>}
    </div>
  );
}
export default App;

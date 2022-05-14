import { useState } from "react";
import { connect } from "react-redux";
function App(props) {
  const [task, setTask] = useState("");

  const handleClick = () => {
    props.dispatch({
      type: "addNewTask",
      payload: { name: task }
    });
    setTask("");
  };

  return (
    <>
      <h2> Add tasks </h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <br />
      <br />
      <button onClick={(e) => handleClick(e)}>Add</button>
      <hr />
      <h2>To Do List </h2>

      <ul>
        {props.tasks.map((task) => (
          <li key={task.name}>{task.name}</li>
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  return { tasks: state };
};

export default connect(mapStateToProps)(App);

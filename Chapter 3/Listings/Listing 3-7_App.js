import "./App.css";
function App() {
  const handleClick = () => {
    alert("Start Reacting!");
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Just React</button>
    </div>
  );
}
export default App;

import Time from "./Time";
const App = (props) => {
  let open = true;
  const closeTime = () => {
    console.log("closeTime called");
    open = false;
  };
  return (
    <div>
      {open && (
        <>
          <Time />
          <button onClick={closeTime}>Close Time</button>
        </>
      )}
      {!open && <h1>Time display closed</h1>}
    </div>
  );
};
export default App;

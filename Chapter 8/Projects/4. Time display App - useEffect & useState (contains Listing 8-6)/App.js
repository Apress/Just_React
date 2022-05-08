import Time from "./Time";
import { useState } from "react";
function App(props) {
  const [open, setOpen] = useState(true);
  const closeTime = () => {
    setOpen(false);
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
}
export default App;

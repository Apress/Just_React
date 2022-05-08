import { useState, useEffect } from "react";
function Time() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    console.log(`The Time component is mounted at ${currentTime}`);
    const interval = setInterval(() => {
      console.log("Time is changing");
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log(
        `The Time component is going to be unmounted at ${new Date().toLocaleString()}`
      );
    };
  }, []);

  return <h1>{currentTime}</h1>;
}
export default Time;

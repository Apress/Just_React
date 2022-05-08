import { useState, useEffect } from "react";
function Time(props) {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    console.log(" I am useEffect and I got invoked");
    setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
  });

  return <h1>{currentTime}</h1>;
}
export default Time;

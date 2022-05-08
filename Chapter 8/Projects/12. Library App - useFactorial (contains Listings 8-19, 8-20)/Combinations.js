import React from "react";
import useFactorial from "./Hooks/useFactorial";
const Combinations = React.memo(function ({ countBooks, checkSpace }) {
  console.log("Combinations component is re-rendered");
  let space = "";
  switch (countBooks) {
    case 1 - 5:  space = "Free Space available"; break;
    case 5 - 10: space = "Perfect"; break;
    case 10 - 15: space = "Need extra storage"; break;
    default:   space = "Not Sufficient";
  }
  const arrangements = useFactorial(countBooks);
  return (
    <>
      <p>The total number of ways you can arrange books is : {arrangements}</p>
      <button onClick={() => checkSpace(space)}>Check Space</button>
    </>
  );
});
export default Combinations;

import React from "react";
const Combinations = React.memo(function ({ countBooks, shelfName }) {
  console.log("Combinations component is re-rendered");
  let arrangements = 1;
  for (let i = 2; i <= countBooks; i++) {
    arrangements *= i;
  }
  return `The total number of ways you can arrange the books on the shelf ${shelfName} is : ${arrangements}`;
});
export default Combinations;

import React, { useMemo } from "react";
const Combinations = React.memo(function ({ countBooks, checkSpace }) {
  console.log("Combinations component is re-rendered");
  let space = "";
  switch (countBooks) {
    case 1: case 2: case 3: case 4: case 5:  space = "Free Space available"; break;
    case 6: case 7: case 8: case 9: case 10: space = "Perfect"; break;
    case 11: case 12: case 13: case 14: case 15: space = "Need extra storage"; break;
    default:   space = "Not Sufficient";
  }
  let arrangements = useMemo(() => {
    console.log("Total number of ways being calculated");
    let arrs = 1;

    for (let i = 2; i <= countBooks; i++) {
      arrs *= i;
    }

    return arrs;
  }, [countBooks]);
  return (
    <>
      <p>The total number of ways you can arrange books is : {arrangements}</p>
      <button onClick={() => checkSpace(space)}>Check Space</button>
    </>
  );
});

export default Combinations;

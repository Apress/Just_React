const Combinations = ({ countBooks }) => {  
  console.log("Combinations component is re-rendered");
  let arrangements = 1;
  for (let i = 2; i <= countBooks; i++) {
    arrangements *= i;
  }
  return ` The total number of ways you can arrange the books is : ${arrangements}`;
}
export default Combinations; 

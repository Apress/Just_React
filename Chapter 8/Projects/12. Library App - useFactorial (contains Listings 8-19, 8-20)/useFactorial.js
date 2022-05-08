import { useMemo } from "react";
const useFactorial = (number) => {
  let factorial = useMemo(() => {
    let fact = 1;
    for (let i = 2; i <= number; i++) {
      fact *= i;
    }
    return fact;
  }, [number]);
  return factorial;
};
export default useFactorial;

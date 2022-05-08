import "./styles.css";

import { useState, useTransition } from "react";
export default function App() {
  const [isPending, startTransition] = useTransition();
  const [text, setText] = useState("");
  const [result, setResult] = useState();

  const handleChange = (event) => {
    const searchedFor = event.target.value;
    setText(searchedFor);

    const results = Array.from(Array(10000), (_, index) => {
      const randomTextPara1 = [...Array(100)]
        .map((i) => (~~(Math.random() * 36)).toString(36))
        .join("");
      const randomTextPara2 = [...Array(100)]
        .map((i) => (~~(Math.random() * 36)).toString(36))
        .join("");
      return (
        <li key={index}>
          <h3>Result {index + 1}:</h3>

          <p>
            <strong>{searchedFor}</strong> - {randomTextPara1}
          </p>
          <p>{randomTextPara2} </p>
        </li>
      );
    });

    startTransition(() => {
      setResult(<ul>{results}</ul>);
    });
  };

  return (
    <>
      <input type="text" value={text} onChange={handleChange} />
      {isPending && (
        <p>
          <strong>The results are loading...</strong>
        </p>
      )}
      {!isPending && result}
    </>
  );
}

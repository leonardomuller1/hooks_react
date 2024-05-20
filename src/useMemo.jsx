import { useMemo, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const doubleNumber = useMemo(() => {
    return slowFuncion(number);
  }, [number]);

  return (
    <>
      <p>{number}</p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <p>text: {text}</p>
    </>
  );
};

const slowFuncion = (num) => {
  console.log("SLOW");
  for (let i = 0; i <= 10000; i++) {}
  return num * 2;
};

export default App;

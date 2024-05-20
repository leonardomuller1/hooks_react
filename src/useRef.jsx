import { useEffect, useRef, useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const renders = useRef(0);

  //conta quantas vezes foi renderizado sem rendenrizar
  useEffect(() => {
    renders.current = renders.current + 1;
  });

  // deixa o input como focus
  const inputRef = useRef(null);

  const FocusInput = () => {
    inputRef.current.focus();
  };

  // retorna o valor anterior
  const previousName = useRef();

  useEffect(() => {
    previousName.current = name;
  });
  return (
    <div>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>Hello! my name is {name}</p>
      <p>And my name was {previousName.current}</p>
      <button onClick={FocusInput}>Focus Input</button>
      <p>Renders: {renders.current}</p>
    </div>
  );
};

export default App;

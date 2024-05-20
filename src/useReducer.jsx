import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add-task":
      return {
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
        taskCount: state.taskCount + 1,
      };
    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((item, index) =>
          index == action.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: [], taskCount: 0 });
  const [inputValue, setInputVale] = useState("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputVale(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-task", payload: inputValue });
          setInputVale("");
        }}
      >
        Adicionar
      </button>

      {state.tasks.map((task, index) => (
        <p
          onClick={() => dispatch({ type: "toggle-task", payload: index })}
          style={task.isCompleted ? { textDecoration: "line-through" } : null}
        >
          {task.name}
        </p>
      ))}
    </div>
  );
};
export default App;

/*
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {
        counter: state.counter + 1,
      };
    case "Decrement":
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <div>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: "Increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>Decrement</button>
    </div>
  );
};
export default App;
*/

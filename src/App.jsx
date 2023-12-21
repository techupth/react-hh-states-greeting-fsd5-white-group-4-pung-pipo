import "./App.css";
import { useState } from "react";

function App() {
  const [stageDefault, setCounter] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{stageDefault}</div>
      <div className="buttons">
        <button
          onClick={() => {
            setCounter("สวัสดี!");
          }}
        >
          สวัสดี!
        </button>
        <button
          onClick={() => {
            setCounter("Hi!");
          }}
        >
          Hi!
        </button>
        <button
          onClick={() => {
            setCounter("你好!");
          }}
        >
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;

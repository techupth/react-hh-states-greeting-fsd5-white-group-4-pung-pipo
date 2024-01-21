import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const changeGreetingMessage = (message) => {
    setGreetingMessage(message);
  };
  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={() => changeGreetingMessage("สวัสดี!")}>
          สวัสดี!
        </button>
        <button onClick={() => changeGreetingMessage("Hi!")}>Hi!</button>
        <button onClick={() => changeGreetingMessage("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;

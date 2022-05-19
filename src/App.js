import "./App.css";
import { useState } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  const [username, setUsername] = useState("");
  const [count, setCount] = useState(0);

  const updateUseInputHandler = (inputValue) => {
    setUsername(inputValue.username);
    setCount(inputValue.count);
  };

  const output = [];

  for (let x = 0; x < count; x++) {
    output.push(<UserOutput key={x} username={username} />);
  }

  return (
    <div className="App" style={{ paddingTop: "100px" }}>
      <UserInput onUserInputUpdate={updateUseInputHandler} />
      {output}
    </div>
  );
}

export default App;

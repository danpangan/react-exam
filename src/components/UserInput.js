import React from "react";
import { useState, useEffect } from "react";
import Card from "./UI/Card";
import Input from "./UI/Input";

const UserInput = (props) => {
  const [username, setUsername] = useState("starting username");
  const [count, setCount] = useState(1);

  useEffect(() => {
    const userInput = {
      username,
      count,
    };

    props.onUserInputUpdate(userInput);
  }, [username, count]);

  const usernameUpdateHandler = (usernameVal) => {
    setUsername(usernameVal);
  };

  const countUpdateHandler = (countVal) => {
    setCount(countVal);
  };

  return (
    <Card>
      <Input
        label={"Username"}
        type={"text"}
        value={username}
        onInputUpdate={usernameUpdateHandler}
      />
      <Input
        label={"No. of times"}
        type={"number"}
        value={count}
        onInputUpdate={countUpdateHandler}
      />
    </Card>
  );
};

export default UserInput;

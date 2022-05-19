import React from "react";
import Card from "./UI/Card";
import Paragraph from "./UI/Paragraph";

const UserOutput = ({ username }) => {
  return (
    <Card>
      <Paragraph>{username}</Paragraph>
      <Paragraph>{username}</Paragraph>
    </Card>
  );
};

export default UserOutput;

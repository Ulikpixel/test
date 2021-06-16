import React from "react";
import { Date, Text } from "./style";
import { Wrapper } from "../../styled";
import { observer } from "mobx-react-lite";

const Timer = observer(({ from, to }) => {
  return (
    <Wrapper width="250px" height="50px" border="solid 1px #ccc" radius="5px">
      <Date justify="center">{from}</Date>
      <Text justify="center">До</Text>
      <Date justify="center">{to}</Date>
    </Wrapper>
  );
});

export default Timer;

import React from "react";
import { Btn, Count, Text } from "./style";
import { Wrapper } from "../../styled";
import { observer } from "mobx-react-lite";

const Counter = observer(({ count, setCount, text = "До" }) => {
  return (
    <Wrapper width="250px" height="50px" border="solid 1px #ccc" radius="5px">
      <Btn onClick={() => setCount(count - 1)}>-</Btn>
      <Count justify="center">{count}</Count>
      <Text justify="center">{text}</Text>
      <Btn onClick={() => setCount(count + 1)}>+</Btn>
    </Wrapper>
  );
});

export default Counter;

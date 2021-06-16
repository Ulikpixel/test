import React from "react";
import { Wrapper, Text } from "../../styled";

const Warning = () => {
  return (
    <Wrapper
      height="50px"
      margin="0 0 20px"
      bg="rgba(255, 0, 0, 0.2)"
      padding="10px 20px"
    >
      <Text>
        Выбор <strong>преподователя</strong> и <strong>аудиторий</strong> не
        обязателен{" "}
      </Text>
    </Wrapper>
  );
};

export default Warning;

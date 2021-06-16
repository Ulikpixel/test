import React from "react";
import { Text, SelectStyles, Box } from "./style";
import Select from "react-select";
import { SCHEDULE } from "../../../constains";
import { Flex } from "../../styled";
import { observer } from "mobx-react-lite";

const ColorPicker = observer(({ store }) => {
  const colors = SCHEDULE.colors.map((value) => ({
    value,
    label: <Box pointer bg={value} />,
  }));
  return (
    <Flex>
      <Text>Цвет группы:</Text>
      <Select
        defaultValue={{ label: <Box bg={store.color} />, value: store.color }}
        options={colors}
        styles={SelectStyles}
        onChange={({ value }) => store.setColor(value)}
      />
    </Flex>
  );
});

export default ColorPicker;

import React from "react";
import Select from "react-select";
import { styles } from "./style";
import { observer } from "mobx-react-lite";

const SelectTag = observer(({ options, value, onChange, placeholder }) => {
  return (
    <Select
      options={options.map((item) => ({ value: item, label: item }))}
      defaultValue={value && { value, label: value }}
      styles={styles}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
});

export default SelectTag;

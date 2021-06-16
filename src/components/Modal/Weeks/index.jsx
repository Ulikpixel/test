import React from "react";
import { Wrapper } from "../../styled";
import { Week } from "./style";
import { observer } from "mobx-react-lite";

const Weeks = observer(({ weeks, store }) => {
  return (
    <Wrapper height="50px" border="solid 2px #ccc" margin="0 0 20px">
      {weeks.map((item) => (
        <Week
          key={item}
          active={store.allWeeks.includes(item)}
          onClick={() => store.changeWeeks(item)}
        >
          {item}
        </Week>
      ))}
    </Wrapper>
  );
});

export default Weeks;

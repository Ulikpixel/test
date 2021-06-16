import styled from "styled-components";

export const Text = styled.p`
  font-size: 16px;
  opacity: 0.7;
  font-weight: 700;
`;

export const Box = styled.div`
  width: 40px;
  height: 40px;
  background: ${({ bg }) => bg || "black"};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "arrow")};
`;

export const SelectStyles = {
  option: (styles) => ({
    ...styles,
    padding: "5px 10px",
  }),
  control: (styles) => ({
    ...styles,
    width: "100px",
    height: "50px",
    marginLeft: "10px",
  }),
};

import styled from "styled-components";

export const Week = styled.button`
  height: 100%;
  width: 11%;
  border: none;
  border-right: solid 2px #ccc;
  font-size: 18px;
  cursor: pointer;
  color: ${({ active }) => (active ? "white" : "black")};
  background: ${({ active }) => (active ? "blue" : "white")};
`;

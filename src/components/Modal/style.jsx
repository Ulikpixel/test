import styled from "styled-components";

export const ModalSection = styled.div`
  width: 80%;
  height: 90%;
  background: white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  display: ${({ modal }) => (modal ? "block" : "none")};
  padding: 15px;
  overflow-y: scroll;
`;

export const Popup = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 80;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: ${({ modal }) => (modal ? "block" : "none")};
`;

export const Hr = styled.hr`
  border: solid 1px #ccc;
  margin: 15px 0;
`;

export const CloseBtn = styled.button`
  border: none;
  font-size: 20px;
  background: none;
  position: absolute;
  right: 15px;
  top: 10px;
  font-weight: bold;
  z-index: 100;
`;

export const Field = styled.input`
  height: 50px;
  width: 150px;
  padding: 10px;
  font-size: 18px;
`;

export const Btn = styled.button`
  font-size: 17px;
  background: none;
  margin-left: 15px;
  padding: 10px 25px;
  border: ${({ border }) => (border ? "solid 1px black" : "none")};
  color: black;
`;

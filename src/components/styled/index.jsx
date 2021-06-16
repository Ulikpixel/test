import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: ${({ nowrap }) => (nowrap ? "nowrap" : "wrap")};
  justify-content: ${({ justify }) => justify || "space-between"};
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  align-items: ${({ align }) => align || "center"};
  margin: ${({ margin }) => margin || "0"};
`;

export const Wrapper = styled(Flex)`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  border-radius: ${({ radius }) => radius || "0"};
  padding: ${({ padding }) => padding || "0"};
  margin: ${({ margin }) => margin || "0"};
  overflow: hidden;
  border: ${({ border }) => border || "none"};
  background: ${({ bg }) => bg || "white"};
`;

export const Text = styled.p`
  font-size: ${({ size }) => size || "16px"};
  font-weight: ${({ weight }) => weight || "0"};
  color: ${({ color }) => color || "black"};
  margin: ${({ margin }) => margin || "0"};
  opacity: ${({ opacity }) => opacity || "1"};
`;

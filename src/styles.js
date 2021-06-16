import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul, ol {
  list-style-type: none;
  padding: 0;
}
a {
  text-decoration: none;
}
button, select, textarea, input {
  outline: none;
}
button, select, input[type="checkbox"] {
  cursor: pointer;
}
body {
  line-height: 1.5;
  font-size: 14px;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
}
`;
export default Styles;

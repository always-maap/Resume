import { normalize } from "styled-normalize";

import { createGlobalStyle } from "styled-components";
import { Colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }

  html, body {
    font-size: 10px;
    margin: 0; 
    padding: 0;
  }

  body {
    background-color: ${Colors.white_three};
  }
`;

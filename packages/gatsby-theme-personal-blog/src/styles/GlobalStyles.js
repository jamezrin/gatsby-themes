import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
      }
      body {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
        position: relative;
      }
      *,
      *:after,
      *:before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }
    `}
  />
);

export default GlobalStyles;

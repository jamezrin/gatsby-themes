import React from 'react';
import 'typeface-open-sans';
import { Global, css } from '@emotion/core';

const GlobalFonts = () => (
  <Global
    styles={css`
      html {
        font-family: 'Open Sans', Arial, sans-serif;
        font-size: 16px;
      }
    `}
  />
);

export default GlobalFonts;

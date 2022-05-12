import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#085c25',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });

export default function Palette({children}) {
    return (
      <ThemeProvider theme={theme}>
       {children}
      </ThemeProvider>
    );
  }
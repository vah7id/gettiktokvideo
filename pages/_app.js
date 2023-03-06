import '../styles/globals.css'
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import { useEffect } from 'react';
import { gtag, install } from 'ga-gtag';

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#ff9ecf'
    }
  }
});
   

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    install('G-FC7M0Z3Y0R'); 
  })
  return <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </>
}

export default MyApp

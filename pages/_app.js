import '../styles/globals.css'
import '../styles/audioPlayer.css';
import '../styles/customize-progress-bar.css';
import { createMuiTheme, ThemeProvider } from '@mui/material';

// Or Create your Own theme:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff9ecf'
    }
  }
});
   

function MyApp({ Component, pageProps }) {
  return <>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </>
}

export default MyApp

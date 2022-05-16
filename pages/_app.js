import "../styles/global.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AuthContextProvider from "../components/context/AuthContextProvider";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, Arial",
  },
});
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

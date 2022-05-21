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
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

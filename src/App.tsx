import { GlobalStyle } from "./styles/GlobalStyle";
import { Router } from "./routes/index.routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Router/>
    </ThemeProvider>
  );
};

export default App;

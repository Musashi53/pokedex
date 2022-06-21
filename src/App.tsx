import { GlobalStyle } from "./styles/GlobalStyle";
import HeaderComponent from "./components/Header";
import { Main } from "./components/layout/styles";
import Router from "./routes";

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <HeaderComponent/>
      <Main>
        <Router/>
      </Main>
    </div>
  );
};

export default App;

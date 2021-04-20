import { Container } from "reactstrap";
import Routes from "./routes";
import { ContextWrapper } from "./user-context";
import logo from './assets/logo.png'
import "./App.css";

function App() {
  return (
    <ContextWrapper>
      <Container>
        <img src = {logo} alt ='logo'/>
        <div className="content">
          <Routes />
        </div>
      </Container>
    </ContextWrapper>
  );
}

export default App;

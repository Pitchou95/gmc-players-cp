import "./styles/app.scss";
import Sidebar from "./components/sideBar";
import Container from "./components/container";
import Section from "./components/section";
function App() {
  return (
    <div className="App" >
      <Sidebar />
      <Section/>
      <Container />
    </div>
  );
}

export default App;

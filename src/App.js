import "./App.css";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { data } from "./helper/data";

function App() {
  return (
    <div className="App">
      <Header data={data} />
      <CardContainer data={data} />
    </div>
  );
}

export default App;

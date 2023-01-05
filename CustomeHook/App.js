import "./App.css";
import Click from "./component/Click";
import Mouse from "./component/Mouse";
import ClickCustomHook from "./component/ClickCustomHook";
function App() {
  return (
    <div className="App">
      <h1>Learning With Vishal</h1>
      <Click />
      <Mouse />
      <ClickCustomHook />
    </div>
  );
}

export default App;

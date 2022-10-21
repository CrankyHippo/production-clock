import "./App.css";
import Clock from "./components/Clock";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Production Time App</h1>
      </header>
      <Clock />
      <Countdown />
    </div>
  );
}

export default App;

import logo from "./logo/Vygon logo.png";
import "./App.css";
import Component from "./component";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo-sipv" src={logo}></img>
      </header>
      <div>
        <Component />
      </div>
    </div>
  );
}

export default App;

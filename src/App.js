import logo from "./logo/Vygon logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="logo-sipv" src={logo}></img>
      </header>
      <div className="formulaire">
        <h1>Machine</h1>
        <div className="formulaire-component">
          <label>
            Code :
            <input type="text" name="name" />
          </label>
          <label>
            DLU :
            <input type="text" name="name" />
          </label>
          <label>
            Date :
            <input type="text" name="name" />
          </label>
          <label>
            Visa :
            <input type="text" name="name" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;

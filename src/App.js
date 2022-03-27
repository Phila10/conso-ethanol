import logo from "./logo/Vygon logo.png";
import "./App.css";
import FullCards from "./FullCards";
import Component from "./component";
import ComponentMP6 from "./componentMP6";
import ComponentMP8 from "./componentMP8";
import ComponentMP9 from "./componentMP9";
import ComponentMP10 from "./componentMP10";
import ComponentVAD from "./componentVAD";
import ComponentMEP2 from "./componentMEP2";
import ComponentBIO2 from "./componentBIO2";
import ComponentBIO3 from "./componentBIO3";
import ComponentBIO4 from "./componentBIO4";
import ComponentQIMOM from "./componentQIMOM";
import ComponentPELL from "./componentPELL";
import ComponentAF from "./componentAF";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
  
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <Link to="/">
        <img className="logo-sipv" src={logo} alt="yes"></img>
        </Link>
        
      </header>
     
        <Routes>
        <Route exact path="/" element={<FullCards/>} />
         
          <Route exact path="/MP2" element={<Component/>} />
          <Route exact path="/MP6" element={<ComponentMP6/>} />
          <Route exact path="/MP8" element={<ComponentMP8/>} />
          <Route exact path="/MP9" element={<ComponentMP9/>} />
          <Route exact path="/MP10" element={<ComponentMP10/>} />
          <Route exact path="/MEP2" element={<ComponentMEP2/>} />
          <Route exact path="/VAD" element={<ComponentVAD/>} />
          <Route exact path="/BIO2" element={<ComponentBIO2/>} />
          <Route exact path="/BIO3" element={<ComponentBIO3/>} />
          <Route exact path="/BIO4" element={<ComponentBIO4/>} />
          <Route exact path="/QIMOM" element={<ComponentQIMOM/>} />
          <Route exact path="/PELL" element={<ComponentPELL/>} />
          <Route exact path="/AF" element={<ComponentAF/>} />
        </Routes>
     
    
    </div>
    </Router>
  );
}

export default App;

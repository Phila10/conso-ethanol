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
        <Route path="/" element={<FullCards/>} />
         
          <Route path="/MP2" element={<Component/>} />
          <Route path="/MP6" element={<ComponentMP6/>} />
          <Route path="/MP8" element={<ComponentMP8/>} />
          <Route path="/MP9" element={<ComponentMP9/>} />
          <Route path="/MP10" element={<ComponentMP10/>} />
          <Route path="/MEP2" element={<ComponentMEP2/>} />
          <Route path="/VAD" element={<ComponentVAD/>} />
          <Route path="/BIO2" element={<ComponentBIO2/>} />
          <Route path="/BIO3" element={<ComponentBIO3/>} />
          <Route path="/BIO4" element={<ComponentBIO4/>} />
          <Route path="/QIMOM" element={<ComponentQIMOM/>} />
          <Route path="/PELL" element={<ComponentPELL/>} />
          <Route path="/AF" element={<ComponentAF/>} />
        </Routes>
     
    
    </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Performance from "./pages/Performance/Performance";
import Setting from "./pages/Setting/Setting";
import Support from "./pages/Support/Support";
import "./App.css";


function App() {
  return (
    
    <div className="App">
      <Router>          
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/performance" element={<Performance />} /> 
          <Route path="/setting" element={<Setting />} /> 
          <Route path="/support" element={<Support />} />          
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
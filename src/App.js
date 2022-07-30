import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Allassignments from './components/Allassignments';
import Assignment_1 from './components/Assignment_1';
import Learning from "./components/Learning";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
       
          <Route index element={<Home />} />
          <Route path="allassignments" element={<Allassignments />} />
          <Route path="assignment_1" element={<Assignment_1/>} />
          <Route path="learning" element={<Learning />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

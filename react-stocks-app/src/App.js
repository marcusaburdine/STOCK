// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Nav from"./components/Nav"
import Home from"./pages/Home"
import About from"./pages/About"
import Stock from"./components/Stock"
import Dashboard from"./pages/Home"
import './App.css';

// console.log(Data)



function App() {
  return (
    <div className="App">
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/stock/" element={<Dashboard/>}/>
      <Route path="/stock/:symbol" element={<Stock/>}/>
    </Routes>
    </div>
  );
}

export default App;

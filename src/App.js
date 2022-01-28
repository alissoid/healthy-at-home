import './App.css';
import React from 'react';
import SideBar, {HamburgerMenu} from './components/SideBar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Timer from "./components/Timer";
import Eye from "./components/Eye";


function App() {
  return (
    <div className="App bg-gray-700 w-full h-full absolute inset-0">
      
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/timer" element={<Timer/>}>
        </Route>
        <Route path="/eye" element={<Eye/>}>
        </Route>
        
        </Routes>
        {/* <HamburgerMenu/> */}
      <SideBar/>
    </div>
);
}


export default App;

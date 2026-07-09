import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Task from "./Pages/Task";

export default function App() {
  
  return (
  <div>
    <Navbar/>

    <Routes>
      <Route path = "/home" element = {<Home/>}/>
      <Route path = "/dashboard" element ={<Dashboard/>}/>
      <Route path = "/tasks" element = { <Task/>}/>
    </Routes>
  </div>
  );
}


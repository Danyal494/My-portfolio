import { useState } from "react";

import "./App.css";
import Sidebar from "./Components/sideBar";
import Navbar from "./Components/navBar";
import Home from "./Components/Home";
import Navbutton from "./Components/navbutton";

function App() {
  return (
    <div className="Mpage  ">
      <Navbutton />
      {/* <Navbtn /> */}
      <div className="navbar  p-5 flex-wrap flex justify-evenly items-center">
        <Sidebar />
        <Home />
        <Navbar />
      </div>
    </div>
  );
}

export default App;

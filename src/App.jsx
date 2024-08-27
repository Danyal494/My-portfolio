import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Sidebar from "./Components/sideBar";
import Navbar from "./Components/navBar";
import Home from "./Components/Home";
import Navbutton from "./Components/navbutton";
import Loader from "./Components/Loader";

function App() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;
    const cursorOutline = cursorOutlineRef.current;

    const handleMouseMove = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;

      cursorOutline.style.left = `${posX}px`;
      cursorOutline.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="Mpage">
      {loading ? (<Loader/>) :(
        <div>

        <div
        ref={cursorDotRef}
        className="cursor-dot w-[5px] h-[5px] bg-slate-800 fixed top-0 left-0 z-10 rounded-full translate-y-[-50%] translate-x-[-50%] pointer-events-none"
        data-cursor-dot
        ></div>
        <div
        ref={cursorOutlineRef}
        className="cursor-outline translate-y-[-50%] translate-x-[-50%]  w-[30px] h-[30px] fixed top-0 left-0 z-10 pointer-events-none  border-2 rounded-[50%] justify-center"
        data-cursor-outline
      >
       
      </div>
      <Navbutton />
      <div className="navbar p-5 flex-wrap flex justify-evenly items-center">
        <Sidebar />
        <Home />
        <Navbar />
      </div>
        </div>
    )}
      
    </div>
  );
}

export default App;


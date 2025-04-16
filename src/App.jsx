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
    const handleMouseMove = (e) => {
      const cursorDot = cursorDotRef.current;
      const cursorOutline = cursorOutlineRef.current;
  
      if (cursorDot && cursorOutline) {
        const posX = e.clientX;
        const posY = e.clientY;
  
        cursorDot.style.transform = `translate(${posX}px, ${posY}px)`;
        cursorOutline.style.transform = `translate(${posX}px, ${posY}px)`;
  
        cursorOutline.animate(
          {
            transform: `translate(${posX}px, ${posY}px)`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    };
  
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [loading]); // Add `loading` to the dependency array
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (


    <div className="gradient-background pb-5 ">
      
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div
            ref={cursorDotRef}
            className="cursor-dot w-[5px] h-[5px] bg-slate-800 fixed top-0 left-0 z-10 rounded-full max-sm:hidden translate-y-[-50%] translate-x-[-50%] pointer-events-none"
            data-cursor-dot
            ></div>
          <div
            ref={cursorOutlineRef}
            className="cursor-outline max-sm:hidden translate-y-[-50%] translate-x-[-50%] w-[30px] h-[30px] fixed top-0 left-0 z-10 pointer-events-none border-2 rounded-[50%] justify-center"
            data-cursor-outline
            ></div>
          <Navbutton />
          <div className="navbar p-1 flex-wrap flex justify-evenly  items-center">
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

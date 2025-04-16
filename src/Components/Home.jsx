import React from "react";
import Aboutme from "./Tab Folder/aboutMe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from "./Tab Folder/Resume";
import Projects from "./Tab Folder/Projects";
import Contact from "./Tab Folder/Contact";

const Home = () => {
  return (
    <div className="cbox w-[95%] sm:w-[60%] p-6 mx-1 rounded-2xl h-full">

      <Routes>
        <Route path="/" element={<Aboutme />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Home;

import React from "react";

const Resume = () => {
  return (
    <div id="resume" >
   <div className="">
    <h1 className="font-bold text-[#D5DCDE] text-lg">Resume:</h1>
    <div className="flex flex-wrap justify-around">
<div className="Rbox p-2  w-[300px]">
  <h1 className="font-bold text-[#D5DCDE] text-base">Education</h1>
  <div className="box mt-4 rounded-xl bg-teal-400 p-2">
    <p>May-2024</p>
<p>Bachelor of Science in Computer Science</p>
<p>UMT </p>
<p> Johar Town lahore</p>
  </div> 
   <div className="box mt-4 rounded-xl bg-indigo-400 p-2">
<p>Dec-2023</p>
<p>Frontend Web Development </p>
<p>Ideoversity</p>
<p>Fasil Town Lahore</p>
  </div>
    
</div>
<div className="Rbox   p-2  w-[300px]">
  <h1 className="font-bold text-[#D5DCDE] text-base">Experance</h1>
  <div className="box mt-4 rounded-xl bg-purple-500 p-2">
<p>Dec-2024</p>
<p>Frontend Devaloper </p>
<p>Intern</p>
<p>Ideoversity</p>
<p>Fasil Town Lahore</p>
  </div>
  <div className="box mt-4 rounded-xl bg-indigo-400 p-2">
  <p>April-2024</p>
<p>Frontend Web Development </p>
<p>Junior</p>
<p>Heapware</p>
<p>Fasil Town Lahore</p>
    </div>
</div>
    </div>
   </div>
<div className="skills my-10 flex flex-wrap justify-between ">
<div className="SS w-[400px] mr-2">
  <h1 className="my-2 font-bold text-[#D5DCDE] text-lg">My Skills :</h1>
<div className="container">


  <div className="skill-box">
    <span className="title">React js</span>

    <div className="skill-bar">
      <span className="skill-per css">
        <span className="tooltip">30%</span>
      </span>
    </div>
  </div>
  <div className="skill-box">
    <span className="title">Next js</span>

    <div className="skill-bar">
      <span className="skill-per javascript">
        <span className="tooltip">40%</span>
      </span>
    </div>
  </div>
  <div className="skill-box">
    <span className="title">Three js</span>

    <div className="skill-bar">
      <span className="skill-per nodejs">
        <span className="tooltip">60%</span>
      </span>
    </div>
  </div>
  <div className="skill-box">
    <span className="title">Html+Css</span>

    <div className="skill-bar">
      <span className="skill-per html">
        <span className="tooltip">80%</span>
      </span>
    </div>
  </div>
  <div className="skill-box">
    <span className="title">C++</span>

    <div className="skill-bar">
      <span className="skill-per nodejs">
        <span className="tooltip">60%</span>
      </span>
    </div>
  </div>
</div>

</div>
<div className="w-[400px] p-3 ">
<h1 className="font-bold text-[#D5DCDE] text-lg ">Things I Know</h1>
<div className="flex justify-evenly flex-wrap mt-7">

<div className="gg bg-slate-400 rounded-xl p-2">web3</div>
<div className="gg bg-slate-400 rounded-xl p-2 mx-2 my-2">Artifecial Intalligance</div>
</div>
<div className="flex justify-evenly flex-wrap mt-7">

<div className="gg bg-slate-400 rounded-xl p-2">ui/ux Designing</div>
<div className="gg bg-slate-400 rounded-xl p-2"> IT</div>
</div>
<div className="flex justify-evenly flex-wrap mt-7">

<div className="gg bg-slate-400 rounded-xl p-2"> Three fiber</div>
<div className="gg bg-slate-400 rounded-xl p-2"> Three drie</div>
</div>
</div>
</div>

    </div>
  );
};

export default Resume;

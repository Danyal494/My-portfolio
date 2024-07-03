import React from "react";

const Resume = () => {
  return (
    <div id="res">
   <div className="">
    <h1 className="font-bold text-white text-lg">Resume:</h1>
    <div className="flex flex-wrap justify-around">
<div className="Rbox p-2  w-[300px]">
  <h1 className="font-bold text-white text-base">Education</h1>
  <div className="box mt-4 rounded-xl bg-teal-400 p-2">
    <p>date</p>
<p>Bachelor of Science in Computer Science</p>
<p>UMT </p>
<p> Johar Town lahore</p>
  </div>  <div className="box mt-4 rounded-xl bg-indigo-400 p-2">
<p>date</p>
<p>Fullstack Web Development </p>
<p>Ideoversity</p>
<p>Fasil Town Lahore</p>
  </div>  
</div>
<div className="Rbox   p-2  w-[300px]">
  <h1 className="font-bold text-white text-base">Experance</h1>
  <div className="box mt-4 rounded-xl bg-purple-500 p-2">
<p>12-4-2024</p>
<p>Frontend Devaloper </p>
<p>Intern</p>
<p>Fasil Town Lahore</p>
  </div>
</div>
    </div>
   </div>
<div className="skills my-10 flex flex-wrap justify-between ">
<div className="SS w-[400px] mr-2">
  <h1 className="my-2 font-bold text-white text-lg">My Skills :</h1>
<div class="container">


  <div class="skill-box">
    <span class="title">React js</span>

    <div class="skill-bar">
      <span class="skill-per css">
        <span class="tooltip">30%</span>
      </span>
    </div>
  </div>
  <div class="skill-box">
    <span class="title">Next js</span>

    <div class="skill-bar">
      <span class="skill-per javascript">
        <span class="tooltip">40%</span>
      </span>
    </div>
  </div>
  <div class="skill-box">
    <span class="title">Three js</span>

    <div class="skill-bar">
      <span class="skill-per nodejs">
        <span class="tooltip">60%</span>
      </span>
    </div>
  </div>
  <div class="skill-box">
    <span class="title">Html+Css</span>

    <div class="skill-bar">
      <span class="skill-per html">
        <span class="tooltip">80%</span>
      </span>
    </div>
  </div>
  <div class="skill-box">
    <span class="title">C++</span>

    <div class="skill-bar">
      <span class="skill-per nodejs">
        <span class="tooltip">60%</span>
      </span>
    </div>
  </div>
</div>

</div>
<div className="w-[400px] p-3 ">
<h1 className="font-bold text-white text-lg ">Things I Know</h1>
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

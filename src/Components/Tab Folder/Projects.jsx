import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div id="pro">
      <h1 className="font-bold text-xl text-[#D5DCDE] mb-2">Projects :</h1>
      <p className="">
        Projects showcase my skills and experience through real-word examples of
        my work. Each project is briefly described whith links to code
        repositories and live demos in it. it reflects my ability to solve
        complex problems,work with different technologies, and mange projects
        effectively.
      </p>
<div className="flex items-center ">

<p className="my-3 mr-3   "> You can see more project by visiting my git repo </p>
<a target="_blank" href="https://github.com/Danyal494?tab=repositories"> <Icon icon="logos:github-octocat" width="1.6em" height="1.6em" /></a>
</div>

<div className="flex gap-2 flex-wrap justify-evenly items-center mt-3">
<motion.div initial={{opacity:0 }} animate={{opacity:1 }} transition={{delay:0.4, duration:1}}
  className="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div className="">
  <section className=" absolute z-10 flex justify-center items-center">
    <a target="_blank"  href="https://solar-system-three-mu.vercel.app/">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
   <Icon icon="ion:logo-vercel" height={"1.3em"} /> 
  </button>
   </a>
</section>
  <section className=" absolute ml-11  z-10 flex justify-center items-center">
    <a target="_blank"  href="https://github.com/Danyal494/Solar-system">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
   <Icon icon="bxl:github" height={"1.3em"} /> 
  </button>
   </a>
</section>
    <div
      className="group-hover:scale-110 w-full h-60  duration-500"
    ><img src="/solar.png" alt="" /></div>
    <div
      className="absolute w-56 left-0 p-5 -bottom-12 duration-500 group-hover:-translate-y-12"
    >
      <div
        className="absolute -z-10 left-0  h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]"
      ></div>
      <span className="text-xl font-bold">Solar System</span>
      <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
        This project uses threejs to mimic the our solar system.  
      </p>
    </div>
  </div>
</motion.div>
<motion.div initial={{opacity:0 }} animate={{opacity:1 }} transition={{delay:0.5, duration:1}}
  className="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div className="">
  <section className=" absolute z-10 flex justify-center items-center">
    <a target="_blank"  href="https://breads-six.vercel.app/">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
   <Icon icon="ion:logo-vercel" height={"1.3em"} />
  </button>
    </a>
</section>
  <section className=" absolute ml-11 z-10 flex justify-center items-center">
    <a target="_blank"  href="https://github.com/Danyal494/Breads">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >

    <Icon icon="bxl:github" height={"1.3em"} />
    
  </button>
    </a>
</section>
    <div
      className="group-hover:scale-110 w-full h-60  duration-500"
    ><img  src="342266159-5a607865-39c5-4cf0-82e0-256fea9aedd2.png" alt="" /></div>
    <div
      className="absolute w-56 left-0 p-5 -bottom-12 duration-500 group-hover:-translate-y-12"
    >
      <div
        className="absolute -z-10 left-0  h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]"
      ></div>
      <span className="text-xl font-bold">Breads</span>
      <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
       This project use three.js to show amazing loading screen
      </p>
    </div>
  </div>
</motion.div>
<motion.div initial={{opacity:0 }} animate={{opacity:1 }} transition={{delay:0.6, duration:1}}
  className="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div className="">
  <section className=" absolute z-10 flex justify-center items-center">
    <a target="_blank"  href="https://kanban-board-seven-nu.vercel.app/">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
   <Icon icon="ion:logo-vercel" height={"1.3em"} /> 
  </button>
   </a>
</section>
  <section className=" absolute ml-11 z-10 flex justify-center items-center">
    <a target="_blank"  href="https://github.com/Danyal494/Kanban-Board">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
      
    <Icon icon="bxl:github" height={"1.3em"} />
    
  </button>
    </a>
</section>
    <div
      className="group-hover:scale-110 w-full h-60  duration-500"
    ><img src="/kanban.png" alt="" /></div>
    <div
      className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
      <div
        className="absolute -z-10 left-0 h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px] "
      ></div>
      <span className="text-xl font-bold">Kanban Board</span>
      <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
        This project is the clone of kanban board and made by using react.js
      </p>
    </div>
  </div>
</motion.div>
<motion.div initial={{opacity:0 }} animate={{opacity:1 }} transition={{delay:0.7, duration:1}}
  className="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div className="">
  <section className=" absolute z-10 flex justify-center items-center">
    <a target="_blank"  href="https://road-crossing.vercel.app/">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
   <Icon icon="ion:logo-vercel" height={"1.3em"} />
  </button>
    </a>
</section>
      <section className=" absolute ml-11 z-10 flex justify-center items-center">
        <a target="_blank"  href="https://github.com/Danyal494/Road-crossing">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
     <Icon icon="bxl:github" height={"1.3em"} />
  </button>
     </a>
</section>
    <div
      className="relative group-hover:scale-110 w-full h-60  duration-500"
    >

       <img src="/road-crossing.png" alt="" /> </div>
    <div
      className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
      <div
        className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]group-hover:bg-blue-900"
      ></div>
      <span className="text-xl font-bold">Road crossing</span>
      <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
        By using threejs i made agame in which we help the chiken to cross the road
      </p>
    </div>
  </div>
</motion.div>
<motion.div initial={{opacity:0 }} animate={{opacity:1 }} transition={{delay:0.8, duration:1}}
  className="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div className="">
  <section className=" absolute z-10 flex justify-center items-center">
    <a target="_blank"  href="https://computer-portfolio-nu.vercel.app/">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
   <Icon icon="ion:logo-vercel" height={"1.3em"} />
  </button>
    </a>
</section>
  <section className=" absolute ml-11 z-10 flex justify-center items-center">
    <a target="_blank"  href="https://github.com/Danyal494/Computer-Portfolio">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
    <Icon icon="bxl:github" height={"1.3em"} />
  </button>
   </a> 
</section>
    <div
      className="group-hover:scale-110 w-full h-60  duration-500"
    ><img src="/comp.png" alt="" /></div>
    <div
      className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
      <div
        className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]group-hover:bg-blue-900"
      ></div>
      <span className="text-xl font-bold">Computer-Portfolio </span>
      <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
        by using threejs we controll camera and and by i frame we showcase another website. 
      </p>
    </div>
  </div>
</motion.div>
<motion.div initial={{opacity:0 }} animate={{opacity:1 }} transition={{delay:0.5, duration:1}}
  className="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div className="">
  <section className=" absolute z-10 11 flex justify-center items-center">
  <a target="_blank"  href="https://save-the-fish-ten.vercel.app/">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >
   <Icon icon="ion:logo-vercel" height={"1.3em"} />
  </button>
    </a>
</section>
  <section className=" absolute ml-11 z-10 flex justify-center items-center">
    <a target="_blank"  href="https://github.com/Danyal494/Save-The-Fish">
  <button
    href="/"
    className="group flex justify-center p-2 rounded-md drop-shadow-xl from-gray-800 bg-[#316FF6] text-[#D5DCDE] font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
  >

 <Icon icon="bxl:github" height={"1.3em"} />
  </button>
    </a>
</section>
    <div
      className="group-hover:scale-110 w-full h-60  duration-500"
    ><img src="/savethefish.png" alt="" /></div>
    <div
      className="absolute w-56 left-0 p-5 -bottom-12 duration-500 group-hover:-translate-y-12"
    >
      <div
        className="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]group-hover:bg-blue-900"
      ></div>
      <span className="text-xl font-bold">Save the fish</span>
      <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
        By using css and js we can save the fish by filling the water. 
      </p>
    </div>
  </div>
</motion.div>

</div>

    </div>
  );
};

export default Projects;

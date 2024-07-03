import React from "react";

const Projects = () => {
  return (
    <div id="pro">
      <h1 className="font-bold text-xl text-white">Projects :</h1>
      <p className="">
        Projects showcase my skills and experience through real-word examples of
        my work. Each project is briefly described whith links to code
        repositories and live demos in it. it reflects my ability to solve
        complex problems,work with different technologies, and mange projects
        effectively.
      </p>

<p className="my-3 "> You can see more project by visiting my git repo</p>

<div className="flex gap-2 flex-wrap justify-evenly items-center mt-3">
<div
  class="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div class="">
    <div
      class="group-hover:scale-110 w-full h-60  duration-500"
    ><img src="/solar.png" alt="" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-12 duration-500 group-hover:-translate-y-12"
    >
      <div
        class="absolute -z-10 left-0  h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]"
      ></div>
      <span class="text-xl font-bold">Solar System</span>
      <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
        This project uses threejs to mimic the our solar system.  
      </p>
    </div>
  </div>
</div>
<div
  class="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div class="">
    <div
      class="group-hover:scale-110 w-full h-60  duration-500"
    ><img  src="342266159-5a607865-39c5-4cf0-82e0-256fea9aedd2.png" alt="" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-12 duration-500 group-hover:-translate-y-12"
    >
      <div
        class="absolute -z-10 left-0  h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]"
      ></div>
      <span class="text-xl font-bold">Breads</span>
      <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
       This project use three.js to show amazing loading screen
      </p>
    </div>
  </div>
</div>
<div
  class="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div class="">
    <div
      class="group-hover:scale-110 w-full h-60  duration-500"
    ><img src="/kanban.png" alt="" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
      <div
        class="absolute -z-10 left-0 h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px] "
      ></div>
      <span class="text-xl font-bold">Kanban Board</span>
      <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
        This project is the clone of kanban board and made by using react.js
      </p>
    </div>
  </div>
</div>
<div
  class="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div class="">
    <div
      class="group-hover:scale-110 w-full h-60  duration-500"
    > <img src="/road-crossing.png" alt="" /> </div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
      <div
        class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]group-hover:bg-blue-900"
      ></div>
      <span class="text-xl font-bold">Road crossing</span>
      <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
        By using threejs i made agame in which we help the chiken to cross the road
      </p>
    </div>
  </div>
</div>
<div
  class="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div class="">
    <div
      class="group-hover:scale-110 w-full h-60  duration-500"
    ><img src="/comp.png" alt="" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
      <div
        class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]group-hover:bg-blue-900"
      ></div>
      <span class="text-xl font-bold">Computer-Portfolio </span>
      <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
        by using threejs we controll camera and and by i frame we showcase another website. 
      </p>
    </div>
  </div>
</div>
<div
  class="relative group cursor-pointer rounded-lg overflow-hidden duration-500 w-[300px] h-64 bg-zinc-800 text-gray-50 p-5"
>
  <div class="">
    <div
      class="group-hover:scale-110 w-full h-60  duration-500"
    ><img src="/savethefish.png" alt="" /></div>
    <div
      class="absolute w-56 left-0 p-5 -bottom-12 duration-500 group-hover:-translate-y-12"
    >
      <div
        class="absolute -z-10 left-0 w-64 h-28 opacity-0 duration-500 group-hover:opacity-50 w-[300px]group-hover:bg-blue-900"
      ></div>
      <span class="text-xl font-bold">Save the fish</span>
      <p class="group-hover:opacity-100 w-56 duration-500 opacity-0">
        By using css and js we can save the fish by filling the water. 
      </p>
    </div>
  </div>
</div>

</div>

    </div>
  );
};

export default Projects;

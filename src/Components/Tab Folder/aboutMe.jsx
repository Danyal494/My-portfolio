import React from "react";
import {motion} from "framer-motion"
const Aboutme = () => {
  return (
    <div id="abt" className="about">
      <h1 className="font-bold text-2xl text-[#D5DCDE] font-mono">About Me:  </h1>
      <p className="text-justify text-black my-2">
        I'm skilled software developer with experiance in Javascript and C++,
        and expertise in frameworks like React , Node.js , Next.js and Three.js. I
        am quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems.Let's work together to bring your ideas to life
      </p>
      <div>
        <h1 className="font-bold text-2xl text-[#D5DCDE] font-mono">What I Can Do!</h1>
        <div>
          <div className="flex flex-wrap justify-evenly">
            <motion.div initial={{opacity:0,scale:0 }} animate={{opacity:1  ,scale:1 }} transition={{delay:0.3, duration:0.5}} className="Box   w-[300px] p-3 rounded-lg mt-3 ">
              <div className="svg"><img src="/Programmer-cuate.webp" alt="" width={250} /></div>
              <div div className="context">
                <h1 className="font-bold text-[#D5DCDE] text-xl font-mono">Frontend web devolper</h1>
                <p className="text-justify ">I'm a frontend web developer with a knack for crafting visually stunning websites using React, Next.js, and Three.js. I specialize in creating interactive and engaging 3D experiences that captivate users and bring concepts to life.</p>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0,scale:0 }} animate={{opacity:1  ,scale:1}} transition={{delay:0.2, duration:0.5}} className="Box p-3 rounded-lg mt-3 w-[300px]">
              <div className="context">
              <div className="svg"><img src="/UI-UXdifferences-amico(1).webp" alt="" width={250}/></div>
                <h1 className="font-bold text-[#D5DCDE]  text-xl font-mono">UI/UX design</h1>
                <p className="text-justify">I'm a UI/UX designer with a passion for creating beautiful, intuitive, and user-friendly interfaces using React, Next.js, and Three.js, delivering engaging and seamless digital experiences.</p>
              </div>
            </motion.div>
          </div>
          <div className="flex justify-evenly flex-wrap">
            <motion.div initial={{opacity:0,scale:0 }} animate={{opacity:1 ,scale:1 }} transition={{delay:0.1, duration:1}} className="Box p-3 rounded-lg mt-3 w-[300px]">
              <div className="svg"><img src="/3dmodeling-bro.webp" alt="" width={250}/></div>
              <div className="context">
                <h1 className="font-bold text-[#D5DCDE]  text-xl font-mono">Immersive 3D Interface Designer</h1>
                <p className="text-justify">I am an immersive 3D interface designer with a passion for problem-solving in coding. With expertise in React, Next.js, and Three.js, I develop beautiful and intuitive 3D environments that provide seamless user experiences.</p>
              </div>
            </motion.div>
            <motion.div initial={{opacity:0 ,scale:0}} animate={{opacity:1 ,scale:1 }} transition={{delay:0.5, duration:0.7}} className="Box p-3 rounded-lg mt-3 w-[300px]">
              <div className="svg"><img src="/Problemsolving-bro.webp" alt="" width={250} /></div>
              <div className="context">
                <h1 className="font-bold  text-[#D5DCDE] text-xl font-mono">Problem solver</h1>
                <p className="text-justify">A creative problem solver with a passion for coding, I excel in developing intuitive and interactive web interfaces. My expertise in React, Next.js, and Three.js allows me to tackle complex challenges and deliver beautiful, user-friendly solutions.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="curosal"></div>
    </div>
  );
};

export default Aboutme;

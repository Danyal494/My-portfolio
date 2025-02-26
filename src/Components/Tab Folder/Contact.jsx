import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Modal from "../ThreeD/Modal";


const Contact = () => {
  const [result, setResult] = React.useState("");

  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowModal(window.innerWidth >= 1000);
    };

    // Check the window size initially
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const forsmata = new FormData(event.target);

    forsmata.append("access_key", "098ce199-f5ab-4d36-a64d-daacce3cf367");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: forsmata
    });

    const data = await response.json();

    if (data.success) {
      // setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Good job!",
        text: "Your email send Successfully!",
        icon: "success"
      });
      // toast("Wow so easy!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

 
  return(

<div className="flex items-center justify-center">


  <div id="cont ">
      <p className=" text-5xl font-bold text-[#D5DCDE] ">Get in touch</p>
        <h3 className="text-3xl mt-2 font-bold text-[#D5DCDE]">Contact.</h3>
    <div className="w-[412px] max-sm:w-[248px] p-4 mx-auto">

        <form onSubmit={onSubmit} className="flex mt-12 gap-8 flex-col">
          <label className="flex flex-col">
            <span className="text-[#D5DCDE] font-medium mb-4">Your Name</span>
            <input
              type="text"
              className="bg-tertiary  w-[100%] py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium " required
              placeholder="Whats your name?"
              name="name"
              id=""
              />
          </label>
          <label className="flex flex-col">
            <span className="text-[#D5DCDE] font-medium mb-4">Your Eamil</span>
            <input
              type="email"
              // w-[380px] max-sm:w-[231px]
              className="bg-tertiary py-4 px-6
              w-[100%]
              placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium" required
              placeholder="Whats your email?"
              name="email"
              id=""
              />
          </label>
          <label className="flex flex-col">
            <span className="text-[#D5DCDE]  font-medium mb-4">Your Message</span>
            <textarea
              rows="4"
              className="bg-tertiary mt-3  py-4 px-6  w-[80%] placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium "required
              placeholder="Whats do you want to say?"
              name="message"
              id=""
              />
          </label>
          <button
            type="submit"
            className="bg-teal-400 py-3 px-8 w-fit   outline-none font-bold rounded-xl shadow-primary text-[#D5DCDE] shadow-sm "
            >
              Send
          </button>
        </form>
            </div>
  </div>
  {showModal && <Modal />}
              </div>
)
};

export default Contact;

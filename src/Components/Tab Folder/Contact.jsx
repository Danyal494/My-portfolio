import React from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "35366233-9b05-477f-949a-db2bf9ec9017");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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

  return <div id="cont ">
      <p className=" text-5xl font-bold text-white ">Get in touch</p>
        <h3 className="text-3xl mt-2 font-bold text-white">Contact.</h3>
    <div className="w-[450px] p-4 mx-auto">

        <form onSubmit={onSubmit} className="flex mt-12 gap-8 flex-col">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              className="bg-tertiary w-[380px] py-4 px-6 placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium " required
              placeholder="Whats your name?"
              name="name"
              id=""
              />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Eamil</span>
            <input
              type="email"
              className="bg-tertiary py-4 px-6 w-[380px] placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium" required
              placeholder="Whats your email?"
              name="email"
              id=""
              />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="4"
              className="bg-tertiary py-4 px-6 w-[350px] placeholder:text-secondary text-black rounded-lg outlined-none border-none font-medium "required
              placeholder="Whats do you want to say?"
              name="message"
              id=""
              />
          </label>
          <button
            type="submit"
            className="bg-teal-400 py-3 px-8 w-fit   outline-none font-bold rounded-xl shadow-primary text-white shadow-md "
            >
              Send
          </button>
        </form>
            </div>
  </div>;
};

export default Contact;

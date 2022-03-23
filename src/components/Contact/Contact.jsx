import React, { useState } from "react";
import "./Contact.css";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(name, email, message);
  const handleClick = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      toast.error("Fields Are Empty");
    } else {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/api/v1/contact",
          { name, email, message }
        );
        console.log(data);
        setEmail("");
        setMessage("");
        setName("");
        toast.success(`Congratulations ${name} Your Message Has Been Recieved`);
      } catch (error) {
        console.log(error.message);
        toast.error("Message Is Not Submitted");
      }
    }
  };
  return (
    <>
      {/* Contact Intro*/}
      <div>
        <Toaster />
      </div>
      <div className="container">
        <h1 className="mainservices__title">
          <Typewriter
            options={{
              strings: ["Contact Us"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      {/* Form */}
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            allowFullScreen=""
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.120931112722!2d87.26397751454769!3d26.484050884788623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef747e6f3d6247%3A0xb9b6b972defa55ff!2sBiratnagar%20Airport!5e0!3m2!1sen!2snp!4v1644650454973!5m2!1sen!2snp"
            style={{ filter: "contrast(1) opacity(0.8)" }}
          />
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md main__form">
            <h2
              className="text-gray-900 text-lg mb-1 font-medium title-font"
              style={{
                fontSize: "20px",
                textAlign: "center",
                margin: "10px 0px",
              }}
            >
              FEEDBACK{" "}
            </h2>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Name
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                defaultValue={""}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleClick}
              style={{ backgroundColor: "#22c514" }}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

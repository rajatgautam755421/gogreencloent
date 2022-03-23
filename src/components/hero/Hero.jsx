import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <>
      <div className="main__hero">
        <div className="main__hero__content">
          <div class="custom-shape-divider-bottom-1634357701">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 0L0 0 598.97 114.72 1200 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div>
          <div className="main__hero__text">
            <h1 className="mainservices__title__main">
              <Typewriter
                options={{
                  strings: ["Our Motive Is To Go Green"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 nav__button"
              style={{
                color: "#22c514",
                fontSize: "20px",
                width: "100px",
                height: "40px",
                margin: "20px 0px",
              }}
            >
              <h1>Visit</h1>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Waves */}
    </>
  );
};

export default Hero;

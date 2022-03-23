import React from "react";
import Top3Buy from "./Top3Buy";
// import "../Home/home.css";
import Top3Sell from "./Top3Sell";
import WhyPMS from "./WhyPMS";
import Hero from "../hero/Hero";
const Home = () => {
  return (
    <>
      <Hero />
      <WhyPMS />
      <Top3Sell />
      <Top3Buy />
    </>
  );
};

export default Home;

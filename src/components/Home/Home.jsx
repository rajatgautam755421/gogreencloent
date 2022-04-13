import React, { useEffect, useState } from "react";
import Top3Buy from "./Top3Buy";
// import "../Home/home.css";
import Top3Sell from "./Top3Sell";
import WhyPMS from "./WhyPMS";
import Hero from "../hero/Hero";
import toast from "react-hot-toast";
import TopSellers from "../TopSellers/TopSellers";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const [refresh, setRefresh] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  useEffect(() => {
    if (location.pathname === "/") {
      setRefresh("/");
    }
  });
  useEffect(() => {
    if (userInfo) {
      toast.success(`Welcome back ${userInfo && userInfo.name}`);
    } else {
      return 1;
    }
  });
  return (
    <>
      <Hero />
      <WhyPMS />
      <Top3Sell />
      <Top3Buy />
      <TopSellers />
    </>
  );
};

export default Home;

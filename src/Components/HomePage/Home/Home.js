import React from "react";
import BrandLogo from "../BrandLogo/BrandLogo";
import Header from "../Header/Header";
import Services from "../Services/Service";
import Works from "../Works/Works";

const Home = () => {
  return (
    <>
      <Header />
      <BrandLogo />
      <Services />
      <Works />
    </>
  );
};

export default Home;

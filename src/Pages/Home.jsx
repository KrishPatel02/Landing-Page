// eslint-disable-next-line no-unused-vars
import React from "react";

import "../Page CSS/Home.css";

import { GoSignIn } from "react-icons/go";

import { IoMdPricetag } from "react-icons/io";

import { NavLink } from "react-router-dom";

import Services from "./Services";

import Pricing from "./Pricing";

import FAQs from "../Components/FAQs";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="headerLeft">
          <h1>Transform Your Business Digitally</h1>

          <p>
            Unlock the potential of your business with our transformative
            digital solutions. Elevate your operations, reach new heights, and
            stay ahead of the competition with our cutting-edge technology
            services.
          </p>

          <div className="headerLeftBtn">
            <NavLink to="/Pricing" className="pricingBtn headerBtn">
              <IoMdPricetag />
              Pricing
            </NavLink>

            <NavLink to="/SignIn" className="signInBtn headerBtn">
              <GoSignIn />
              Sign In
            </NavLink>
          </div>
        </div>
      </header>

      <Services />

      <Pricing />

      <FAQs />
    </>
  );
};

export default Home;

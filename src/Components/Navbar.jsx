// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import "../ComponentCSS/Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="logo">
                    <h1>
                        <NavLink to="/">TransDigi</NavLink>
                    </h1>
                </div>
                <div className="navList">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/OurProducts">Our Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ContactUs">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to="/Registration">Registration</NavLink>
                <NavLink to="/Pricing">Pricing</NavLink>
            </nav>
        </>
    );
};

export default Navbar;

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { RiMenu4Fill } from "react-icons/ri";

import { IoClose } from "react-icons/io5";

import { GoSignIn } from "react-icons/go";

import { IoMdPricetag } from "react-icons/io";

import "../ComponentCSS/Navbar.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav>
                <div className="logo">
                    <h1>
                        <NavLink to="/">TransDigi</NavLink>
                    </h1>
                </div>

                <div className={`navList ${isMenuOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <NavLink to="/" onClick={toggleMenu}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/OurProducts" onClick={toggleMenu}>
                                Our Products
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/ContactUs" onClick={toggleMenu}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>

                    <div className="navBtn">
                        <NavLink
                            to="/Pricing"
                            className="pricingBtn iconBtn"
                            onClick={toggleMenu}
                        >
                            <IoMdPricetag className="priceIcon" />
                            Pricing
                        </NavLink>

                        <NavLink
                            to="/SignIn"
                            className="signInBtn iconBtn "
                            onClick={toggleMenu}
                        >
                            <GoSignIn className="signInIcon" />
                            SignIn
                        </NavLink>
                    </div>
                </div>

                <div className="mobileNavBtn" onClick={toggleMenu}>
                    {isMenuOpen ? (
                        <IoClose className="closeIcon mobileNavIcon" />
                    ) : (
                        <RiMenu4Fill className="menuIcon mobileNavIcon" />
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;

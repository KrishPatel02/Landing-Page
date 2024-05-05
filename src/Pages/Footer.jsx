// eslint-disable-next-line no-unused-vars
import React from "react";

import "../Page CSS/Footer.css";

import { NavLink } from "react-router-dom";

import ServicesAPI from "../API/ServicesAPI";

import Pages from "../API/PagesAPI";

function Footer() {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);

        section.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="footerPage">
            <div className="footer">
                <div className="footerBoxes footerPages">
                    <h3>Pages</h3>

                    <ul>
                        {Pages.map((footerPages, fpIndex) => (
                            <>
                                <li key={fpIndex}>
                                    <NavLink
                                        to={footerPages.pageLink}
                                        onClick={() => scrollToSection(footerPages.id)}
                                    >
                                        {footerPages.pageName}
                                    </NavLink>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>

                <div className="footerBoxes footerServices">
                    <h3>Services</h3>

                    <ul>
                        {ServicesAPI.map((footerServices, fsIndex) => (
                            <>
                                <li key={fsIndex}>
                                    <NavLink
                                        to="/Services"
                                        onClick={() => scrollToSection(footerServices.id)}
                                    >
                                        {footerServices.name}
                                    </NavLink>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>

                <div className="footerBoxes">
                    <h3>Contact Us</h3>

                    <p>Email: info@yourcompany.com</p>

                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>

            <div className="footerCopyRight">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

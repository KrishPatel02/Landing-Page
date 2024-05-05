// eslint-disable-next-line no-unused-vars
import React from "react";

import "../Page CSS/ContactUs.css";

import { IoMdPerson } from "react-icons/io";

import { MdEmail } from "react-icons/md";

import { FaMessage } from "react-icons/fa6";

import Button from "@mui/material/Button";

const Contact = () => {
    return (
        <>
            <div className="contactUs">
                <div className="contactUsForm">
                    <h1>Contact Us</h1>

                    <form>
                        <div className="inputField">
                            <IoMdPerson className="icon" />

                            <input type="text" placeholder="Name" />
                        </div>

                        <div className="inputField">
                            <MdEmail className="icon" />

                            <input type="email" placeholder="Email" />
                        </div>

                        <div className="inputField">
                            <FaMessage className="icon" />

                            <textarea rows="5" placeholder="Message"></textarea>
                        </div>

                        <Button variant="contained" className="contactSubmitBtn">
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;

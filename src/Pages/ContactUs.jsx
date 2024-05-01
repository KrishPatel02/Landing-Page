// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Page CSS/ContactUs.css";

const Contact = () => {
    return (
        <>
            <div className="contactUs">
                <div className="contactUsForm">
                    <h1>Contact Us</h1>
                    <form>
                        <div className="inputField">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="inputField">
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="inputField">
                            <textarea rows="5" placeholder="Message"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;

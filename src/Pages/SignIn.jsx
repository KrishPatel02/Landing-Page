// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Page CSS/SignIn.css";
import { MdEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import { PiSignInBold } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
    return (
        <div className="signIn">
            <div className="signInForm">
                <h1>Sign In</h1>
                <form>
                    <div className="inputField">
                        <MdEmail className="icon" />
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="inputField">
                        <TbPassword className="icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <button type="submit">
                        <pre>Sign In </pre>
                        <PiSignInBold />
                    </button>
                </form>
                <div className="or">
                    <span>Or</span>
                </div>
                <button className="googleSignIn">
                    <pre>Sign In with </pre> <FcGoogle />
                </button>
            </div>
        </div>
    );
};

export default SignIn;

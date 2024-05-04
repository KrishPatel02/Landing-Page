// eslint-disable-next-line no-unused-vars
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

import Pricing from "./Pages/Pricing";

import ContactUs from "./Pages/ContactUs";

import Navbar from "./Components/Navbar";

import SignIn from "./Pages/SignIn";

import Services from "./Pages/Services";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/Services" element={<Services />} />

                    <Route path="/ContactUs" element={<ContactUs />} />

                    <Route path="/Pricing" element={<Pricing />} />

                    <Route path="/SignIn" element={<SignIn />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

// eslint-disable-next-line no-unused-vars
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";

import Services from "./Pages/Services";

import FAQs from "./Components/FAQs";

import ContactUs from "./Pages/ContactUs";

import Pricing from "./Pages/Pricing";

import SignIn from "./Pages/SignIn";

import Footer from "./Pages/Footer";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />

                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/Services" element={<Services />} />

                    <Route path="/FAQs" element={<FAQs />} />

                    <Route path="/ContactUs" element={<ContactUs />} />

                    <Route path="/Pricing" element={<Pricing />} />

                    <Route path="/SignIn" element={<SignIn />} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </>
    );
};

export default App;

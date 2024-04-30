// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Pricing from "./Pages/Pricing";
import OurProducts from "./Pages/OurProducts";
import ContactUs from "./Pages/ContactUs";
import Registration from "./Pages/Registration";
import Navbar from "./Components/Navbar";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/OurProducts" element={<OurProducts />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/Pricing" element={<Pricing />} />
                    <Route path="/Registration" element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;

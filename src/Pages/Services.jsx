// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

import "../Page CSS/Services.css";

import ServicesAPI from "../API/ServicesAPI";

const Services = () => {
    return (
        <div className="services">
            <header className="servicesTitle">
                <h1>Digital Transformation Services</h1>

                <p>Empowering your business for the digital age.</p>
            </header>

            <section className="serviceBoxes">
                {ServicesAPI.map((service, index) => (
                    <div
                        key={index}
                        id={service.id}
                        className={`serviceBox ${index % 2 === 0 ? "evenServiceBox" : "oddServiceBox"
                            }`}
                    >
                        <div>
                            <h1>{service.name}</h1>

                            <p>{service.description}</p>
                        </div>

                        <img src={service.image} alt={service.name} width="250px" />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Services;

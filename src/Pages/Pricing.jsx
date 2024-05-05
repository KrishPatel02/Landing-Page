// eslint-disable-next-line no-unused-vars
import React from "react";

import { FaCheck } from "react-icons/fa";

import { ImCross } from "react-icons/im";

import "../Page CSS/Pricing.css";

import Plans from "../API/PricingAPI";

import { IoMdPricetag } from "react-icons/io";

import Button from "@mui/material/Button";

const Pricing = () => {
    return (
        <>
            <h1 className="pricingTitle">
                <IoMdPricetag />
                Pick your Plan
            </h1>

            <div className="pricing">
                {Plans.map((plan, index) => (
                    <div key={index} className="plan">
                        {index == 1 ? <div className="popularTag">Most Popular</div> : ""}

                        <h2>{plan.name}</h2>

                        <div className="planPrice">{plan.price}</div>

                        <ul className="planFeatureList">
                            {plan.featureLimited.map((feature, i) => (
                                <li key={i}>
                                    <FaCheck className="checkOrangeIcon pricingIcon" />

                                    {feature}
                                </li>
                            ))}

                            {plan.features.map((feature, i) => (
                                <li key={i}>
                                    <FaCheck className="checkGreenIcon pricingIcon" /> {feature}
                                </li>
                            ))}

                            {plan.featureExcluded.map((feature, i) => (
                                <li key={i}>
                                    <ImCross className="crossRedIcon pricingIcon" />

                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button variant="contained" className="chooseBtn">
                            Choose Plan
                        </Button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Pricing;

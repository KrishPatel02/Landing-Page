// eslint-disable-next-line no-unused-vars
import React from "react";

import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";

import AccordionDetails from "@mui/material/AccordionDetails";

import Typography from "@mui/material/Typography";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import FAQsAPI from "../API/FAQsAPI";

import "../ComponentCSS/FAQs.css";

const FAQs = () => {
    return (
        <>
            <h1 className="faqh1">Frequently Asked Questions</h1>

            <div className="accordion">
                {FAQsAPI.map((faq, index) => (
                    <>
                        <Accordion key={index} className="accordionFAQs">
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography>{faq.question}</Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography>{faq.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </>
                ))}
            </div>
        </>
    );
};

export default FAQs;

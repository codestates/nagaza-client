import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
    const backtoLandingpage = () => {
        if (location.pathname.toLowerCase() !== "/landingpage")
            history.push("/landingpage");
    };
    //로고 hover event, click event = redirection to LandingPage
    const history = useHistory();
    return (
        <>
            <div
                className="logo"
                onClick={() => {
                    backtoLandingpage();
                }}
            >
                <img className="logoImage" src="/img/nagaza-logo.png" />
            </div>
        </>
    );
}

import React, { Component } from "react";

export default class Logo extends Component {
    constructor() {
        super();
    }
    //로고 hover event, click event = redirection to LandingPage
    render() {
        return (
            <>
                <div className="logo">
                    <img className="logoImage" src="#" />
                </div>
            </>
        );
    }
}

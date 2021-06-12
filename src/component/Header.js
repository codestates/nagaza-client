import React from "react";
import Navigation from "../component/NavigationBar.js";
import Logo from "../component/Logo.js";
import Profile from "../component/Profile.js";
function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <Logo></Logo>
                </div>
                <Navigation></Navigation>
                <div>
                    <Profile></Profile>
                </div>
            </div>
        </>
    );
}

export default Header;

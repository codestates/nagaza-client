import React from "react";
import Navigation from "../component/NavigationBar.js";
import Logo from "../component/Logo.js";
import Profile from "../component/Profile.js";
import ProfileMenu from "../component/ProfileMenu.js";
import "./Header.css";
function Header() {
    return (
        <>
            <div className="headermenu">
                <div className="mainmenu">
                    <div className="mainmenu-logo">
                        <Logo></Logo>
                    </div>

                    <div className="mainmenu-profile">
                        <ProfileMenu></ProfileMenu>
                    </div>
                </div>
            </div>
            <div className="search-bar">
                <Navigation></Navigation>
            </div>
        </>
    );
}

export default Header;

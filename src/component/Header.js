import React from "react";
import Navigation from "../component/NavigationBar.js";
import Logo from "../component/Logo.js";
import Profile from "../component/Profile.js";
import ProfileMenu from "../component/ProfileMenu.js";
import "./Header.css";
function Header({ signIn, signOut, searchGroup, isSignIn }) {
    // console.log(props)
    return (
        <>
            <div className="headermenu">
                <div className="mainmenu">
                    <div className="mainmenu-logo">
                        <Logo></Logo>
                    </div>
                    <div className="mainmenu-profile">
                        <ProfileMenu
                            isSignIn={isSignIn}
                            signIn={signIn}
                            signOut={signOut}
                        ></ProfileMenu>
                    </div>
                </div>
                <div className="lp-navigation">
                    <Navigation searchGroup={searchGroup}></Navigation>
                </div>
            </div>
        </>
    );
}
export default Header;

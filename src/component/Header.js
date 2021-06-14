import React from "react";
import Navigation from "../component/NavigationBar.js";
import Logo from "../component/Logo.js";
import Profile from "../component/Profile.js";
import ProfileMenu from "../component/ProfileMenu.js";
function Header(props) {
    // console.log(props)
    return (
        <>
            <div className="header">
                <div>
                    <Logo></Logo>
                </div>
                <Navigation searchGroup ={props.searchGroup}></Navigation>
                <div>
                    <ProfileMenu isSignIn={props.isSignIn} signIn={props.signIn} signOut = {props.signOut}></ProfileMenu>
                </div>
            </div>
        </>
    );
}

export default Header;

// import logo from './logo.svg';
import React, { Component } from "react";
import Logo from "../component/Logo.js";
import ProfileMenu from "../component/ProfileMenu.js";
import DisplayGroupInfo from "../component/DisplayGroupInfo.js";
import DisplayUserInfo from "../component/DisplayUserInfo.js";
class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdmin: props.isAdmin,
            userInfo: props.userInfo,
            groupInfo: props.groupInfo,
        };
    }

    render() {
        return (
            <div className={"my-page"}>
                <div className={"headermenu"}>
                    <div className={"mainmenu"}>
                        <div className={"mainmenu-logo"}>
                            <Logo></Logo>
                        </div>
                        <div className={"mainmenu-profile"}>
                            <ProfileMenu
                                isSignIn={this.props.isSignIn}
                            ></ProfileMenu>
                        </div>
                    </div>
                    <div className={"welcome-message"}>
                        <div>환영합니다 this.props.userInfo.username님</div>
                    </div>
                </div>
                <div className={"middle-myInfo"}>
                    <DisplayUserInfo
                        userInfo={this.state.userInfo}
                        changeUserInfo={this.props.changeUserInfo}
                    ></DisplayUserInfo>
                    <DisplayGroupInfo
                        isAdmin={this.state.isAdmin}
                        groupInfo={this.state.groupInfo}
                        deleteGroup={this.props.deleteGroup}
                        exitGroup={this.props.exitGroup}
                    ></DisplayGroupInfo>
                </div>
            </div>
        );
    }
}

export default MyPage;

// import logo from './logo.svg';
import React, { Component } from "react";
import Logo from "../component/Logo.js";
import ProfileMenu from "../component/ProfileMenu.js";
import DisplayGroupInfo from "../component/DisplayGroupInfo.js";
import DisplayUserInfo from "../component/DisplayUserInfo.js";
import Header from "../component/Header.js";
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
                    <Header
                        className="gp-header-component"
                        signIn={this.props.signIn}
                        signOut={this.props.signOut}
                        searchGroup={this.props.searchGroup}
                        isSignIn={this.props.isSignIn}
                    ></Header>
                    <div className={"welcome-message"}>
                        <div>환영합니다 {this.props.userInfo.username}님</div>
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

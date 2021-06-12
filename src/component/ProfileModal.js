import React, { Redirect, Component } from "react";
import MyPage from "../pages/MyPage.js";
import axios from "axios";
import "./ProfileModal.css";

export default class ProfileModal extends Component {
    //로그인 상태 - 글로벌(혹은 상위) - isLogin
    //프로필 옵션 모달창 클릭상태 - 글로벌(혹은 상위) - isProfileModalOpen

    // local state
    constructor(props) {
        super(props);
        this.state = {
            isSignInModal: false,
            isSignUpModal: false,
        };
        this.clickSignOutHandler = this.clickSignOutHandler.bind(this);
        this.clickMypageHandler = this.clickMypageHandler.bind(this);
        this.openSignInModal = this.openSignInModal.bind(this);
        this.clickSignUpHandler = this.clickSignUpHandler.bind(this);
    }

    //methods
    clickSignOutHandler = () => {};
    clickMypageHandler = () => {};

    openSignInModal = () => {
        //isSignInModalOpen = true;
        //isProfileModalOpen = false;
        //SignIn Modal을 띄워줌
    };
    openSignUpModal = () => {
        //isSignInModalOpen = true;
        //isProfileModalOpen = false;
        //SignIn Modal을 띄워줌
    };

    clickSignUpHandler = () => {};
    render() {
        return (
            <>
                {this.props.isLogin ? (
                    <div
                        className="modal"
                        onClick={() => this.props.closeProfileModal()}
                    >
                        <div className="notLogin">
                            <div
                                className="signOutBtn"
                                onClick={() => this.clickSignOutHandler()}
                            >
                                <span>로그아웃</span>
                            </div>
                            <div
                                className="myPageBtn"
                                onClick={() => thisclickMypageHandler()}
                            >
                                <span>마이페이지</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className="modal"
                        onClick={() => {
                            props.setProfileModalOpen();
                        }}
                    >
                        <div className="login modal">
                            <div
                                className="signInBtn"
                                onClick={() => clickSignInHandler()}
                            >
                                <span>로그인</span>
                            </div>
                            <div
                                className="signUpBtn"
                                onClick={() => clickSignUpHandler()}
                            >
                                <span>시발년아</span>
                            </div>
                        </div>
                    </div>
                )}
                ;
            </>
        );
    }
}

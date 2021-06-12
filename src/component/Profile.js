import React, { Component } from "react";
import ProfileModal from "./ProfileModal"; // 프로필 클릭시 옵션 모달창

export default class Profile extends Component {
    //global state
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false, // global
            isProfileModalOpen: false, //local
        };
        this.setSignOut = this.setSignOut.bind(this);
        this.setSignIn = this.setSignIn.bind(this);
        this.closeProfileModal = this.closeProfileModal.bind(this);
        this.openProfileModal = this.openProfileModal.bind(this);
    }
    //임시로 만든 로그인 로그아웃 메서드
    setSignOut() {
        this.setState({
            isLogin: false,
        });
    }
    setSignIn() {
        this.setState({
            isLogin: true,
        });
    }

    //모달창 닫기
    closeProfileModal() {
        this.setState({
            isProfileModalOpen: false,
        });
    }
    //모달창 열기
    openProfileModal() {
        this.setState({
            isProfileModalOpen: true,
        });
    }

    render() {
        return (
            <>
                <div
                    className="profileBtn"
                    onClick={() => this.openProfileModal()}
                >
                    <div className="profileState">
                        <div>
                            <i className="">세줄이미지</i>
                            {this.state.isLogin ? (
                                <>
                                    <img
                                        className="loginProfile"
                                        src="#"
                                        alt="로그인"
                                    ></img>
                                </>
                            ) : (
                                <>
                                    <img
                                        className="notLoginProfile"
                                        src="#"
                                        alt="비로그인"
                                    ></img>
                                </>
                            )}
                        </div>
                    </div>

                    {
                        //프로필 모달창이 열렸는지 확인
                        this.state.isProfileModalOpen ? (
                            <ProfileModal
                                isLogin={this.state.isLogin}
                                closeProfileModal={this.closeProfileModal}
                                openProfileModal={this.openProfileModal}
                                setSignIn={this.setSignIn}
                            ></ProfileModal>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </>
        );
    }
}

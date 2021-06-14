import React, { useState } from "react";
import axios from "axios";
import SigninErrorBox from "./SignInErrorBox";

export default function SignIn() {
    
    signInModalExitHandler = () => {
        //isSignInModalOpen = false
    };
    return (
        <div className="signInModalContainer">
            <div className="signInModalWrapper">
                <div className="modalHeader">
                    <div
                        className="modalExitBtn"
                        onClick={() => signInModalExitHandler()}
                    >
                        <i>모달창 종료버튼 아이콘</i>
                    </div>
                    <span>로그인 또는 회원가입</span>
                    <div className="spacingRight"></div>
                </div>
                <form className="signInForm">
                    <span>이메일</span>
                    <input
                        type="text"
                        onChange={signInModalExitHandler()}
                    ></input>
                    <span>패스워드</span>
                    <input
                        type="text"
                        onChange={signInModalExitHandler()}
                    ></input>
                    <div className="nextBtn">로그인</div>
                    <SigninErrorBox
                        email={email}
                        password={password}
                    ></SigninErrorBox>
                </form>
                <div className="socialSignInWrapper">
                    <span>소셜 로그인</span>
                    <div
                        className="socialSignInBtn"
                        onClick={signInModalExitHandler()}
                    >
                        <i>소셜로그인 로고</i>
                        <span>OOO로 로그인하기</span>
                    </div>
                    <div
                        className="signUpBtn"
                        onClick={signInModalExitHandler()}
                    >
                        <span>혹시 아직 가입하지 않으셨나요?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

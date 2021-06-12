import React, { useState } from "react";
import axios from "axios";

export default function SignUp() {
    //local state
    let [userName, setUsername] = useState("");
    let [gender, setGender] = useState("");
    let [password, setPassword] = useState("");
    let [age, setAge] = useState("");
    let [preference, setPreference] = useState("");
    let [email, setEmail] = useState("");

    return (
        <div className="signUpModalContainer">
            <div className="signUpModalWrapper">
                <div className="modalHeader">
                    <i>뒤로가기</i>
                    <span>회원가입 하기</span>
                    <div className="spacingRight"></div>
                </div>
                <form
                    className="signUpForm"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div>
                        <span>유저 닉네임</span>
                        <input className="userName" onChange={()=>setUsername()}></input>
                    </div>
                    <div>
                        <span>성별</span>
                        <input className="gender"></input>
                    </div>
                    <div>
                        <span>비밀번호</span>
                        <input className="password"></input>
                    </div>
                    <span>나이</span>
                    <input className="age"></input>
                    <div>
                        <span>선호 운동</span>
                        <input className="preference"></input>
                    </div>
                    <div>
                        <span>이메일</span>
                        <input className="email"></input>
                    </div>
                    <div className="signUpBtnWrapper">
                        <div className="signUpBtn">
                            <span>가입하기</span>
                        </div>
                    </div>
                </form>

                <div className="socialSignInWrapper">
                    <span>소셜 로그인</span>
                    <div className="socialSignInBtn">
                        <i>{/* 소셜로그인 로고 */}</i>
                        <span>OOO로 로그인하기</span>
                    </div>
                    <div className="signUpBtn">
                        <span>혹시 아직 가입하지 않으셨나요?</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

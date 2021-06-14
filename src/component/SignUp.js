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
        <>
            <div className="modalContents">
                <img
                    className="signinIcon"
                    src="/Images/SignIn/signinIcon.png"
                />
                <input
                    name="email"
                    className="loginId"
                    type="text"
                    placeholder="이메일"
                />
                <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                />
                <div className="loginMid">
                    <input
                        name="나이"
                        className="loginPw"
                        type="text"
                        placeholder="나이"
                    />
                    <select
                        name="성별"
                        className="loginPw"
                        type="text"
                        placeholder="성별"
                    >
                        <option value="none">선택</option>
                        <option value="male">남자</option>
                        <option value="female">여자</option>
                    </select>
                </div>
                <div className="loginMid">
                    <input
                        name="나이"
                        className="loginPw"
                        type="text"
                        placeholder="나이"
                    />
                    <select
                        name="선호하는 운동"
                        className="loginPw"
                        type="text"
                        placeholder="선호하는 운동"
                    >
                        <option value="none">선택</option>
                        <option value="male">구기운동</option>
                        <option value="female">아쿠아 스포츠</option>
                        <option value="female">웨이트</option>
                        <option value="female">웨이트</option>
                        <option value="female">웨이트</option>
                        <option value="female">웨이트</option>
                        <option value="female">웨이트</option>

                    </select>
                </div>

                <button className="loginBtn"> 로그인 </button>
                <div className="socialBox">
                    <div className="kakao">
                        <img
                            className="kakaoLogo"
                            src="/Images/SignIn/kakao.png"
                        />
                        <div className="kakaoText">
                            카카오 계정으로 신규가입
                        </div>
                    </div>
                    <div className="facebook">
                        <img
                            className="facebookLogo"
                            src="/Images/SignIn/facebook.png"
                        />
                        <div className="facebookText">
                            페이스북 계정으로 신규가입
                        </div>
                    </div>
                </div>
                <div className="loginEnd">
                    <div className="loginLine">회원이 아니신가요? </div>
                    <div className="noUser">비회원 주문 조회</div>
                </div>
            </div>
        </>
    );
}

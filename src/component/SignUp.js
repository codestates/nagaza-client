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
                <img className="signinIcon" src="/img/nagaza-logo.png" />
                <input
                    name="email"
                    className="loginId"
                    type="text"
                    placeholder="이메일"
                />
                <div className="errMsg">
                    <div>에러메시지가 나오는 곳</div>
                </div>
                <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                />
                <div className="errMsg">
                    <div>에러메시지가 나오는 곳</div>
                </div>
                <div className="loginMid">
                    <div>위치</div>
                    <input
                        name="위치"
                        className="loginPw"
                        type="text"
                        placeholder="위치"
                    />
                    <div>성별</div>
                    <select
                        name="성별"
                        className="loginPw"
                        type="text"
                        placeholder="성별"
                    >
                        <option value="none" disabled>
                            성별
                        </option>
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
                        <option value="none" disabled>
                            선호 운동
                        </option>
                        <option value="ballSports">구기운동</option>
                        <option value="aquaSports">아쿠아스포츠</option>
                        <option value="running">러닝</option>
                        <option value="weight">웨이트</option>
                        <option value="yoga">요가</option>
                        <option value="hiking">하이킹</option>
                        <option value="climbing">클라이밍</option>
                    </select>
                </div>

                <button className="loginBtn"> 로그인 </button>
                <div className="socialBox">
                    <div className="kakao">
                        <img className="kakaoLogo" src="img/kakao-logo.png" />
                        <div className="kakaoText">
                            카카오 계정으로 신규가입
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

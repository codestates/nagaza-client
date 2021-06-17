import React, { useState } from "react";
import axios from "axios";
require("dotenv").config();

const KAKAO_CLIENT_ID = process.env.KAKAO_CLIENT_ID;
const KAKAO_CLIENT_SECRET = process.env.KAKAO_CLIENT_SECRET;
const KAKAO_REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
const NAGAZA_SERVER_API = process.env.NAGAZA_SERVER_API;

export default function SignUp() {
    //local state
    const [userId, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isValidId, setValidId] = useState(false);
    const [isValidPassword, setValidPassword] = useState(false);
    const [isValidsub, setValidsub] = useState(false);

    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [preference, setPreference] = useState("");

    const isValidationId = (email) => {
        let regExp =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        setValidId(regExp.test(email));
    };

    const isValidationPassword = (password) => {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
        setValidPassword(regExp.test(password));
    };

    const isValidationSubinput = () => {
        if (!location && !gender && !age && !preference) {
            setValidsub(false);
        } else {
            setValidsub(!location || !gender || !age || !preference);
        }
    };

    //서버에 회원가입 요청
    const signupRequestHandler = () => {
        if (isValidId && isValidPassword && isValidsub) {
            //다맞으면 리퀘스트 핸들러
        } else {
            //donothing
        }
    };
    const signupRequest = async () => {
        await axios
            .post(
                `${NAGAZA_SERVER_API}/user/signup`,
                {
                    email: userId,
                    password: password,
                    location: location,
                    gender: gender,
                    age: age,
                    preference: preference,
                },
                {
                    "Content-Type": "appliaction/json",
                    withCredentials: true,
                }
            )
            .catch((e) => console.log(e))
            .then((res) => {
                console.log("userInfo :", res.data.userInfo);
                console.log("userInfo :", res.data.groupInfo);
                props.signIn(res.data.userInfo, res.data.groupInfo);
            });
    };

    return (
        <>
            <div className="modalContents">
                <div className="modalTitle">
                    <img className="signinIcon" src="/img/nagaza-logo.png" />
                    <div>NAGAZA 회원가입</div>
                </div>
                <input
                    name="email"
                    className="loginId"
                    type="text"
                    placeholder="이메일"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        isValidationId(e.target.value);
                    }}
                />
                <div className="errMsg">
                    <div
                        className={
                            userId
                                ? isValidId
                                    ? "ok hidden"
                                    : "ok"
                                : "ok hidden"
                        }
                    >
                        <span>이메일 입력이 올바르지 않습니다.</span>
                    </div>
                </div>
                <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={(e) => {
                        setPassword(e.target.value);
                        isValidationPassword(e.target.value);
                    }}
                />
                <div className="errMsg">
                    <div
                        className={
                            password
                                ? isValidPassword
                                    ? "ok hidden"
                                    : "ok"
                                : "ok hidden"
                        }
                    >
                        <span>
                            비밀번호 입력이 올바르지 않습니다. (8자이상 10자이하
                            영문숫자조합)
                        </span>
                    </div>
                </div>
                <div className="loginMid">
                    <span>위치</span>
                    <input
                        name="위치"
                        className="subInput"
                        type="text"
                        placeholder="위치"
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                    />
                    <span>성별</span>
                    <select
                        name="성별"
                        className="subInput"
                        type="text"
                        placeholder="성별"
                        onChange={(e) => {
                            setGender(e.target.value);
                        }}
                    >
                        <option value="none" disabled>
                            성별
                        </option>
                        <option value="male">남자</option>
                        <option value="female">여자</option>
                    </select>
                </div>

                <div className="loginMid">
                    <span>나이</span>
                    <input
                        name="나이"
                        className="subInput"
                        type="text"
                        placeholder="나이"
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                    />

                    <span>선호</span>
                    <select
                        name="선호하는 운동"
                        className="subInput"
                        type="text"
                        placeholder="선호하는 운동"
                        onChange={(e) => {
                            setPreference(e.target.value);
                        }}
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
                <div className="errMsg">
                    <div className={isValidSub ? "ok" : "ok hidden"}>
                        <span>모든 항목을 입력해주세요.</span>
                    </div>
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

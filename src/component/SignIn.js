import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./SignIn.css";
require("dotenv").config();

export default function SignIn(props) {
    // 로컬 상태,입력 반영
    const [userId, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isValidId, setValidId] = useState(false);
    const [isValidPassword, setValidPassword] = useState(false);
    const [authCode, setAuthcode] = useState("");

    // 상위 상태
    const { closeModal, setModalHeader, openModal } = props;

    const NAGAZA_SERVER_API = process.env.REACT_APP_NAGAZA_SERVER_API;
    const REACT_APP_KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
    const REACT_APP_KAKAO_CLIENT_SECRET =
        process.env.REACT_APP_KAKAO_CLIENT_SECRET;
    const REACT_APP_KAKAO_REDIRECT_URI =
        process.env.REACT_APP_KAKAO_REDIRECT_URI;

    //redirection tool
    const history = useHistory();

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            signinHandler();
            closeModal();
        }
    };

    const isValidationId = (email) => {
        let regExp =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        setValidId(regExp.test(email));
        console.log(isValidId);
    };

    const isValidationPassword = (password) => {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
        setValidPassword(regExp.test(password));
        console.log(isValidPassword);
    };

    //카카오 Oauth 인증 신청
    const kakaoOauth = () => {
        window.location.assign(
            `https://kauth.kakao.com/oauth/authorize?client_id=${REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`
        );
        //landingpage.js에서 계속
    };

    const signinHandler = () => {
        if (isValidId && isValidPassword) {
            signinRequest();
        } else {
        }
    };

    //서버에 로그인 요청
    const signinRequest = async () => {
        await axios
            .post(
                `${NAGAZA_SERVER_API}/user/signin`,
                {
                    email: userId,
                    password: password,
                },
                {
                    "Content-Type": "appliaction/json",
                    withCredentials: true,
                }
            )
            .catch((e) => console.log(e))
            .then((res) => {
                if (res) {
                    props.signIn(res.data.userInfo, res.data.groupInfo);
                    closeModal();
                } else {
                    setModalHeader("유효하지않음");
                    openModal();
                }
            });
    };

    const changeToSignUp = () => {
        closeModal();
        setModalHeader("회원가입");
        openModal();
    };

    return (
        <>
            <div className="modalContents">
                <div className="modalTitle">
                    <img className="signinIcon" src="/img/nagaza-logo.png" />
                    <div>NAGAZA 로그인</div>
                </div>
                <input
                    name="email"
                    className="loginId"
                    type="email"
                    placeholder="이메일"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        isValidationId(e.target.value);
                    }}
                />
                <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={(e) => {
                        setPassword(e.target.value);
                        isValidationPassword(e.target.value);
                    }}
                    onKeyPress={(e) => {
                        handleKeyPress(e);
                    }}
                />
                {/* <div className="loginMid">
                    <label className="autoLogin">
                        {" "}
                        <input type="checkbox" id="hint" /> 로그인 유지하기
                    </label>
                    <div className="autoLogin">아이디/비밀번호 찾기</div>
                </div> */}
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
                            영문숫자 조합)
                        </span>
                    </div>
                </div>
                <button
                    className="loginBtn"
                    onClick={() => {
                        signinHandler();
                    }}
                >
                    {" "}
                    로그인{" "}
                </button>

                <div className="socialBox">
                    <div className="kakao">
                        <img className="kakaoLogo" src="/img/kakao-logo.png" />
                        <div
                            className="kakaoText"
                            onClick={() => {
                                kakaoOauth();
                            }}
                        >
                            카카오 계정으로 신규가입
                        </div>
                    </div>
                </div>
                <div className="loginEnd">
                    <div
                        className="loginLine"
                        onClick={() => {
                            changeToSignUp();
                        }}
                    >
                        아직 나가자 회원이 아니신가요?
                    </div>
                </div>
            </div>
        </>
    );
}

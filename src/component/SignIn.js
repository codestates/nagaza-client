import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./SignIn.css";
export default function SignIn(props) {
    // 로컬 상태,입력 반영
    const [userId, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isValidId, setValidId] = useState(false);
    const [isValidPassword, setValidPassword] = useState(false);
    // 상위 상태
    const { isOpen, openModal, closeModal, header, setHeader } = props;

    //redirection tool
    const history = useHistory();

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
        const REST_API_KEY = `cb855df8892be53bdaf2507eeeac3138`;
        const REDIRECT_URI = `http://localhost:3000/landingpage`;
        window.location.assign(
            `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
        );
        const url = new URL(window.location.href);
        const authorizationCode = url.searchParams.get("code");
        if (authorizationCode) {
            getAccessToken(authorizationCode);
        }
    };

    const getAccessToken = async (authCode) => {
        await axios({
            method: "POST",
            url: `${process.env.SERVER_API_URI}/SocialSigning`,
            data: {
                authorizationCode: authCode,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                //APP에 accessCode를 저장함.
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //서버에 로그인 요청
    const signinHandler = async () => {
        await axios
            .post(
                `https://localhost:4000/user/signin`,
                {
                    email: userId,
                    password: password,
                },
                {
                    "Content-Type": "appliaction/json",
                    withCredentials: true,
                }
            )
            .then((res) => {
                userdataSave(res.userInfo, res.groupInfo);
                console.log(res);
            });

        /* isLogin에 반영
                 history.push("/landingpage");
                 */
    };

    // SignUp으로 리다이렉션
    const signinTosignup = () => {
        //SignUp 창을 끄고,
        //SignIn 창으로 바꿈
    };
    return (
        <>
            <div className="modalContents">
                <img className="signinIcon" src="/img/nagaza-logo.png" />
                <input
                    name="email"
                    className="loginId"
                    type="email"
                    placeholder="아이디"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        isValidationId(e.target.value);
                        console.log(userId);
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
                        console.log(password);
                    }}
                />
                <div className="loginMid">
                    <label className="autoLogin">
                        {" "}
                        <input type="checkbox" id="hint" /> 로그인 유지하기
                    </label>
                    <div className="autoLogin">아이디/비밀번호 찾기</div>
                </div>
                <div className="errMsg">
                    <div>
                        <span
                            className={
                                userId
                                    ? isValidId
                                        ? "ok hidden"
                                        : "ok"
                                    : "ok hidden"
                            }
                        >
                            이메일 입력이 올바르지 않습니다.
                        </span>
                    </div>
                    <div>
                        <span
                            className={
                                password
                                    ? isValidPassword
                                        ? "ok hidden"
                                        : "ok"
                                    : "ok hidden"
                            }
                        >
                            비밀번호 입력이 올바르지 않습니다. 8자이상 영문숫자
                            조합으로 입력해주세요.
                        </span>
                    </div>
                </div>
                <button
                    className="loginBtn"
                    onClick={() => {
                        props.signIn();
                        props.closeModal();
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
                    <div className="loginLine">
                        아직 나가자 회원이 아니신가요?
                    </div>
                </div>
            </div>
        </>
    );
}

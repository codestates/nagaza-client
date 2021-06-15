import React from "react";
import axios from "axios";
import "./SignIn.css";
export default function SignIn() {
    // const kakaoLogin = () => {
    //     Kakao.init("8e9d95ae5c32cab6e230605a3d201368");
    //     Kakao.Auth.login({
    //         success: function (response) {
    //             Kakao.API.request({
    //                 url: "/v2/user/me",
    //                 success: function (response) {
    //                     console.log(Kakao.Auth);
    //                     console.log(response);
    //                 },
    //                 fail: function (error) {
    //                     console.log(error);
    //                 },
    //             });
    //         },
    //         fail: function (error) {
    //             console.log(error);
    //         },
    //     });
    // };
    // const kakaoLogout = () => {
    //     if (Kakao.Auth.getAccessToken()) {
    //         Kakao.API.request({
    //             url: "/v1/user/unlink",
    //             success: function (response) {
    //                 console.log(Kakao.Auth);
    //                 console.log(response);
    //             },
    //             fail: function (error) {
    //                 console.log(error);
    //             },
    //         });
    //         Kakao.Auth.setAccessToken(undefined);
    //     }
    // };
    return (
        ////만약 isopen(this.state.isModalOpen)이 true일때 코드를 실행 false면  null
        /// <div onClick={close}> 로그인창 말고 회색 바탕을 누를시 모달이 꺼지게 만듬
        ///<span className="close" onClick={close}>&times;</span> x버튼 누를시 꺼짐
        ////<div className="modalContents" onClick={isOpen}> 로그인 화면은 버튼 클릭해서 들어오면
        /// true인 상태로 있어서 화면이 안꺼진다.

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
                    placeholder="아이디"
                />
                <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                />
                <div className="loginMid">
                    <label className="autoLogin">
                        {" "}
                        <input type="checkbox" id="hint" /> 로그인 유지하기
                    </label>
                    <div className="autoLogin">아이디/비밀번호 찾기</div>
                </div>

                <button className="loginBtn"> 로그인 </button>
                <div className="socialBox">
                    <div className="kakao">
                        <img className="kakaoLogo" src="/img/kakao-logo.png" />
                        <div
                            className="kakaoText"
                            onClick={() => {
                                kakaoLogin();
                            }}
                        >
                            카카오 계정으로 신규가입
                        </div>
                    </div>

                    <div className="facebook">
                        <img className="facebookLogo" src="/img/facebook.png" />
                        <div className="facebookText">
                            페이스북 계정으로 신규가입
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

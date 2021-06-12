import React from "react";
import axios from "axios";
import SigninErrorBox from "./SignInErrorBox"

export default function SignIn() {
  state = {
    //이메일 입력상태 - 로컬
    //모달창 클릭상태 - 글로벌(혹은 상위)
  };
  return (
    <div className="signInModalContainer">
      <div className="signInModalWrapper">
        <div className="modalHeader">
          <i>{/*모달창 종료버튼*/}</i>
          <span>로그인 또는 회원가입</span>
          <div className="spacingRight"></div>
        </div>
        <form className="signInForm">
          <span>이메일</span>
          <input type="text" ></input>
          <span>패스워드</span>
          <input type="text" ></input>
          <div className="nextBtn">로그인</div>
          <SigninErrorBox email={email} password={password}></SigninErrorBox>
        </form>
        <div className="socialSignInWrapper">
          <span>소셜 로그인</span>
          <div className="socialSignInBtn" >
            <i>{/* 소셜로그인 로고 */}</i>
            <span>OOO로 로그인하기</span>
          </div>
          <div className="signUpBtn" >
            <span>혹시 아직 가입하지 않으셨나요?</span>
          </div>
        </div>
      </div>
    </div>
  );
}

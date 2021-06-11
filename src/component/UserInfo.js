import React from "react";
import axios from "axios";

export default function UserInfo(props) {
  state = {
    
    isChangeMode : false,    //변경모드에 대한 상태 - 로컬
    userInfo: props.userInfo,//유저정보 변경상태 - 글로벌
  };
  
  return (
      <>
    <div className="userInfoWrapper">
      { isChangeMode ? 
      (<div>
      <div>{state.userInfo.userName}</div>
      <div>{state.userInfo.createdAt}</div>
    <div className="userInfoDisplay">
      <div>{state.userInfo.gender}</div>
      <div>{state.userInfo.preference}</div>
      <div>{state.userInfo.age}</div>
      <div>{state.userInfo.email}</div>
    </div>
      <div className="userInfoChangeBtn" onClick={/*회원정보변경시, 상태변경*/}>
          <span>회원정보 변경</span>
      </div>
      </div>) : (
      <div>
      <div>{state.userInfo.userName}님 반갑습니다.</div>
      <div>회원 가입 : {state.userInfo.createdAt}</div>

      <input>성별 {state.userInfo.gender}</input>
      <input>선호운동 {state.userInfo.preference}</input>
      <input>나이 {state.userInfo.age}</input>
      <input>이메일 {state.userInfo.email}</input>
      <div className="changeApplyBtn" onClick={/*회원정보 저장요청 메서드*/}>
        <span>회원정보 저장</span>
      </div>
      </div>
          
      )
     }
    </div>
    </>
  );
}

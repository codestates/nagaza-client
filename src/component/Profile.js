import React from "react";

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    isLogin: false, //로그인 정보 필요
    isClose: false, //모달창 오픈 이벤트 상태필요
    userName: null, //유저정보 : OOO님 (필요한지 안필요한지?)
  };
  //onclick 이벤트 함수
  render() {
    
    const { userName } = this.props;
    const { isLogin } = this.state;
    const { isOpen } = this.state;

    return (
      <>
        <div className="profileBtn">
          <div className="profileState">
            {isLogin ? (
              <div>
                <i className="">세줄이미지</i>
                <img className="loginProfile" src="#"></img>
              </div>
            ) : (
              <div>
                <i className="">세줄이미지</i>
                <img className="notLoginProfile" src="#"></img>
              </div>
            )}
          </div>
          {isOpen ? (
            <div>
              <div className="signInBtn" onClick={/*로그인 요청 메서드*/}>
                <span>로그인</span>
              </div>
              <div className="signUpBtn" onClick={/*회원가입 요청 메서드*/}>
                <span>회원가입</span>
              </div>
            </div>
          ) : (
            <div>
              <div className="myPageBtn" onClick={/*마이페이지 리디렉션 메서드*/}>
                <span>마이페이지</span>
              </div>
              <div className="signOutBtn" onClick={/*로그아웃 요청 메서드*/}>
                <span>로그아웃</span>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

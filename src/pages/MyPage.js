// import logo from './logo.svg';
import React, { Component } from "react";
import GetGroupInfo from '../component/GetGroupInfo.js';
import UpdateGroup from '../component/UpdateGroup.js';
import GetUserInfo from '../component/GetUserInfo.js';


class MyPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      admin: props.admin,
      isGroupOn : false,
    }
  }



  render() {
    return (
      <div className={'my-page'}>
        <div className={'upper-nav'}>
          <div className={'logo-in-my'}>Logo자리</div>
          <div className={'welcome-in-my'}>어서오세요 {this.state.admin}님</div>
          <div className={'signout-in-my'}>logout자리</div>
        </div>
        <div className={'middle-myInfo'}>
          <div className={'user-info'}></div>
          <div className={'group-state'}></div>
        </div>
      </div>
    );
  }
}

export default MyPage;

import React, { Component } from "react";
import GroupPage from "./pages/GroupPage";
import LandingPage from "./pages/LandingPage";
import MyPage from "./pages/MyPage";
// import logo from "./logo.svg";
import data from "./mockdata/groupData.json"

import axios from "axios";

import "./App.css";
import {
  Switch,
  BrowserRouter,
  Route,
  Redirect,
  withRouter,
  useHistory
} from "react-router-dom";

class App extends Component {

  state = {
    isSignIn: false,
    userInfo: [],
    groupInfo: [],
    searchGroupData: [],
    isAdmin: false,
    userAttendGroup: [],
    userAdminGroup: []
  };
  constructor(props) {
    super(props);
    this.searchGroup = this.searchGroup.bind(this)
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }
  componentDidMount() {
    axios
      .get("http://ec2-52-79-253-209.ap-northeast-2.compute.amazonaws.com", {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
        this.setState({
          isConnected: true,
          data: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  signIn = () => {
    this.setState({
      isSignIn: true,
      userInfo: [],
      groupInfo: []
    })
  }
  signOut = () => {
    this.setState({
      isSignIn: false,
      userInfo: [],
      groupInfo: []
    })
  }

  searchGroup = (searchInfo) => {
    //그룹 검색
    this.setState({
      searchGroupData: data.data
    }) // 서버에서 searchInfo토대로 그룹 검색
    // console.log(this.state.searchGroupData)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/Landingpage" render={() => <LandingPage signIn={this.signIn} signOut={this.signOut} searchGroup={this.searchGroup} isSignIn={this.state.isSignIn} />} />
            <Route path="/Grouppage" render={() => <GroupPage searchGroup={this.searchGroup} searchGroupData={this.state.searchGroupData} />} />
            <Route path="/Mypage" render={() => <MyPage userInfo={this.state.userInfo} groupInfo={this.state.groupInfo} isAdmin={this.state.isAdmin} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

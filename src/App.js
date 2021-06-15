import React, { Component } from "react";
import GroupPage from "./pages/GroupPage";
import LandingPage from "./pages/LandingPage";
import MyPage from "./pages/MyPage";
// import logo from "./logo.svg";
import data from "./mockdata/groupData.json";

import axios from "axios";

import "./App.css";
import {
    Switch,
    BrowserRouter,
    Route,
    Redirect,
    withRouter,
    useHistory,
} from "react-router-dom";

class App extends Component {
    state = {
        isSignIn: true,
        userInfo: [],
        groupInfo: [],
        searchGroupData: [],
        isAdmin: true,
    };
    constructor(props) {
        super(props);
        this.joinGroup = this.joinGroup.bind(this);
        this.searchGroup = this.searchGroup.bind(this);
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.changeUserInfo = this.changeUserInfo.bind(this);
        this.deleteGroup = this.deleteGroup.bind(this);
        this.exitGroup = this.exitGroup.bind(this);
    }
    componentDidMount() {
        axios
            .get(
                "http://ec2-52-79-253-209.ap-northeast-2.compute.amazonaws.com",
                {
                    withCredentials: true,
                }
            )
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
            groupInfo: [],
            isAdmin: true
        }); // '/signIn'에 post로 로그인 요청 유저의 정보와 그룹정보, 어드민정보를 받아와 setState
        // 변경해야될 state : isSignIn : true, userInfo, groupInfo, isAdmin
    };
    signOut = () => {
        this.setState({
            isSignIn: false,
            userInfo: [],
            groupInfo: [],
            isAdmin: false
        }); // '/signout'에 로그가웃 요청
        // 변경해야될 state : isSingIn : false , userInfo : [], groupInfo : [], isAdmin ; false
    };

    searchGroup = (searchInfo) => {
        //그룹 검색

        //searchInfo는 카테고리, 시작시간, 인원수로 구성된 배열
        //해당 배열을 바탕으로 get으로 얻어온 모든 그룹을 필터링해서 원하는 그룹만 남겨 setState
        this.setState({
            searchGroupData: data.data,
        }); // 서버에서 searchInfo토대로 그룹 검색
        // console.log(this.state.searchGroupData)
    };

    changeUserInfo = (changeUserInfo) => {
        this.setState({
            userInfo: changeUserInfo,
        });
    };

    deleteGroup = () => {
        this.setState({
            isAdmin: false,
            groupInfo: [],
        });
    };

    exitGroup = () => {
        this.setState({
            groupInfo: [],
        });
    };

    joinGroup = (groupInfo) => {
        this.setState({
            groupInfo: [groupInfo],
        });
    };

    //유저정보변경, 그룹삭제. 그룹탈퇴ㅏ. 그룹참가 등의 메소드는 업데이트 엔드포인트로 ㅗpost요청한번
    // 그뒤 userinfo를 받아와 정보를 새로 리셋한다.

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/Landingpage"
                            render={() => (
                                <LandingPage
                                    signIn={this.signIn}
                                    signOut={this.signOut}
                                    searchGroup={this.searchGroup}
                                    isSignIn={this.state.isSignIn}
                                />
                            )}
                        />
                        <Route
                            path="/Grouppage"
                            render={() => (
                                <GroupPage
                                    groupInfo={this.state.groupInfo}
                                    joinGroup={this.joinGroup}
                                    searchGroup={this.searchGroup}
                                    searchGroupData={this.state.searchGroupData}
                                />
                            )}
                        />
                        <Route
                            path="/Mypage"
                            render={() => (
                                <MyPage
                                    changeUserInfo={this.changeUserInfo}
                                    deleteGroup={this.deleteGroup}
                                    exitGroup={this.exitGroup}
                                    isSignIn={this.state.isSignIn}
                                    userInfo={this.state.userInfo}
                                    groupInfo={this.state.groupInfo}
                                    isAdmin={this.state.isAdmin}
                                />
                            )}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import GroupPage from "./pages/GroupPage";
import LandingPage from "./pages/LandingPage";
import MyPage from "./pages/MyPage";
import KaKaoOauth from "./pages/KakaoOauth";
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
        isSignIn: false,
        userInfo: [], //유저의 정보
        groupInfo: [], //유저가 속한 그룹의 정보
        searchGroupData: [],
        isAdmin: true,
        transCategoryId: [
            "ball game",
            "aqua sports",
            "weight training",
            "running",
            "yoga",
            "hiking",
            "cycling",
            "climbing",
        ],
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
        this.createGroupHandle = this.createGroupHandle.bind(this);
        this.userdataSave = this.userdataSave.bind(this);
    }

    signIn = (userInfo, groupInfo) => {
        // console.log("signIn");
        let isAdmin = userInfo.id === groupInfo.admin ? true : false
        const categoryNumb = Number(groupInfo.category_id) - 1
        // console.log(categoryNumb)
        groupInfo.category_id = this.state.transCategoryId[categoryNumb] 
        this.setState({
            isSignIn: true,
            userInfo: userInfo,
            groupInfo: groupInfo,
            isAdmin : isAdmin
        });


    };

    signOut = () => {
        console.log("signOut");
        this.setState({
            isSignIn: false,
            userInfo: [],
            groupInfo: [],
            isAdmin: false,
        }); // '/signout'에 로그가웃 요청
        // 변경해야될 state : isSingIn : false , userInfo : [], groupInfo : [], isAdmin ; false
    };

    searchGroup = async (searchInfo) => {
        const categoryText = searchInfo.category;
        searchInfo.category = this.state.transCategoryId.indexOf(searchInfo.category) + 1
        if (searchInfo.category === '') {
            alert('운동을 골라주세요')
        }
        else {
            await axios.get('https://localhost:4000/group/groupinfo',
                searchInfo,
                {
                    'Content-Type': 'application/json',
                    withCredentials: true
                })
                .then(res => {
                    const groupInfo = res.data.groupInfo
                    groupInfo.map((el) => {
                        const categoryIdOnServer = parseInt(el.category_id) - 1 
                        el.category_id = this.state.transCategoryId[categoryIdOnServer]
                    })
                    this.setState({
                        searchGroupData: groupInfo
                    })
                })
        }
    };

    changeUserInfo = async (changeUserInfo) => {
        await axios.post('https://127.0.0.1:4000/user/updateuserinfo', {
            userId: this.state.userInfo.id,
            newUserName: changeUserInfo.username,
            newEmail: changeUserInfo.email,
            newAge: changeUserInfo.age,
            newPreference: this.state.transCategoryId.indexOf(changeUserInfo.category) + 1
        }, {
            'Content-Type': 'application/json',
            withCredentials: true
        })

        await axios.get('https:127.0.0.1:4000/user/userinfo', {
            userId : this.state.userInfo.id
        },{
            'Content-Type': 'application/json',
            withCredentials: true
        })
        .catch(e => console.log(e))
        .then(res => console.log(res))



        // await this.setState({
        //     userInfo: changeUserInfo,
        // });
        console.log(this.state.userInfo);
    };

    deleteGroup = async () => {
        // await axios.post('https://ec2-52-79-253-209.ap-northeast-2.compute.amazonaws.com/group/deletegroup', {
        //     groupId: this.state.groupInfo.groupId,
        //     userId: this.state.userInfo.userId
        // }, {
        //     'Content-Type': 'application/json',
        //     withCredentials: true
        // })
        //     .catch(e => console.log(e))
        //     .then(res => console.log(res))
        //     .then(res => {
        //         this.setState({
        //             isAdmin: false,
        //             groupInfo: res
        //         })
        //     })
        this.setState({
            isAdmin: false,
            groupInfo: [],
        });
    };

    exitGroup = async () => {
        // await axios.post('https://ec2-52-79-253-209.ap-northeast-2.compute.amazonaws.com/group/unjoingroup', {
        //     groupId: this.state.groupInfo.groupId,
        //     userId: this.state.userInfo.userId
        // }, {
        //     'Content-Type': 'application/json',
        //     withCredentials: true
        // })
        //     .catch(e => console.log(e))
        //     .then(res => console.log(res))
        //     .then(res => {
        //         this.setState({
        //             groupInfo: res
        //         })
        //     })
        this.setState({
            groupInfo: [],
        });
    };

    joinGroup = async (groupId) => {
        // await axios.post('https://127.0.0.1/group/joingroup', {
        //     groupId: groupId,
        //     userId: 'this.state.userInfo.userId'
        // }, {
        //     'Content-Type': 'application/json',
        //     withCredentials: true
        // })
        //     .catch(e => console.log(e))
        //     .then(res => console.log(res))
        //     .then(res => {
        //         this.setState({
        //             groupInfo : res.groupInfo
        //         })
        //     })
        // console.log(1);
        this.setState({
            groupInfo: [],
        });
    };

    createGroupHandle = async (createInfo) => {
        const categoryText = createInfo.categoryId;
        console.log(createInfo);
        // await axios
        //     .post(
        //         "https://ec2-52-79-253-209.ap-northeast-2.compute.amazonaws.com/group/creategroup",
        //         createInfo,
        //         {
        //             "Content-Type": "application/json",
        //             withCredentials: true,
        //         }
        //     )
        //     .catch((e) => console.log(e))
        //     .then((res) => console.log(res.message));
    };

    //유저정보변경, 그룹삭제. 그룹탈퇴ㅏ. 그룹참가 등의 메소드는 업데이트 엔드포인트로 ㅗpost요청한번
    // 그뒤 userinfo를 받아와 정보를 새로 리셋한다.
    userdataSave = (userInfo, groupInfo) => {
        this.setState({
            userInfo: [], //유저의 정보
            groupInfo: [], //유저가 속한 그룹의 정보
        });
        console.log(this.state.userInfo)
    };

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
                                    userdataSave={this.userdataSave}
                                />
                            )}
                        />
                        <Route
                            path="/Grouppage"
                            render={() =>
                                this.state.isSignIn ? (
                                    <GroupPage
                                        className="GroupPage"
                                        categoryId={this.state.transCategoryId}
                                        // userLocation={this.state.userInfo.location}
                                        createGroupHandle={
                                            this.createGroupHandle
                                        }
                                        groupInfo={this.state.groupInfo}
                                        joinGroup={this.joinGroup}
                                        transCategoryId = {this.state.transCategoryId}
                                        searchGroup={this.searchGroup}
                                        searchGroupData={
                                            this.state.searchGroupData
                                        }
                                        signIn={this.signIn}
                                        signOut={this.signOut}
                                        isSignIn={this.state.isSignIn}
                                    />
                                ) : (
                                    <Redirect to="/landingpage"></Redirect>
                                )
                            }
                        />
                        <Route
                            path="/Mypage"
                            render={() =>
                                this.state.isSignIn ? (
                                    <MyPage
                                        className="MyPage"
                                        changeUserInfo={this.changeUserInfo}
                                        deleteGroup={this.deleteGroup}
                                        exitGroup={this.exitGroup}
                                        isSignIn={this.state.isSignIn}
                                        userInfo={this.state.userInfo}
                                        groupInfo={this.state.groupInfo}
                                        isAdmin={this.state.isAdmin}
                                        signIn={this.signIn}
                                        signOut={this.signOut}
                                        searchGroup={this.searchGroup}
                                        isSignIn={this.state.isSignIn}
                                    />
                                ) : (
                                    <Redirect to="/landingPage"></Redirect>
                                )
                            }
                        />
                        <Route
                            path="/KakaoOuath"
                            render={() => <KaKaoOauth />}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

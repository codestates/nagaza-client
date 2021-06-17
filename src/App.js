import React, { Component } from "react";
import GroupPage from "./pages/GroupPage";
import LandingPage from "./pages/LandingPage";
import MyPage from "./pages/MyPage";

// import logo from "./logo.svg";
import data from "./mockdata/groupData.json";
import axios from "axios";
const qs = require("querystring");
require("dotenv").config();

const NAGAZA_SERVER_API = process.env.REACT_APP_NAGAZA_SERVER_API;

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
        isAdmin: false,
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
        accessToken: "",
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
        this.findAddress = this.findAddress.bind(this);
    }

    signIn = (userInfo, groupInfo) => {
        // console.log(userInfo, groupInfo)
        if (groupInfo !== null) {
            const categoryNumb = Number(groupInfo.category_id) - 1
            groupInfo.category_id = this.state.transCategoryId[categoryNumb]
            let isAdmin = userInfo.id === groupInfo.admin ? true : false
            this.setState({
                isSignIn: true,
                userInfo: userInfo,
                groupInfo: groupInfo,
                isAdmin: isAdmin
            });
        }
        else {
            this.setState({
                isSignIn: true,
                userInfo: userInfo,
                groupInfo: [],
                isAdmin: false

            })
            // console.log(this.state.groupInfo)
        }
    };

    componentDidMount() {

        console.log(this.state.groupInfo)
    }

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
        searchInfo.category =
            this.state.transCategoryId.indexOf(searchInfo.category) + 1;
        if (searchInfo.category === "") {
            alert("운동을 골라주세요");
        } else {
            await axios
                .get(`https://127.0.0.1:4000/group/groupinfo`, searchInfo, {
                    "Content-Type": "application/json",
                    withCredentials: true,
                })
                .then((res) => {
                    const groupInfo = res.data.groupInfo;
                    groupInfo.map((el) => {
                        const categoryIdOnServer = parseInt(el.category_id) - 1;
                        el.category_id =
                            this.state.transCategoryId[categoryIdOnServer];
                    });
                    this.setState({
                        searchGroupData: groupInfo,
                    });
                });
        }
    };

    changeUserInfo = async (changeUserInfo) => {
        console.log(changeUserInfo)
        console.log(this.state.transCategoryId.indexOf(changeUserInfo.category) + 1)
        console.log(this.state.userInfo)
        await axios.post(
            `https://127.0.0.1:4000/user/updateuserinfo`,
            {
                userId: this.state.userInfo.id,
                newUserName: changeUserInfo.username,
                newAge: changeUserInfo.age,
                newPreference: this.state.transCategoryId.indexOf(changeUserInfo.category) + 1
            },
            {
                "Content-Type": "application/json",
                withCredentials: true,
            }
        )
        .then(res => {
            if(res.status === 200){
                this.setState({
                    userInfo : {
                        ...this.state.userInfo,
                        age : changeUserInfo.age,
                        username : changeUserInfo.username,
                        category : changeUserInfo.category
                    }
                })
            }
        });
    };

    deleteGroup = async () => {
        await axios.post(`https://127.0.0.1:4000/group/deletegroup`, {
            groupId: this.state.groupInfo.id,
            userId: this.state.userInfo.id
        }, {
            'Content-Type': 'application/json',
            withCredentials: true
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    this.setState({
                        isAdmin: false,
                        groupInfo: [],
                    });
                }
            })


    };

    exitGroup = async () => {
        await axios.post(`https://127.0.0.1:4000/group/unjoingroup`, {
            groupId: this.state.groupInfo.id,
            userId: this.state.userInfo.id
        }, {
            'Content-Type': 'application/json',
            withCredentials: true
        })
            .catch(e => console.log(e))
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    this.setState({
                        groupInfo: [],
                        isAdmin: false
                    })
                }
            })
    };

    joinGroup = async (groupId) => {
        await axios.post(`https://127.0.0.1:4000/group/joingroup`, {
            groupId: groupId,
            userId: this.state.userInfo.id
        }, {
            'Content-Type': 'application/json',
            withCredentials: true
        })
            .then(res => {
                let newGroupInfo = res.data.groupInfo
                newGroupInfo.id = res.data.groupId.group_id 
                this.setState({
                    groupInfo : newGroupInfo,
                    isAdmin : false
                })
            })
    };
    findAddress = async (query, callback) => {
        await axios({
            method: "GET",
            url: `https://dapi.kakao.com/v2/local/search/keyword.json?query=${query}&analyze_type=similar&page=1&size=10`,
            headers: {
                Authorization: "KakaoAK cb855df8892be53bdaf2507eeeac3138",
            },
            data: {
                analyze_type: "similar",
                page: 1,
                size: 5,
            },
        }).then(
            (res) => {
                callback(res.data.documents);
            }

            // res.data.document.forEach((el) => {
            //     console.log(el);
            // });
        );
    };
    createGroupHandle = async (createInfo) => {
        const categoryText = createInfo.categoryId;
        console.log(createInfo);
        await axios
            .post(`${NAGAZA_SERVER_API}/group/creategroup`, createInfo, {
                "Content-Type": "application/json",
                withCredentials: true,
            })
            .catch((e) => console.log(e))
            .then((res) => callback);
    };
    createGroupHandle = async (info) => {
        const valueArr = Object.values(info);

    

        if (valueArr.includes('')) {
            alert('모든 칸을 채워주세요')
        }
        else {
            let createInfo = {};
            createInfo.categoryId =
                Number(this.state.transCategoryId.indexOf(info.categoryId)) + 1;
            createInfo.date = info.date;
            createInfo.admin = this.state.userInfo.id;
            createInfo.location = String(info.location);
            createInfo.description = info.description;
            createInfo.startTime = info.startTime;
            createInfo.endTime = info.endTime;
            createInfo.groupName = info.groupName;
            console.log(createInfo);

            await axios
                .post(
                    "https://127.0.0.1:4000/group/creategroup",
                    createInfo,
                    {
                        "Content-Type": "application/json",
                        withCredentials: true,
                    }
                )
                .then(res => {
                    let newGroupInfo = res.data.groupInfo
                    newGroupInfo.id = res.data.groupId.group_id 
                    // console.log(res)
                    this.setState({
                        groupInfo : newGroupInfo,
                        isAdmin : true
                    })

                })
        }
    };

    //유저정보변경, 그룹삭제. 그룹탈퇴ㅏ. 그룹참가 등의 메소드는 업데이트 엔드포인트로 ㅗpost요청한번
    // 그뒤 userinfo를 받아와 정보를 새로 리셋한다.
    userdataSave = (userInfo, groupInfo) => {
        this.setState({
            userInfo: [], //유저의 정보
            groupInfo: [], //유저가 속한 그룹의 정보
        });
        console.log(this.state.userInfo);
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
                                    findAddress={this.findAddress}
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
                                        transCategoryId={
                                            this.state.transCategoryId
                                        }
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
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;

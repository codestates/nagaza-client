// import logo from './logo.svg';
import React, { Component } from "react";
import GroupList from "../component/GroupList";
import data from "../mockdata/groupData.json";
import Nav from "../component/Nav";
import Map from "../component/Map";
import SearchGroup from "../component/SearchGroup.js";
import Header from "../component/Header";

class GroupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupInfo: [],
            createGroupState: false,
            createGroupLocation: null,
            isSerachModalOpen: false,
            isCreateModalOpen: false,
            //검색할 카테고리(ex. 활동, 위치, 시간)
            //카테고리의 키워드(ex. 활동-축구, 시간 -몇월, 몇일, 몇시)
        };
        this.getGroupInfo = this.getGroupInfo.bind(this);
        // this.serachGroup = this.serachGroup.bind(this)
        this.changeGroupState = this.changeGroupState.bind(this);
        this.createGroupHandle = this.createGroupHandle.bind(this);
        this.openSearchModal = this.openSearchModal.bind(this);
        this.closeSearchModal = this.closeSearchModal.bind(this);
        this.openCreateModel = this.openCreateModel.bind(this);
        this.closeCreateModel = this.closeCreateModel.bind(this);
        this.getGroupLocation = this.getGroupLocation.bind(this);
    }

    openSearchModal = () => {
        this.setState({
            isSerachModalOpen: true,
        });
    };

    closeSearchModal = () => {
        this.setState({
            isSerachModalOpen: false,
        });
    };

    openCreateModel = () => {
        this.setState({
            isCreateModalOpen: true,
        });
    };

    closeCreateModel = () => {
        this.setState({
            isCreateModalOpen: false,
        });
    };

    changeGroupState = () => {
        // console.log('경도 : ',Lat.La)
        // console.log("위도:", Lat.Ma)
        this.setState({
            createGroupState: true,
        });
    };

    getGroupLocation = (location) => {
        this.setState({
            createGroupLocation: location,
        });
    };

    createGroupHandle = (createInfo) => {
        //post요청으로 그룹 생성
        // console.log(createInfo)
        const groupInfo = [this.state.createGroupLocation, ...[createInfo]];
        console.log(groupInfo);
        //요청후
        this.setState({
            createGroupState: false,
        });
    };
    getGroupInfo = () => {
        this.setState({
            groupInfo: data.data,
        });
    }; //state의 카테고리와 키워드를 nav에서 받아서 setstate

    render() {
        return (
            <div className={"group-page"}>
                {/* <div className={'upper-nav'}>
          <div className={'logo-in-group'}>Logo자리</div>
          <div className={'nav-in-group'} onClick={this.openSearchModal}>nav자리</div>
          <SearchGroup getGroupInfo={this.getGroupInfo} close={this.closeSearchModal} isOpen={this.state.isSerachModalOpen}></SearchGroup>
          <div className={'profile-in-group'}>profile자리</div>
        </div> */}
                <Header></Header>
                <div className={"middle-info-and-map"}>
                    <GroupList groupInfo={this.state.groupInfo}>
                        그룹 정보
                    </GroupList>
                    <Map
                        getGroupLocation={this.getGroupLocation}
                        close={this.closeCreateModel}
                        open={this.openCreateModel}
                        isOpen={this.state.isCreateModalOpen}
                        createGroupHandle={this.createGroupHandle}
                        createGroupLocation={this.state.createGroupLocation}
                        changeGroupState={this.changeGroupState}
                        createGroupState={this.state.createGroupState}
                    ></Map>
                    {/* 지도 창  */}
                </div>
            </div>
        );
    }
}

export default GroupPage;

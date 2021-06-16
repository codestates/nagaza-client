// import logo from './logo.svg';
import React, { Component } from "react";
import GroupList from "../component/GroupList";
import Map from "../component/Map";
// import SearchGroup from "../component/SearchGroup.js"
import Header from "../component/Header";

class GroupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchGroupDataOnMap: [],
            searchGroupData: props.searchGroupData,
            createGroupState: false,
            createGroupLocation: null,
            isSerachModalOpen: false,
            isCreateModalOpen: false,
            //검색할 카테고리(ex. 활동, 위치, 시간)
            //카테고리의 키워드(ex. 활동-축구, 시간 -몇월, 몇일, 몇시)
        };
        // this.getGroupInfo = this.getGroupInfo.bind(this)
        // this.serachGroup = this.serachGroup.bind(this)
        this.changeGroupState = this.changeGroupState.bind(this);
        this.createGroupHandle = this.createGroupHandle.bind(this);
        this.openSearchModal = this.openSearchModal.bind(this);
        this.closeSearchModal = this.closeSearchModal.bind(this);
        this.openCreateModel = this.openCreateModel.bind(this);
        this.closeCreateModel = this.closeCreateModel.bind(this);
        this.getGroupLocation = this.getGroupLocation.bind(this);
    }

    componentDidMount = async () => {


        // await axios.get('https://ec2-52-79-253-209.ap-northeast-2.compute.amazonaws.com/group/groupInfo', {
        //     'Content-Type': 'application/json',
        //     withCredentials: true
        // })
        //     .catch(e => console.log(e))
        //     .then(res => console.log(res))
        //     .then(res => {
        //         this.setState({
        //             searchGroupDataOnMap: res.groupInfo
        //         })
        //     })

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
        createInfo.location = this.state.createGroupLocation
        this.setState({
            createGroupState: false,
        });
        this.props.createGroupHandle(createInfo)
    };

    render() {
        return (
            <div className={"group-page"}>
                <Header
                    signIn={this.props.signIn}
                    signOut={this.props.signOut}
                    searchGroup={this.props.searchGroup}
                    isSignIn={this.props.isSignIn}
                    setWhereAmI={this.props.setWhereAmI}
                    whereAmI={this.props.whereAmI}
                ></Header>
                <div className={"middle-info-and-map"}>
                    <GroupList
                        groupInfo={this.props.groupInfo}
                        joinGroup={this.props.joinGroup}
                        searchGroupData={this.props.searchGroupData}
                    >
                        그룹 정보
                    </GroupList>
                    <Map
                        groupInfo={this.props.groupInfo}
                        searchGroupDataOnMap={this.state.searchGroupData}
                        joinGroup={this.props.joinGroup}
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

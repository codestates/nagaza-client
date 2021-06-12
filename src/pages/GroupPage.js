// import logo from './logo.svg';
import React, { Component } from "react";
import GroupList from "../component/GroupList";
// <<<<<<< HEAD
// import data from "../mockdata/groupData.json";
// import Nav from "../component/Nav";
// import Map from "../component/Map";

// class GroupPage extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             groupInfo: [],
//             createGroupState: false,
//             createGroupLocation: null,
//             //검색할 카테고리(ex. 활동, 위치, 시간)
//             //카테고리의 키워드(ex. 활동-축구, 시간 -몇월, 몇일, 몇시)
//         };
//         this.getGroupInfo = this.getGroupInfo.bind(this);
//         // this.serachGroup = this.serachGroup.bind(this)
//         this.changeGroupState = this.changeGroupState.bind(this);
//         this.createGroupHandle = this.createGroupHandle.bind(this);
//     }

//     getGroupInfo = () => {
//         //axios요청
//         this.setState({
//             groupInfo: data.data,
//         });
//     };

//     changeGroupState = (Lat) => {
//         // console.log('경도 : ',Lat.La)
//         // console.log("위도:", Lat.Ma)
//         this.setState({
//             createGroupState: true,
//             createGroupLocation: `${Lat.La},${Lat.Ma}`,
//         });
//     };

//     createGroupHandle = (createInfo) => {
//         //post요청으로 그룹 생성
//         console.log(createInfo);
//         //요청후
//         this.setState({
//             createGroupState: false,
//         });
//     };
//     // serachGroup = () => {
//     //   this.setState({

//     //   })
//     // }  state의 카테고리와 키워드를 nav에서 받아서 setstate

//     render() {
//         return (
//             <div>
//                 <button onClick={this.getGroupInfo}>그룹 정보 가져오기</button>
//                 <GroupList groupInfo={this.state.groupInfo}>
//                     그룹 정보
//                 </GroupList>
//                 <Map
//                     createGroupHandle={this.createGroupHandle}
//                     createGroupLocation={this.state.createGroupLocation}
//                     changeGroupState={this.changeGroupState}
//                     createGroupState={this.state.createGroupState}
//                 ></Map>
//                 {/* 지도 창  */}
//             </div>
//         );
//     }
// =======
import data from "../mockdata/groupData.json"
import Nav from "../component/Nav";
import Map from "../component/Map";
import SearchGroup from "../component/SearchGroup.js"

class GroupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groupInfo: [],
      createGroupState: false,
      createGroupLocation: null,
      isSerachModalOpen: false,
      isCreateModalOpen: false
      //검색할 카테고리(ex. 활동, 위치, 시간)
      //카테고리의 키워드(ex. 활동-축구, 시간 -몇월, 몇일, 몇시)
    }
    this.getGroupInfo = this.getGroupInfo.bind(this)
    // this.serachGroup = this.serachGroup.bind(this)
    this.changeGroupState = this.changeGroupState.bind(this)
    this.createGroupHandle = this.createGroupHandle.bind(this)
    this.openSearchModal = this.openSearchModal.bind(this)
    this.closeSearchModal = this.closeSearchModal.bind(this)
    this.openCreateModel = this.openCreateModel.bind(this)
    this.closeCreateModel = this.closeCreateModel.bind(this)
    this.getGroupLocation = this.getGroupLocation.bind(this)
  }

  openSearchModal = () => {
    this.setState({
      isSerachModalOpen: true
    })
  }

  closeSearchModal = () => {
    this.setState({
      isSerachModalOpen: false
    })
  }

  openCreateModel = () => {
    this.setState({
      isCreateModalOpen: true
    })
  }

  closeCreateModel = () => {
    this.setState({
      isCreateModalOpen: false
    })
  }

  changeGroupState = () => {
    // console.log('경도 : ',Lat.La)
    // console.log("위도:", Lat.Ma)
    this.setState({
      createGroupState: true,
    })
  }

  getGroupLocation = (location) => {
    this.setState({
      createGroupLocation: location
    })
  }

  createGroupHandle = (createInfo) => {
    //post요청으로 그룹 생성
    // console.log(createInfo)
    const groupInfo = [this.state.createGroupLocation, ...[createInfo]]
    console.log(groupInfo)
    //요청후
    this.setState({
      createGroupState: false
    })
  }
  getGroupInfo = () => {
    this.setState({
      groupInfo: data.data
    })
  }  //state의 카테고리와 키워드를 nav에서 받아서 setstate




  render() {
    return (
      <div className={'group-page'}>
        <div className={'upper-nav'}>
          <div className={'logo-in-group'}>Logo자리</div>
          <div className={'nav-in-group'} onClick={this.openSearchModal}>nav자리</div>
          <SearchGroup getGroupInfo={this.getGroupInfo} close={this.closeSearchModal} isOpen={this.state.isSerachModalOpen}></SearchGroup>
          <div className={'profile-in-group'}>profile자리</div>
        </div>
        <div className={'middle-info-and-map'}>
          <GroupList groupInfo={this.state.groupInfo}>그룹 정보</GroupList>
          <Map getGroupLocation={this.getGroupLocation} close={this.closeCreateModel} open={this.openCreateModel} isOpen={this.state.isCreateModalOpen} createGroupHandle={this.createGroupHandle} createGroupLocation={this.state.createGroupLocation} changeGroupState={this.changeGroupState} createGroupState={this.state.createGroupState}></Map>{/* 지도 창  */}
        </div>
      </div>
    )
  }
// >>>>>>> a6d4a2262e908e705350a6eae0b70c2509e58581
}

export default GroupPage;

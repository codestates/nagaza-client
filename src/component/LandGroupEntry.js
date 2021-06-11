import React from "react";
import axios from "axios";
import LandGroup from "./LandGroup";
export default function LandGroupEntry(props) {
  this.state = {
    //카테고리 이미지 필요 - 글로벌
    groupInfoList: props.groupInfoList, //그룹리스트 필요 - 글로벌
  };
  //onClickEvent 함수
  //1. 해당 그룹 정보를 보여줌
  //2. 참여하기 버튼을 통해서 참여하기

  //Group에 hover속성 넣어야함, 넣으면 진해진다던지,
  const joinClickHandler = () => {
    /* 그룹 참여하기 버튼 이벤트 */
  };

  return (
    <div className="GroupInfoContainer">
      {groupInfoList.map((groupInfo) => (
        <LandGroup
          key=""
          groupInfo={groupInfo}
          joinClickHandler={joinClickHandler}
        ></LandGroup>
      ))}
    </div>
  );
}

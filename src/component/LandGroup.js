import React from "react";
import axios from "axios";

export default function LandGroup(props) {
  state = {
    //상부에서 group 정보받아와야함
  };
  //위에서 받아온 click event함수를 참여하기에 연결하기
  return (
    <div className="GroupInfoContainer">
      <div>
        <div>마감기간까지</div>
        <div className="">그룹명</div>
        <div className="">그룹장</div>
        <div className="">시작시간</div>
        <span className="">장소</span>
        <span className="">인원수</span>
        <div className="groupJoinBtn">
          <span onClick={() => props.joinClickHandler}>참여하기</span>
        </div>
      </div>
    </div>
  );
}

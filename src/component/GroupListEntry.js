import React from "react";
import axios from "axios";

export default function GroupListEntry(props) {

  const isGroupIn = props.isGroupIn.length >= 1 ? true : false
  // console.log(props.groupInfo)


  const joinEvent = () => {

    if (!isGroupIn) {
      props.joinGroup(props.groupInfo.id)//groupid o , username x
      alert('그룹에 가입되었습니다')
    }
    else {
      alert('동시에 두개의 그룹에 가입할 수 없습니다.')
    }
  }

  return (
    <div className={'group-list'}>
      <div className={'group-list-item-info'}>
        <div className={'group-list-item-title-box'}>
          <div className={'group-list-item-title'}>{props.groupInfo.name}</div>
        </div>
        <div className={'group-list-item-time-and-category'}>
          <div className={'group-list-item-category'}>{props.groupInfo.category_id}</div>
          <div className={'group-list-item-time'}>{props.groupInfo.start_time} ~ {props.groupInfo.end_time}</div>
        </div>
      </div>
      <div className={'group-list-item-join'}>
        <button className={'group-join-button'} onClick={joinEvent}>그룹 참가 하기</button>
        {/* 실 작동시에는 이름이 아니라 그룹아이디르 ㄹ보내줘야될것? */}
      </div>
    </div>
  );
}

// admin: 28
// category_id: "weight training"
// createdAt: "2021-06-16T02:16:17.000Z"
// date: "2021-06-20"
// description: "테스트확인"
// end_time: "17:00:00"
// id: 20
// location: "[30, 30]"
// name: "테스트그룹"
// start_time: "09:00:00"
// updatedAt: "2021-06-16T02:19:58.000Z"
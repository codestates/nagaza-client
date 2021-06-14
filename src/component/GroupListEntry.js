import React from "react";
import axios from "axios";

export default function GroupListEntry(props) {

  const isGroupIn = props.isGroupIn.length >= 1 ? true : false


  const joinEvent = () => {

    if (!isGroupIn) {
      props.joinGroup(props.groupInfo.username)
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
          <div className={'group-list-item-category'}>{props.groupInfo.category}</div>
          <div className={'group-list-item-time'}>{props.groupInfo.start_date} ~ {props.groupInfo.end_date}</div>
        </div>
      </div>
      <div className={'group-list-item-join'}>
        <button className={'group-join-button'} onClick={joinEvent}>그룹 참가 하기</button>
        {/* 실 작동시에는 이름이 아니라 그룹아이디르 ㄹ보내줘야될것? */}
      </div>
    </div>
  );
}
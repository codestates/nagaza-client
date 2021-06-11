import React from "react";
import axios from "axios";

export default function GroupListEntry(props) {
  return (
    <div>
      <div>그룹이름 : {props.groupInfo.name}</div>
      <div>운동 : {props.groupInfo.category}</div>
      <div>메세지 : {props.groupInfo.descripton}</div>
      <div>시작 시간 : {props.groupInfo.start_date}</div>
      <div>예상 종료 시간 : {props.groupInfo.end_date}</div>
      <div>--------------------</div>
    </div>
  );
}

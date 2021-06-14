import React from "react";
// import PropTypes from 'prop-types';
import axios from "axios";
import GroupListEntry from "./GroupListEntry";

export default function GroupList(props) {
  // console.log(props)
  return (
    <div  className={'group-info'}  >
      {props.searchGroupData.length === 0 ? (
        <div  className={'group-info'} >검색된 그룹이 없습니다.</div>
      ) : (
        props.searchGroupData.map((el) => (
          <GroupListEntry key={el.groupid} isGroupIn = {props.groupInfo} joinGroup={props.joinGroup} groupInfo={el.groupInfo} />
        ))
      )}
    </div>
  );
}

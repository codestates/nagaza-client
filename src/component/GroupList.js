import React from "react";
// import PropTypes from 'prop-types';
import axios from "axios";
import GroupListEntry from "./GroupListEntry";

export default function GroupList(props) {
  return (
    <div  className={'group-info'}  >
      {props.groupInfo.length === 0 ? (
        <div  className={'group-info'} >검색된 그룹이 없습니다</div>
      ) : (
        props.groupInfo.map((el) => (
          <GroupListEntry key={el.groupid} groupInfo={el.groupInfo} />
        ))
      )}
    </div>
  );
}

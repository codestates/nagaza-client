import React from 'react'

export default function DisplayGroupInfo(props) {
  // const isGroup = props.groupInfo.length === 0 ? false : true
  const isGroup = true
  console.log(props)
  return (
    <div className={'group-state'}>
      {isGroup ? (
        <div className={'group-state-contents'}>
          <div className={'contents-key'}>그룹명</div>{props.groupInfo.name}<div className={'contents-value'}></div>
          <div className={'contents-key'}>그룹메세지</div>{props.groupInfo.description}<div className={'contents-value'}></div>
          <div className={'contents-key'}>할 운동</div>{props.groupInfo.category_id}<div className={'contents-value'}></div>
          <div className={'contents-key'}>시작 시간</div>{props.groupInfo.start_time}<div className={'contents-value'}></div>
          <div className={'contents-key'}>종료 예상 시간</div>{props.groupInfo.end_time}<div className={'contents-value'}></div>
          {props.isAdmin ? (
            <button className={'user-info-button'} onClick={props.deleteGroup}>그룹 삭제하기</button>
          ) : (
            <button className={'user-info-button'} onClick={props.exitGroup}>그룹 탈퇴하기</button>
          )}
        </div>

      ) : (
        <div className={'group-state-contents'}>

          <div className={'no-group'}>속해있는 그룹이 없습니다.</div>
        </div>
      )}
    </div>
  )
}

import React from 'react'

export default function DisplayGroupInfo(props) {
  return (
    <div className={'group-state'}>
      <div>그룹명</div>
      <div>그룹메세지</div>
      <div>할 운동</div>
      <div>시작 시간</div>
      <div>종료 예상 시간</div>
      <div>시작 까지 남은 시간</div>
      {props.isAdmin ? (
        <button onClick ={props.deleteGroup}>그룹 삭제하기</button>
      ) : (
        <button onClick ={props.exitGroup}>그룹 탈퇴하기</button>
      )}
    </div>
  )

}
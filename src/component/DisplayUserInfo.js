import React, { useState } from 'react'

export default function DisplayUserInfo(props) {
  const [changeState, changeStateSet] = useState(false)
  const [changeuserInfo, changeUserInfoSet] = useState({
    username: '',
    age: '',
    category: ''
  })

  const onChange = (e) => {
    const { value, name } = e.target;
    changeUserInfoSet({
      ...changeuserInfo,
      [name]: value,
    });
  }
  // console.log(props)
  const reverseChange = () => {
    // console.log(changeuserInfo)
    props.changeUserInfo(changeuserInfo)
    changeStateSet(pre => !pre)

  }

  return (
    !changeState ? (
      <div className={'user-info'} >
        <div className={'user-info-contents'}>
          <div className={'contents-key'}>이름 : </div><div className={'contents-value'}> {props.userInfo.username}</div>
          <div className={'contents-key'}>나이 : </div><div className={'contents-value'}> {props.userInfo.age}</div>
          <div className={'contents-key'}>선호활동 : </div><div className={'contents-value'}> {props.userInfo.category}</div>
          <button className={'user-info-button'} onClick={reverseChange}>변경하기</button>
        </div>
      </div>
    ) : (
      <div className={'user-info'} >
        <div className={'user-info-contents'}>

          <div className={'contents-key'}>이름 : </div><input className={'contents-value'} type="text" name="username" defaultValue={props.userInfo.username} onChange={onChange}></input>
          <div className={'contents-key'}>나이 : </div><input className={'contents-value'} type="text" name="age" defaultValue={props.userInfo.age} onChange={onChange} ></input>
          <div className={'contents-key'}>선호활동 : </div><select className={'contents-value'} name="category" onChange={onChange}>
            <option value="">활동을 선택하세요</option>
            <option value="ball game">구기 운동</option>
            <option value="aqua sports">아쿠아스포츠</option>
            <option value="weight">웨이트</option>
            <option value="running">러닝</option>
            <option value="yoga">요가</option>
            <option value="hiking">등산</option>
            <option value="cycling">사이클링</option>
            <option value="climbing">클라이밍</option>
          </select>
          <button className={'user-info-button'} onClick={reverseChange}>변경하기</button>
        </div>
      </div>
    )
  )
}
import React, { useState } from 'react'

export default function DisplayUserInfo(props) {
  const [changeState, changeStateSet] = useState(false)
  const [changeuserInfo, changeUserInfoSet] = useState({
    username: '',
    email: '',
    age: '',
    location: '',
    category: ''
  })

  const onChange = (e) => {
    const { value, name } = e.target;
    changeUserInfoSet({
      ...changeuserInfo,
      [name]: value,
    });
  }

  const reverseChange = () => {
    console.log(changeuserInfo)
    changeStateSet(pre => !pre)

  }

  return (
    !changeState ? (
      <div className={'user-info'} >
        <div className={'user-info-contents'}>
          <div className={'contents-key'}>이름 : </div><div className={'contents-value'}> props.userInfo.username</div>
          <div className={'contents-key'}>이메일 : </div><div className={'contents-value'}> props.userInfo.email</div>
          <div className={'contents-key'}>나이 : </div><div className={'contents-value'}> props.userInfo.age</div>
          <div className={'contents-key'}>지역 : </div><div className={'contents-value'}> props.userInfo.location</div>
          <div className={'contents-key'}>선호활동 : </div><div className={'contents-value'}> props.userInfo.category</div>
          <button className={'user-info-button'} onClick={reverseChange}>변경하기</button>
        </div>
      </div>
    ) : (
      <div className={'user-info'} >
        <div className={'user-info-contents'}>

          <div className={'contents-key'}>이름 : </div><input className={'contents-value'} type="text" name="username" defaultValue="props.userInfo.username" onChange={onChange}></input>
          <div className={'contents-key'}>이메일 : </div><input className={'contents-value'} type="text" name="email" defaultValue="props.userInfo.email" onChange={onChange}></input>
          <div className={'contents-key'}>나이 : </div><input className={'contents-value'} type="text" name="age" defaultValue="props.userInfo.age" onChange={onChange} ></input>
          <div className={'contents-key'}>지역 : </div><input className={'contents-value'} type="text" name="location" defaultValue="props.userInfo.location" onChange={onChange}></input>
          <div className={'contents-key'}>선호활동 : </div><input className={'contents-value'} type="text" name="category" defaultValue="props.userInfo.category" onChange={onChange}></input>
          <button className={'user-info-button'} onClick={reverseChange}>변경하기</button>
        </div>
      </div>
    )
  )
}


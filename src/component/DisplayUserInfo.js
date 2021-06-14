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
        <div>이름 : </div><div> props.userInfo.username</div>
        <div>이메일 : </div><div> props.userInfo.email</div>
        <div>나이 : </div><div> props.userInfo.age</div>
        <div>지역 : </div><div> props.userInfo.location</div>
        <div>선호활동 : </div><div> props.userInfo.category</div>
        <button onClick={reverseChange}>변경하기</button>
      </div>
    ) : (
      <div className={'user-info'} >
        <div>이름 : </div><input type="text" name="username" defaultValue="props.userInfo.username" onChange={onChange}></input>
        <div>이메일 : </div><input type="text" name="email" defaultValue="props.userInfo.email" onChange={onChange}></input>
        <div>나이 : </div><input type="text" name="age" defaultValue="props.userInfo.age" onChange={onChange} ></input>
        <div>지역 : </div><input type="text" name="location" defaultValue="props.userInfo.location" onChange={onChange}></input>
        <div>선호활동 : </div><input type="text" name="category" defaultValue="props.userInfo.category" onChange={onChange}></input>
        <button onClick={reverseChange}>변경하기</button>
      </div>
    )
  )
}


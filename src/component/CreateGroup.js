import React, { useState } from "react";
import axios from "axios";

export default function CreateGroup(props) {

  const today = new Date()

  let month = new String(today.getMonth() + 1);
  month = month >= 10 ? month : '0' + month;
  let day = new String(today.getDate());
  day = day >= 10 ? day : '0' + day;

  let [createInfo, setInfo] = useState({
    groupName: "",
    categoryId: "",
    startTime: "",
    endTime: "",
    description: "",
    date: `${today.getFullYear()}-${month}-${day}`
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...createInfo,
      [name]: value,
    });
  };
  // console.log(props.isOpen)
  if (props.isOpen) {
    return (
      <div className='c-modal'>
        <section >
          <div className="createModal">
            <header className='close'>
              <button onClick={props.close}>&times;</button>
            </header>
            <main className='modal-contents'>
              <div className={'contents-group'} >그룹 이름을 입력하세요</div>
              <input type="text" name="groupName" onChange={onChange}></input>
              <select className={'contents-category'} name="categoryId" onChange={onChange}>
                <option value="">활동을 선택하세요</option>
                <option value="ball game">구기 운동</option>
                <option value="aqua sports">아쿠아스포츠</option>
                <option value="weight training">웨이트</option>
                <option value="running">러닝</option>
                <option value="yoga">요가</option>
                <option value="hiking">등산</option>
                <option value="cycling">사이클링</option>
                <option value="climbing">클라이밍</option>
              </select>
              <div className={'contents-start'}>시작 시간을 입력하세요</div>
              <input type="time" name="startTime" onChange={onChange}></input>
              <div className={'contents-end'}>종료 예상 시간을 입력하세요</div>
              <input type="time" name="endTime" onChange={onChange}></input>
              <div className={'contents-message'}> 간단한 메세지를 입력하세요 </div>
              <input type="text" name="description" onChange={onChange}></input>
              <button className={'contents-button'}
                onClick={() => {
                  props.createGroupHandle(createInfo);
                }}
              >
                그룹 생성하기
              </button>
            </main>
          </div>
        </section>
      </div>
    );
  }
  else {
    return null
  }
}

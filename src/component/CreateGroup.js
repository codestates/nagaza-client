import React, { useState } from "react";
import axios from "axios";

export default function CreateGroup(props) {
  let [createInfo, setInfo] = useState({
    groupName: "",
    groupCategory: "",
    groupStartTime: "",
    groupEndTime: "",
    groupMessage: "",
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
              <select className={'contents-category'} name="groupCategory" onChange={onChange}>
                <option value="">활동을 선택하세요</option>
                <option value="soccer">축구</option>
                <option value="baseball">야구</option>
                <option value="basketball">농구</option>
                <option value="swimming">수영</option>
              </select>
              <div className={'contents-start'}>시작 시간을 입력하세요</div>
              <input type="time" name="groupStartTime" onChange={onChange}></input>
              <div className={'contents-end'}>종료 예상 시간을 입력하세요</div>
              <input type="time" name="groupEndTime" onChange={onChange}></input>
              <div className={'contents-message'}> 간단한 메세지를 입력하세요 </div>
              <input type="text" name="groupMessage" onChange={onChange}></input>
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

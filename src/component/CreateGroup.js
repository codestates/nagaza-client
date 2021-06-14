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
console.log(props.isOpen)
  if (props.isOpen) {
    return (
      <div className='c-modal'>
        <div >
          <div className="createModal">
            <span className="close" onClick={props.close}>
              &times;
            </span>
            <div className='modalContents'>
              <div>그룹 이름을 입력하세요</div>
              <input type="text" name="groupName" onChange={onChange}></input>
              <select name="groupCategory" onChange={onChange}>
                <option value="">활동을 선택하세요</option>
                <option value="soccer">축구</option>
                <option value="baseball">야구</option>
                <option value="basketball">농구</option>
                <option value="swimming">수영</option>
              </select>
              <div>시작 시간을 입력하세요</div>
              <input type="date" name="groupStartTime" onChange={onChange}></input>
              <div>종료 예상 시간을 입력하세요</div>
              <input type="date" name="groupEndTime" onChange={onChange}></input>
              <div> 간단한 메세지를 입력하세요 </div>
              <input type="text" name="groupMessage" onChange={onChange}></input>
              <button
                onClick={() => {
                  props.createGroupHandle(createInfo);
                }}
              >
                그룹 생성하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return null
  }
}

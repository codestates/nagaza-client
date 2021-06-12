import React, { useState } from 'react';
import axios from 'axios';

export default function SearchGroup({ isOpen, close, getGroupInfo }) {

  if (isOpen) {
    return (
      <div className="modal">
        <div>
          <div className="searchModal">
            <span className="close" onClick={close}>
              &times;
            </span>
            <div onClick ={close} className="modalContents">
              <div onClick={getGroupInfo}>그룹 정보 검색하기</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return null
  }
};
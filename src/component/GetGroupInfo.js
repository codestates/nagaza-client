import React, { Component } from "react";
import axios from "axios";

export default function GetGroupInfo(props) {
  return <button onClick={props.GetGroupInfo}>그룹정보 가져오기</button>;
}

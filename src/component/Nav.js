import React, { Component } from "react";
import axios from "axios";

export default function Nav(props) {
  let searchKeyword = "";
  let changeKeywordCategory = () => {
    console.log(searchKeyword);
    searchKeyword = "category";
  };
  return (
    <div>
      <button onClick={changeKeywordCategory} className="category">
        운동으로 검색
      </button>
      {console.log(searchKeyword)}
      {searchKeyword === "category" ? (
        <select name="category">
          <option value="운동선택">운동선택</option>
          <option value="축구">축구</option>
          <option value="야구">야구</option>
          <option value="캐치볼">캐치볼</option>
          <option value="볼링">볼링</option>
        </select>
      ) : (
        <div></div>
      )}
      <div className="location">장소로 검색</div>
      <div className="date">시간으로 검색</div>
    </div>
  );
}

import React, { useState } from "react";
import Header from "./Header";
import "./NavigationBar.css";

export default function NavigationBar(props) {
    //로컬 상태
    let [locationCord, setLocation] = useState("");
    let [dateStart, setDateStart] = useState("");
    let [dateEnd, setDateEnd] = useState("");
    let [personNum, setPersonNum] = useState("");
    let [isOpenBox, setOpenBox] = useState([false, false, false]);

    //검색 기능시 서버에 요청하는 onClickEvent 메서드 필요
    //전체 Input이 ComboBox로 구성될지, 혹은 Input으로 구성될지 결정

    //메서드
    const typingHandler = (e) => {
        //값이 바뀌면 상태값에 저장되도록
        console.log(e.target);
    };
    const searchGroup = () => {
        // 그룹 검색과 동시에 grouppage로 이동
        props.searchGroup([locationCord, dateStart, dateEnd, personNum]);
    };
    return (
        <>
            <form className="navigationBar">
                <div className="navigationWrapper">
                    <div className="navigationSearch">
                        <div className="geolocation Search">
                            <span>위치</span>
                            <input type=""></input>
                        </div>
                        <div className="dateStart Search">
                            <span>시작시간</span>
                            <select name="ampm">
                                <option value="none">오전</option>
                                <option value="korean">오후</option>
                            </select>
                            <select name="startHour">
                                <option value="none">시간</option>
                                <option value="korean">01</option>
                                <option value="english">02</option>
                                <option value="chinese">03</option>
                                <option value="spanish">04</option>
                            </select>
                            <select name="startMinute">
                                <option value="none">분</option>
                                <option value="korean">00</option>
                                <option value="korean">10</option>
                                <option value="english">20</option>
                                <option value="chinese">30</option>
                                <option value="spanish">40</option>
                                <option value="spanish">50</option>
                            </select>
                        </div>
                        <div className="dateEnd Search">
                            <span>종료시간</span>
                            <select name="ampm">
                                <option value="none">오전</option>
                                <option value="korean">오후</option>
                            </select>
                            <select name="startHour">
                                <option value="none">시간</option>
                                <option value="korean">01</option>
                                <option value="english">02</option>
                                <option value="chinese">03</option>
                                <option value="spanish">04</option>
                            </select>
                            <select name="startMinute">
                                <option value="none">분</option>
                                <option value="korean">00</option>
                                <option value="korean">10</option>
                                <option value="english">20</option>
                                <option value="chinese">30</option>
                                <option value="spanish">40</option>
                                <option value="spanish">50</option>
                            </select>
                        </div>
                        <div className="personNum Search">
                            <span>인원</span>
                            <select name="personNum">
                                <option value="none">2</option>
                                <option value="korean">3</option>
                                <option value="korean">4</option>
                                <option value="english">5</option>
                                <option value="chinese">6</option>
                                <option value="spanish">7</option>
                                <option value="spanish">8</option>
                            </select>
                        </div>
                        <div className="searchBtn-wrapper">
                            <div
                                className="searchBtn"
                                onClick={() => {
                                    searchGroup();
                                }}
                            >
                                <i>검색</i>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

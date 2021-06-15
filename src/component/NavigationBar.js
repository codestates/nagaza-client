import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "./NavigationBar.css";

export default function NavigationBar(props) {
    //로컬 상태
    let [locationCord, setLocation] = useState("");
    let [dateStart, setDateStart] = useState("");
    let [dateEnd, setDateEnd] = useState("");
    let [personNum, setPersonNum] = useState("");
    let [isOpenBox, setOpenBox] = useState([false, false, false]);
    const minutes = ["분", "00", "10", "20", "30", "40", "50", "60"];
    const hours = [
        "시간",
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
    ];
    const ampm = ["시간대", "오전", "오후"];
    const people = [
        "+",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
    ];
    let date = new Date();

    let month = date.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    const dateStr = date.getFullYear() + "-" + month + "-" + date.getDate();
    console.log(dateStr);
    const history = useHistory();
    //검색 기능시 서버에 요청하는 onClickEvent 메서드 필요
    //전체 Input이 ComboBox로 구성될지, 혹은 Input으로 구성될지 결정

    //메서드
    const typingHandler = (e) => {
        //값이 바뀌면 상태값에 저장되도록
        console.log(e.target);
    };
    
    const searchGroup = () => {
        // 그룹 검색과 동시에 grouppage로 이동
        // console.log(location.pathname)
        if (location.pathname.toLowerCase() === "/landingpage") {
            console.dir(history);
            history.push("/grouppage");
        }
        props.searchGroup([locationCord, dateStart, dateEnd, personNum]);
    };

    return (
        <>
            <form className="navigationBar">
                <div className="navigationWrapper">
                    <div className="navigationSearch">
                        <div className="geolocation search">
                            <span>카테고리</span>
                            <input type="text"></input>
                        </div>
                        <div className="date search">
                            <span>시작일</span>
                            <div className="timeOption">
                                <input
                                    type="date"
                                    defaultValue={dateStr}
                                ></input>
                            </div>
                        </div>
                        <div className="date search">
                            <span>종료일</span>
                            <div className="timeOption">
                                <input type="date"></input>
                            </div>
                        </div>

                        <div className="searchBtn-wrapper">
                            <div
                                className="searchBtn"
                                onClick={() => {
                                    searchGroup();
                                }}
                            >
                                <span>검색</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

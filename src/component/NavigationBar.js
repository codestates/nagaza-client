import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "./NavigationBar.css";

export default function NavigationBar(props) {
    const [searchInfo, setSearchInfo] = useState({
        category: '',
        startTime: '',
        personNum: ''
    })
    let [isOpenBox, setOpenBox] = useState([false, false, false]);

    const history = useHistory();

    const onChange = (e) => {
        // console.log(e)
        const { value, name } = e.target
        setSearchInfo({
            ...searchInfo,
            [name]: value
        })
    };

    const searchGroup = () => {
        if (location.pathname.toLowerCase() === "/landingpage") {
            // console.dir(history);
            history.push("/grouppage");
        }
        // console.log(searchInfo)
        props.searchGroup(searchInfo);
    };

    return (
        <>
            <form className="navigationBar">
                <div className="navigationWrapper">
                    <div className="navigationSearch">
                        <div className="geolocation search">
                            <span>카테고리</span>

                            <select className={'contents-category'} name="category" onChange={onChange}>
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
                        </div>
                        <div className="date search">
                            <span>시작시간</span>
                            <div className="timeOption">
                                <input
                                    name={'startTime'}
                                    onChange={onChange}
                                    type="time"
                                ></input>
                            </div>
                        </div>
                        <div className="date search">
                            <span>인원 수</span>
                            <select className={'contents-category'} name="personNum" onChange={onChange}>
                                <option value="">인원수를 선택하세요</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
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

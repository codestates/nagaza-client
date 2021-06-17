import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import "./NavigationBar.css";

export default function NavigationBar(props) {
    const [searchInfo, setSearchInfo] = useState({
        category: "",
        startDate: "",
        endDate: "",
    });
    let [isOpenBox, setOpenBox] = useState([false, false, false]);

    const history = useHistory();
    const whereAmI = location.pathname.toLowerCase();
    const onChange = (e) => {
        // console.log(e)
        const { value, name } = e.target;
        setSearchInfo({
            ...searchInfo,
            [name]: value,
        });
    };

    const searchGroup = () => {
        if (whereAmI === "/landingpage") {
            history.push("/grouppage");
        }
        props.searchGroup(searchInfo);
    };

    return (
        <>
            <form className="navigationBar">
                <div className="navigationWrapper">
                    <div className="navigationSearch">
                        <div className="geolocation search">
                            <div>카테고리</div>
                            <select
                                className={"contents-category"}
                                name="category"
                                onChange={onChange}
                            >
                                <option value="">활동을 선택하세요</option>
                                <option value="ball game">구기 운동</option>
                                <option value="aqua sports">
                                    아쿠아스포츠
                                </option>
                                <option value="weight training">웨이트</option>
                                <option value="running">러닝</option>
                                <option value="yoga">요가</option>
                                <option value="hiking">등산</option>
                                <option value="cycling">사이클링</option>
                                <option value="climbing">클라이밍</option>
                            </select>
                        </div>
                        <div className="date search">
                            <span>시작일</span>
                            <div className="timeOption">
                                <input
                                    name={"startTime"}
                                    onChange={onChange}
                                    type="date"
                                ></input>
                            </div>
                        </div>

                        <div className="date search">
                            <span>종료일</span>
                            <div className="timeOption">
                                <input
                                    name={"endTime"}
                                    onChange={onChange}
                                    type="date"
                                ></input>
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

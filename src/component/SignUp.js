import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";
require("dotenv").config();

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
const KAKAO_CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET;
const KAKAO_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const NAGAZA_SERVER_API = process.env.REACT_APP_NAGAZA_SERVER_API;

export default function SignUp(props) {
    //local state
    const [userId, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [isValidId, setValidId] = useState(false);
    const [isValidPassword, setValidPassword] = useState(false);
    const [isValidsub, setValidsub] = useState(false);

    const [searchModal, searchOpen] = useState(false);
    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [preference, setPreference] = useState("");
    const [userName, setUsername] = useState("");
    const [searchArr, setArr] = useState([]);

    const { signIn, closeModal, setModalHeader, openModal } = props;

    const isValidationId = (email) => {
        let regExp =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        setValidId(regExp.test(email));
    };

    const isValidationPassword = (password) => {
        var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/; //  8 ~ 10자 영문, 숫자 조합
        setValidPassword(regExp.test(password));
    };

    const isValidationSubinput = () => {
        if (
            location !== "" &&
            gender !== "" &&
            age !== "" &&
            preference !== ""
        ) {
            setValidsub(true);
        } else {
            setValidsub(false);
        }
        console.log(location, gender, age, preference);
        console.log(isValidsub);
    };
    const setupAddress = (e) => {
        const text = e.target.textContent;
        console.log(text);
        let input = document.getElementById("address");
        input.value = text;
    };
    //서버에 회원가입 요청
    const signupHandler = () => {
        console.log(isValidId, isValidPassword, isValidsub);
        if (isValidId && isValidPassword && isValidsub) {
            signupRequest();
        } else {
            //donothing
            console.log(isValidId, isValidPassword, isValidsub);
        }
    };
    const signupRequest = async () => {
        await axios
            .post(
                `${NAGAZA_SERVER_API}/user/signup`,
                {
                    email: userId,
                    userName: userName,
                    password: password,
                    location: location,
                    gender: gender,
                    age: age,
                    preference: preference,
                },
                {
                    "Content-Type": "appliaction/json",
                    withCredentials: true,
                }
            )
            .catch((e) => console.log(e))
            .then((res) => {
                closeModal();
                setModalHeader("로그인");
                openModal();
            });
    };

    return (
        <>
            <div className="modalContents">
                <div className="modalTitle">
                    <img className="signinIcon" src="/img/nagaza-logo.png" />
                    <div>NAGAZA 회원가입</div>
                </div>
                <input
                    name="email"
                    className="loginId"
                    type="text"
                    placeholder="이메일"
                    onChange={(e) => {
                        setEmail(e.target.value);
                        isValidationId(userId);
                    }}
                />
                <div className="errMsg">
                    <div
                        className={
                            userId
                                ? isValidId
                                    ? "ok hidden"
                                    : "ok"
                                : "ok hidden"
                        }
                    >
                        <span>이메일 입력이 올바르지 않습니다.</span>
                    </div>
                </div>
                <input
                    name="password"
                    className="loginPw"
                    type="password"
                    placeholder="비밀번호"
                    onChange={(e) => {
                        setPassword(e.target.value);
                        isValidationPassword(e.target.value);
                    }}
                />
                <div className="errMsg">
                    <div
                        className={
                            password
                                ? isValidPassword
                                    ? "ok hidden"
                                    : "ok"
                                : "ok hidden"
                        }
                    >
                        <span>
                            비밀번호 입력이 올바르지 않습니다. (8자이상 10자이하
                            영문숫자조합)
                        </span>
                    </div>
                </div>
                <div className="loginMiddle">
                    <span>닉네임</span>
                    <input
                        name="username"
                        className="username"
                        type="text"
                        placeholder="유저이름"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className="loginMid">
                    <span>위치</span>
                    <input
                        name="위치"
                        className="subInput"
                        id="address"
                        type="text"
                        placeholder="위치"
                        onClick={() => {
                            searchOpen(true);
                        }}
                        onChange={(e) => {
                            setLocation(e.target.value);
                            isValidationSubinput();
                        }}
                    />
                    <button
                        onClick={() => {
                            props.findAddress(location, (data) => {
                                const arr = new Array(0);
                                data.forEach((el, idx) => {
                                    arr.push(el);
                                    console.log(el);
                                });
                                setArr(arr);
                            });
                        }}
                    >
                        <span>검색</span>
                    </button>
                    <span>성별</span>
                    <select
                        name="성별"
                        className="subInput"
                        type="text"
                        placeholder="성별"
                        onChange={(e) => {
                            setGender(e.target.value);
                            isValidationSubinput();
                        }}
                    >
                        <option value="" disabled>
                            성별
                        </option>
                        <option
                            value="male"
                            onChange={() => {
                                setGender(e.target.value);
                                isValidationSubinput();
                            }}
                        >
                            남자
                        </option>
                        <option
                            value="female"
                            onChange={() => {
                                setGender(e.target.value);
                                isValidationSubinput();
                            }}
                        >
                            여자
                        </option>
                    </select>
                </div>
                <div
                    className={
                        searchModal ? "searchModal" : "searchModal hidden"
                    }
                >
                    <span>검색된 목록입니다.</span>
                    <ul>
                        {searchArr.map((el, idx) => (
                            <li key={idx}>
                                <span
                                    onClick={(e) => {
                                        searchOpen(false);
                                        setupAddress(e);
                                    }}
                                >
                                    {el.place_name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loginMid">
                    <span>나이</span>
                    <input
                        name="나이"
                        className="subInput"
                        type="text"
                        placeholder="나이"
                        onChange={(e) => {
                            setAge(e.target.value);
                            isValidationSubinput();
                        }}
                    />

                    <span>선호</span>
                    <select
                        name="선호하는 운동"
                        className="subInput"
                        type="text"
                        placeholder="선호하는 운동"
                        onChange={(e) => {
                            setPreference(e.target.value);
                            isValidationSubinput();
                        }}
                    >
                        <option value="" disabled>
                            선호 운동
                        </option>
                        <option
                            value="ballSports"
                            onClick={() => {
                                setPreference(e.target.value);
                                isValidationSubinput();
                            }}
                        >
                            구기운동
                        </option>
                        <option
                            value="aquaSports"
                            onClick={() => {
                                setPreference(e.target.value);
                                isValidationSubinput();
                            }}
                        >
                            아쿠아스포츠
                        </option>
                        <option
                            value="running"
                            onClick={() => {
                                setPreference(e.target.value);
                                isValidationSubinput();
                            }}
                        >
                            러닝
                        </option>
                        <option
                            value="weight"
                            onClick={() => {
                                setPreference(e.target.value);
                                isValidationSubinput();
                            }}
                        >
                            웨이트
                        </option>
                        <option
                            value="yoga"
                            onClick={() => {
                                setPreference(e.target.value);
                                isValidationSubinput();
                            }}
                        >
                            요가
                        </option>
                        <option
                            value="hiking"
                            onClick={() => {
                                setPreference(e.target.value);
                                isValidationSubinput();
                            }}
                        >
                            하이킹
                        </option>
                        <option
                            value="climbing"
                            onClick={() => {
                                setPreference(e.target.value);
                                isValidationSubinput();
                            }}
                        >
                            클라이밍
                        </option>
                    </select>
                </div>
                <div className="errMsg">
                    <div className={isValidsub ? "ok" : "ok hidden"}>
                        <span>모든 항목을 입력해주세요.</span>
                    </div>
                </div>
                <button
                    className="loginBtn"
                    onClick={() => {
                        signupHandler();
                    }}
                >
                    {" "}
                    회원가입{" "}
                </button>
                <div className="socialBox">
                    <div className="kakao">
                        <img className="kakaoLogo" src="img/kakao-logo.png" />
                        <div
                            className="kakaoText"
                            onClick={() => {
                                alert("기능 준비중!");
                            }}
                        >
                            카카오 계정으로 신규가입
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

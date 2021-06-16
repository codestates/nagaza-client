import React, { Component, useEffect, useState } from "react"; // 프로필 클릭시 옵션 모달창
import { useHistory } from "react-router-dom";
import "./ProfileMenu.css";
import ProfileModal from "./ProfileModal.js";
export default function ProfileMenu(props) {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [isMenuWide, setMenuWide] = useState(false);
    const [isCloseMenu, setCloseMenu] = useState(true);
    const [isCloseIcon, setCloseIcon] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalHeader, setModalHeader] = useState("");

    let optionNames;

    const history = useHistory();
    const whereAmI = location.pathname.toLowerCase();

    switch (whereAmI) {
        case "/mypage":
            if (props.isSignIn) {
                optionNames = ["HOME", "GROUPPAGE", "SIGNOUT"];
            } else {
                optionNames = ["SIGNIN", "SIGNUP"];
            }
            break;
        case "/grouppage":
            if (props.isSignIn) {
                optionNames = ["HOME", "MYPAGE", "SIGNOUT"];
            } else {
                optionNames = ["SIGNIN", "SIGNUP"];
            }
            break;
        case "/landingpage":
            if (props.isSignIn) {
                optionNames = ["MYPAGE", "GROUPPAGE", "SIGNOUT"];
            } else {
                optionNames = ["SIGNIN", "SIGNUP"];
            }
            break;
        default:
            break;
    }
    const activeBtn = (el) => {
        switch (el) {
            case "SIGNIN":
                setModalHeader("로그인");
                openModal();
                break;
            case "SIGNUP":
                setModalHeader("회원가입");
                openModal();
                break;
            case "MYPAGE":
                history.push("/mypage");
                break;
            case "HOME":
                history.push("/landingpage");
                break;
            case "GROUPPAGE":
                history.push("/grouppage");
                break;
            case "SIGNOUT":
                alert("로그아웃이 되었습니다.");
                setModalHeader("로그아웃");
                history.push("/landingpage");
                props.signOut();
                break;
            default:
                break;
        }
    };
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    // onClick={() => {
    //     if (props.isSignIn) {
    //         //로그인 상태일때 : 로그아웃
    //         setModalHeader("로그아웃되었습니다.");
    //         openModal();
    //         signOut();
    //     } else {
    //         //비로그인 상태일때 : 로그인
    //         setModalHeader("로그인");
    //         openModal();
    //     }
    // }}

    return (
        <div className={isMenuWide ? "menu expanded" : "menu"}>
            <div
                className={isCloseMenu ? "icon-menu" : "icon-menu close"}
                onClick={() => {
                    if (isCloseMenu) {
                        setMenuWide(true);
                        setCloseMenu(false);
                        setCloseIcon(false);
                    } else {
                        setMenuWide(false);
                        setCloseMenu(true);
                        setCloseIcon(true);
                    }
                }}
            >
                <div className={isCloseIcon ? "icon" : "icon close"}></div>
            </div>
            {optionNames.map((el) => {
                return (
                    <span
                        className={isCloseMenu ? "menu1 hidden" : "menu1"}
                        key={el}
                        onClick={(e) => {
                            activeBtn(e.target.textContent);
                        }}
                    >
                        <a href="#">{el}</a>
                    </span>
                );
            })}

            <ProfileModal
                isOpen={modalOpen}
                signIn={props.signIn}
                closeModal={closeModal}
                header={modalHeader}
                userdataSave={props.userdataSave}
            >
                <main></main>
            </ProfileModal>
        </div>
    );
}

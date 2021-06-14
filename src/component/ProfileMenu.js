import React, { Component, useEffect, useState } from "react"; // 프로필 클릭시 옵션 모달창
import { useHistory } from "react-router-dom";
import "./ProfileMenu.css";
import ProfileModal from "./ProfileModal.js";
export default function ProfileMenu(props) {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [isMenuWide, setMenuWide] = useState(false);
    const [isCloseMenu, setCloseMenu] = useState(true);
    const [isCloseIcon, setCloseIcon] = useState(true);
    const [isLogin, setLogin] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalHeader, setModalHeader] = useState("");
    const history = useHistory()

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
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
            <span
                className={isCloseMenu ? "menu1 hidden" : "menu1"}
                onClick={() => {
                    if (props.isSignIn) {
                        //로그인 상태일때 : 로그아웃
                        setModalHeader("로그아웃");
                        openModal();
                    } else {
                        //비로그인 상태일때 : 로그인
                        setModalHeader("로그인");
                        openModal();
                    }
                }}
            >
                <a href="#">{props.isSignIn ? "Sign Out" : "Sign In"}</a>
            </span>
            <span
                className={isCloseMenu ? "menu1 hidden" : "menu1"}
                onClick={() => {
                    if (props.isSignIn) {
                        //로그인 상태일때 : 마이페이지
                        setModalHeader("마이페이지");
                        openModal();
                    } else {
                        //비로그인 상태일때 : 회원가입
                        setModalHeader("회원가입");
                        openModal();
                    }
                }}
            >
                <a href="#">{props.isSignIn ? "My Page" : "Sign Up"}</a>
            </span>
            <ProfileModal
                isOpen={modalOpen}
                closeModal={closeModal}
                header={modalHeader}
            >
                <main> </main>
            </ProfileModal>
        </div>
    );
}

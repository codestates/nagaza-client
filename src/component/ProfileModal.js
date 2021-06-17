import React, { useState, useEffect, Redirect, Component } from "react";
import MyPage from "../pages/MyPage.js";
import axios from "axios";
import "./ProfileModal.css";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import { useHistory } from "react-router-dom";

export default function ProfileModal(props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { isOpen, closeModal, header, setModalHeader, openModal } = props;

    let modalContent;
    const [isOpenSignup, setSignup] = useState(false);
    const [isOpenSignin, setSignin] = useState(false);
    const history = useHistory();

    if (header === "회원가입") {
        modalContent = (
            <SignUp
                signIn={props.signIn}
                closeModal={closeModal}
                setModalHeader={setModalHeader}
                openModal={openModal}
                findAddress={props.findAddress}
            ></SignUp>
        );
    } else if (header === "로그인") {
        modalContent = (
            <SignIn
                signIn={props.signIn}
                closeModal={closeModal}
                setModalHeader={setModalHeader}
                openModal={openModal}
            ></SignIn>
        );
    } else if (header === "로그아웃") {
        modalContent = "로그아웃되었습니다.";
    }

    return (
        <div className={isOpen ? "openModal modal" : "modal"}>
            {isOpen ? (
                <section>
                    <header>
                        <button
                            className="close"
                            onClick={() => {
                                closeModal();
                            }}
                        >
                            {" "}
                            x
                        </button>
                    </header>
                    <main>{modalContent}</main>
                    <footer></footer>
                </section>
            ) : null}
        </div>
    );
}

import React, { useState, useEffect, Redirect, Component } from "react";
import MyPage from "../pages/MyPage.js";
import axios from "axios";
import "./ProfileModal.css";

export default function ProfileModal(props) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { isOpen, closeModal, header } = props;

    return (
        <div className={isOpen ? "openModal modal" : "modal"}>
            {isOpen ? (
                <section>
                    <header>
                        {header}
                        <button
                            className="close"
                            onClick={() => {
                                closeModal();
                            }}
                        >
                            X
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        <button
                            className="close"
                            onClick={() => {
                                closeModal();
                            }}
                        >
                            {" "}
                            close{" "}
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
}

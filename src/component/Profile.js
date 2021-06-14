import React, { Component, useEffect, useState } from "react";
import ProfileModal from "./ProfileModal"; // 프로필 클릭시 옵션 모달창
import "./Profile.css";

export default function Profile(props) {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <button
                onClick={() => {
                    openModal();
                }}
            >
                모달팝업
            </button>
            내용을 입력하세요.
            <ProfileModal
                isOpen={modalOpen}
                closeModal={closeModal}
                header="모달창"
            >
                <main> 내용이 입력됩니다. </main>
            </ProfileModal>
        </>
    );
}

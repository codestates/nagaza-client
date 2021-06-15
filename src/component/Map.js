import React, { useEffect, userState, useState } from "react";
// import PropTypes from 'prop-types';
import axios from "axios";
import CreateGroup from "./CreateGroup";

const Map = (props) => {
    useEffect(() => {
        let container = document.getElementById("map");

        let options = {
            center: new kakao.maps.LatLng(
                37.365264512305174,
                127.10676860117488
            ), //지도 센터 잡아 주는 곳
            level: 3, // 지도 스케일 정해주는 곳
        };
        let map = new kakao.maps.Map(container, options);

        let markerPosition = new kakao.maps.LatLng(
            37.365264512305174,
            127.10676860117488
        ); // 위치 기반 그룹 표시
        let marker = new kakao.maps.Marker({
            position: markerPosition,
            clickable: true, // 마커 클릭시 그룹생성 안뜨게
        });
        marker.setMap(map);

        let iwContent = '<div style="padding:0.7rem;"></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
            iwPosition = new kakao.maps.LatLng(33.450701, 126.570667);

        let infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent,
        });

        infowindow.open(map, marker);

        infowindow.open(map, marker);

        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
            // 클릭한 위도, 경도 정보를 가져옵니다
            let latlng = mouseEvent.latLng;
            // 위도 : lating.getLat()
            // 경도 : lating.getLng()
            // props.createGroupState = true
            props.changeGroupState();
            props.getGroupLocation([latlng.getLat(), latlng.getLng()]);
            props.open();
            // console.log(props.isOpen)
        });
    }, []);
    // console.log(props.isOpen)
    return (
        <div className={"map-info"}>
            {props.createGroupState ? (
                <CreateGroup
                    close={props.close}
                    isOpen={props.isOpen}
                    createGroupHandle={props.createGroupHandle}
                    createGroupState={props.createGroupState}
                    location={props.createGroupLocation}
                ></CreateGroup>
            ) : (
                // 모달완성되면 여기를 <div></div>
                <div className={'make-group-message'}>그룹을 생성하려면 지도를 클릭해 주세요</div>
            )}
            <div id="map" style={{ width: "100%", height: "90%" }}></div>
        </div>
    );
};

export default Map;

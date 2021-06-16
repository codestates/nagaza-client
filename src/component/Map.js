import React, { useEffect, userState, useState } from "react";
// import PropTypes from 'prop-types';
import axios from "axios";
import CreateGroup from "./CreateGroup";

const Map = (props) => {

    const isGroupIn = props.groupInfo.length >= 1 ? true : false

    const joinEvent = () => {

        if (!isGroupIn) {
          props.joinGroup(props.groupInfo.username)//groupid o , username x
          alert('그룹에 가입되었습니다')
        }
        else {
          alert('동시에 두개의 그룹에 가입할 수 없습니다.')
        }
      }

    useEffect(() => {
        let container = document.getElementById("map");

        let options = {
            center: new kakao.maps.LatLng(
                37.365264512305174,
                127.10676860117488
            ), //지도 센터 잡아 주는 곳 // props.userLocation
            level: 3, // 지도 스케일 정해주는 곳
        };
        let map = new kakao.maps.Map(container, options);





        const makeMarker = (category, startTime, lat, lng) => {
            let markerPosition = new kakao.maps.LatLng(
                30,
                30
            ); // 위치 기반 그룹 표시
            let marker = new kakao.maps.Marker({
                position: markerPosition,
                clickable: true, // 마커 클릭시 그룹생성 안뜨게
            });
            marker.setMap(map);

            let iwContent = `<div style="padding:0.7rem;">
                                <div class ="marker-category">${category}</div>
                                <div class ="marker-start-time">${startTime}</div>
                                <button class ="marker-join-button" onClick="${joinEvent}">그룹참가</button>
                            </div>`, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                iwPosition = new kakao.maps.LatLng(lat, lng);

            let infowindow = new kakao.maps.InfoWindow({
                position: iwPosition,
                content: iwContent,
            });

            infowindow.open(map, marker);
        }

        props.searchGroupDataOnMap.map((el) => {
            let category = el.category_id
            let startTime = el.start_time
            let location = el.location.slice(1, -1).split(/,\s?/);
            let lat = Number(location[0])
            let lng = Number(location[1])
            makeMarker(category, startTime, lat, lng)
        })

        // props.searchGroupDataOnMap.map((el) => {
        //el정보 분해해서
        // makeMarker(el)
        // })

        makeMarker()


        kakao.maps.event.addListener(map, "click", function (mouseEvent) {
            let latlng = mouseEvent.latLng;
            // 위도 : lating.getLat()
            // 경도 : lating.getLng()
            // props.createGroupState = true
            props.changeGroupState();
            props.getGroupLocation([latlng.getLat(), latlng.getLng()]);
            props.open();
        });
    }, []);
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

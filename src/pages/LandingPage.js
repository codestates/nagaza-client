// import logo from './logo.svg';
import React, { Component } from "react";
import CheckBox from "../component/CheckBox.js";
import MyLocation from "../component/MyLocation.js";
import SignIn from "../component/SignInModal.js";
import SignOut from "../component/SignOut.js";
import SignUp from "../component/SignUp.js";
import Navigation from "../component/NavigationBar.js";
import Header from "../component/Header.js";
import "./LandingPage.css";
import "../App.css";

class landingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <div className="lp-landingPage">
                    <section className="lp-first-page">
                        <div className="lp-header">
                            <Header
                                signIn={this.props.signIn}
                                signOut={this.props.signOut}
                                searchGroup={this.props.searchGroup}
                                isSignIn={this.props.isSignIn}
                            ></Header>
                        </div>
                        <div className="lp-main-content">
                            <div className="description">
                                <div>
                                    <div>지금은 번개같은</div>
                                    <div>운동모임이 필요할 때,</div>
                                    <h2>나가자!</h2>
                                </div>
                            </div>
                            <div>
                                <img src="http://health.chosun.com/site/data/img_dir/2019/04/29/2019042900839_0.jpg"></img>
                            </div>
                        </div>
                    </section>
                    <section className="lp-second-page">
                        <div>카테고리 별로 모이자</div>
                        <div className="lp-category-entry">
                            <div className="lp-category">
                                <img></img>
                                <div>공과 함께하는 시간</div>
                            </div>
                        </div>
                    </section>
                    <section className="lp-third-page">
                        <div>위치로 모이자</div>

                        <footer></footer>
                    </section>
                </div>
            </>
        );
    }
}

export default landingPage;
{
    /* <div className="lander-page">
            <Navigation></Navigation>
            <div className="header">
                <div className="logo-box">
                    <img className="logo" src={"#"}></img>
                </div>
                <button className="profile">profile</button>
            </div>
            <div className="description-and-image">
                <div className="description-part">
                    <div className="description-text">
                        지금은 번개같은 운동모임이 필요할 때
                    </div>
                    <h1 className="description-title">나가자</h1>
                </div>
                <div className="img-part-box">
                    <img className="img-part" src={"#"}></img>
                </div>
            </div>
            <div className="description-and-category">
                <div className="category-title">카테고리 별로 모이자</div>
                <div className="category-box">
                    <div className="category-item">
                        <img className="category-img" src={"#"}></img>
                        <div className="category-text">카테고리 설명</div>
                    </div>
                    <div className="category-item">
                        <img className="category-img" src={"#"}></img>
                        <div className="category-text">카테고리 설명</div>
                    </div>
                    <div className="category-item">
                        <img className="category-img" src={"#"}></img>
                        <div className="category-text">카테고리 설명</div>
                    </div>
                    <div className="category-item">
                        <img className="category-img" src={"#"}></img>
                        <div className="category-text">카테고리 설명</div>
                    </div>
                    <div className="category-item">
                        <img className="category-img" src={"#"}></img>
                        <div className="category-text">카테고리 설명</div>
                    </div>
                    <div className="category-item">
                        <img className="category-img" src={"#"}></img>
                        <div className="category-text">카테고리 설명</div>
                    </div>
                    <div className="category-item">
                        <img className="category-img" src={"#"}></img>
                        <div className="category-text">카테고리 설명</div>
                    </div>
                    <div className="category-item">
                        <img className="category-img" src={"#"}></img>
                        <div className="category-text">카테고리 설명</div>
                    </div>
                </div>
            </div>
            <div className="desciption-and-map">
                <div className="map-description">
                    <div className="map-description-top">
                        내 위치로 다함께 빠르게 모이자
                    </div>
                    <div className="map-description-middle">
                        나가자 서비스는 위치 정보를 기반으로 그룹을 만들어
                        줍니다.
                    </div>
                    <div className="map-description-bottom">
                        정기적인 모임을 가져야 하는 동호회와는 다르게 빠르게
                        함께 운동할 수 있는 메이트들을 매칭해 주는 서비스
                        입니다.
                    </div>
                </div>
                <div className="map-img-box">
                    <img className="map-img" src={"#"}></img>
                </div>
            </div>
            <div className="desciption-and-endCloseGroup">
                <div className="endCloseGroup-title">마감시간 임박한 그룹</div>
                <div className="endCloseGroup-box">
                    <div className="endCloseGroup-item"></div>
                    <div className="endCloseGroup-item"></div>
                    <div className="endCloseGroup-item"></div>
                    <div className="endCloseGroup-item"></div>
                </div>
            </div>
</div> */
}

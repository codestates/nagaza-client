// import logo from './logo.svg';
import React, { Component } from "react";
import Header from "../component/Header.js";
import Footer from "../component/Footer.js";
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
                    <div
                        className="lp-header"
                    >
                        <Header
                            className="lp-header-component"
                            signIn={this.props.signIn}
                            signOut={this.props.signOut}
                            searchGroup={this.props.searchGroup}
                            isSignIn={this.props.isSignIn}
                        ></Header>
                    </div>
                    <section className="lp first-page">
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
                    <section className="lp second-page">
                        <div className="lp-category-entry">
                            <div>카테고리 별로 모이자</div>
                            <div className="category-entry first">
                                <div className="lp-category">
                                    <img src="/img/구기.jpg"></img>
                                    <div>구기 운동</div>
                                </div>
                                <div className="lp-category">
                                    <img src="/img/수영.jpeg"></img>
                                    <div>아쿠아스포츠</div>
                                </div>
                                <div className="lp-category">
                                    <img src="/img/웨이트.jpeg"></img>
                                    <div>웨이트</div>
                                </div>
                                <div className="lp-category">
                                    <img src="/img/러닝.jpeg"></img>
                                    <div>러닝</div>
                                </div>
                            </div>
                            <div className="category-entry second">
                                <div className="lp-category">
                                    <img src="/img/요가.jpeg"></img>
                                    <div>요가</div>
                                </div>
                                <div className="lp-category">
                                    <img src="/img/등산.jpeg"></img>
                                    <div>등산</div>
                                </div>
                                <div className="lp-category">
                                    <img src="/img/사이클링.jpeg"></img>
                                    <div>사이클링</div>
                                </div>
                                <div className="lp-category">
                                    <img src="/img/클라이밍.jpeg"></img>
                                    <div>클라이밍</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="lp third-page">
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
                        <Footer></Footer>
                    </section>
                </div>
            </>
        );
    }
}

export default landingPage;

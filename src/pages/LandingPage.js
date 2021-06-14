// import logo from './logo.svg';
import React, { Component } from "react";
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

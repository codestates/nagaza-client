import React, { Component } from "react";
import GroupPage from "./pages/GroupPage";
import LandingPage from "./pages/LandingPage";
import MyPage from "./pages/MyPage";
// import logo from "./logo.svg";

import axios from "axios";

import "./App.css";
import {
    Switch,
    BrowserRouter,
    Route,
    Redirect,
    withRouter,
} from "react-router-dom";

class App extends Component {
    state = {
        isConnected: false,
        data: "",
    };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios
            .get(
                "http://ec2-52-79-253-209.ap-northeast-2.compute.amazonaws.com",
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res);
                this.setState({
                    isConnected: true,
                    data: res.data,
                });
            })
            .catch((err) => console.log(err));
    }

// <<<<<<< HEAD
//     render() {
//         const { isConnected, data } = this.state;
//         return (
//             <div>
//                 <div>
//                     {isConnected ? (
//                         <div>서버에 연결되었습니다</div>
//                     ) : (
//                         <div></div>
//                     )}
//                     {data ? (
//                         <div>{data}</div>
//                     ) : (
//                         <div>데이터를 받아오지 못했습니다</div>
//                     )}
//                 </div>
//                 <BrowserRouter>
//                     <Switch>
//                         <Route
//                             path="/Landingpage"
//                             render={() => <LandingPage />}
//                         />
//                         <Route path="/Grouppage" render={() => <GroupPage />} />
//                         <Route path="/Mypage" render={() => <MyPage />} />
//                     </Switch>
//                 </BrowserRouter>
//             </div>
//         );
//     }
// =======
  render() {
    const { isConnected, data } = this.state;
    return (
      <div>
        <div>
          {/* {isConnected ? <div>서버에 연결되었습니다</div> : <div></div>}
          {data ? <div>{data}</div> : <div>데이터를 받아오지 못했습니다</div>} */}
        </div>
        <BrowserRouter>
          <Switch>
            <Route path="/Landingpage" render={() => <LandingPage />} />
            <Route path="/Grouppage" render={() => <GroupPage />} />
            <Route path="/Mypage" render={() => <MyPage />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
// >>>>>>> a6d4a2262e908e705350a6eae0b70c2509e58581
}

export default App;

import React from 'react';
import GroupPage from './pages/GroupPage';
import LandingPage from './pages/LandigPage';
import MyPage from './pages/MyPage';
import logo from './logo.svg'
import './App.css';
import { Switch, BrowserRouter, Route, Redirect, withRouter } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/Landingpage' render={() => <LandingPage />} />
          <Route path='/Grouppage' render={() => <GroupPage />} />
          <Route path='/Mypage' render={() => <MyPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

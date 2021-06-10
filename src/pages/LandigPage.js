// import logo from './logo.svg';
import React from "react";
import axios from "axios"; // axios
require("dotenv").config();
import CheckBox from "../component/CheckBox.js";
import MyLocation from "../component/MyLocation.js";
import SignIn from "../component/SignIn.js";
import SignOut from "../component/SignOut.js";
import SignUp from "../component/SignUp.js";

function landingPage() {
  function isConnected() {
    axios
      .get(`${process.env.REACT_APP_API_URL}`, {
        withCredentials: true,
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div>
      <button
        onClick={() => {
          isConnected();
        }}
      ></button>
    </div>
  );
}

export default landingPage;

import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Ads from "../components/Ads";
import Feed from "../components/Feed";
import Nav from "../components/Nav";
import "../scss/home.scss";

export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      <div id="section">
        <div id="section-left">
          <button>로그인</button>
        </div>

        <div id="section-right">
          <div id="container-controller">
            <div id="sorter">
              <button>오름차순</button>
              <button className="active">내림차순</button>
            </div>
            <button id="filter">필터</button>
          </div>
          <Feed />
          <Feed />
          <Feed />
          <Ads />
          <Feed />
          <Feed />
          <Feed />
          <Ads />
          <Feed />
          <Feed />
        </div>
      </div>
    </React.Fragment>
  );
}

import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Comment from "../components/Ads";
import Nav from "../components/Nav";
import "../scss/mainPage.scss";

export default function MainPage(props) {
  useEffect(() => {
    console.log(props);
    console.log(props.match.params.id);
  });

  return (
    <React.Fragment>
      <Nav />
      <div id="section">
        <div id="container-post">
          <div className="title">
            Title Title Title Title Title Title Title Title Title
          </div>
          <div className="contents">
            contents contents contents contents contents contents contens
            contents contents contents contents contents contents contents
            contens contents
          </div>
          <div className="footer">created_at(2020-02-02)</div>
        </div>

        <div id="container-comment">
          <div className="header">답변 2</div>
          <Comment />
          <Comment />
        </div>
      </div>
    </React.Fragment>
  );
}

import React, { useEffect, useState } from "react";
import "../scss/modal.scss";

export default function Feed() {
  return (
    <React.Fragment>
      <div id="container-modal">
        <div className="header">
          <button>X</button>
        </div>

        <div className="section">
          <div className="title">필터</div>
          <input type="checkbox">category_name</input>
          <input type="checkbox">category_name</input>
          <input type="checkbox">category_name</input>
          <button>저장하기</button>
        </div>
      </div>

      <div id="background-modal" />
    </React.Fragment>
  );
}

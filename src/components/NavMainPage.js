import React from "react";
import { withRouter } from "react-router-dom";

function Nav({ history }) {
  const handleHistoryEvent = (endpoint) => {
    history.push(`/${endpoint}`);
  };

  return (
    <div id="navigator" className="main-page">
      <span className="container">
        <span>[5월 13일] 정진규</span>
        <button
          onClick={() => {
            handleHistoryEvent("");
          }}
        >
          &lt;
        </button>
      </span>
    </div>
  );
}

export default withRouter(Nav);

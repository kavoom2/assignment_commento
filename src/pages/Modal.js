import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../actions/index";
import "../scss/modal.scss";

export default function Modal() {
  const dispatch = useDispatch();
  const modalStatus = useSelector((s) => s.modalStatusReducer.modalStatus);

  const handleModalStatus = (status) => {
    dispatch(Actions.setModalStatus(status));
  };

  if (!modalStatus) return "";

  return (
    <>
      <div id="background-modal">
        <div id="container-modal">
          <div className="header">
            <button onClick={() => handleModalStatus(false)}>X</button>
          </div>

          <div className="section">
            <div className="title">필터</div>

            <label>
              <input type="checkbox" name="name" value="value" defaultChecked />
              checkbox name
            </label>

            <label>
              <input type="checkbox" name="name" value="value" defaultChecked />
              checkbox name
            </label>

            <label>
              <input type="checkbox" name="name" value="value" defaultChecked />
              checkbox name
            </label>
          </div>
          <div className="footer">
            <button>저장하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

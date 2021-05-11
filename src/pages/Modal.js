import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../actions/index";
import "../scss/modal.scss";

export default function Modal() {
  const dispatch = useDispatch();
  const categories = useSelector((s) => s.categoriesReducer.categories);
  const [checkedCategories, setCheckedCategories] = useState([]);

  useEffect(() => {
    // 스크롤 이벤트를 방지합니다.
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  });

  useEffect(() => {
    // 선택된 카테고리를 업데이트합니다.
    const checkedIds = categories
      .filter((el) => {
        if (el.checked) return true;
        else return false;
      })
      .map((el) => {
        return el.id;
      });
    setCheckedCategories(checkedIds);
  }, [categories]);

  const handleModalStatus = (status) => {
    dispatch(Actions.setModalStatus(status));
  };

  const handleBackgroundEvent = (event) => {
    if (event.target.id === "background-modal")
      dispatch(Actions.setModalStatus(false));
  };

  const handleConfirm = () => {
    const newCategories = categories.map((el) => {
      const id = el.id;
      if (checkedCategories.includes(id)) {
        return { id: el.id, name: el.name, checked: true };
      } else {
        return { id: el.id, name: el.name, checked: false };
      }
    });

    dispatch(Actions.setCategories(newCategories));
    dispatch(Actions.setModalStatus(false));
  };

  const handleOnChange = () => {
    const nodes = [...document.getElementsByClassName("modal-checkbox")];
    const checkedIds = nodes
      .filter((node) => {
        if (node.checked) return true;
        else return false;
      })
      .map((node) => {
        return Number(node.value);
      });

    setCheckedCategories(checkedIds);
  };

  const renderCategories = () => {
    return categories.map((el) => {
      const { id, name, checked } = el;
      return (
        <label key={id}>
          <input
            className="modal-checkbox"
            type="checkbox"
            name={name}
            value={id}
            defaultChecked={checked ? true : false}
            onChange={handleOnChange}
          />
          {name}
        </label>
      );
    });
  };

  return (
    <>
      <div id="background-modal" onClick={handleBackgroundEvent}>
        <div id="container-modal">
          <div className="header">
            <button onClick={() => handleModalStatus(false)}>X</button>
          </div>

          <div className="section">
            <div className="title">필터</div>
            {renderCategories()}
          </div>

          <div className="footer">
            <button onClick={handleConfirm}>저장하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ads from "../components/Ads";
import Feed from "../components/Feed";
import Nav from "../components/Nav";
import { Actions } from "../actions/index";
import { Fetches } from "../utilities/index";
import "../scss/home.scss";

export default function Home() {
  const dispatch = useDispatch();

  const [order, setOrder] = useState("asc");
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const modalStatus = useSelector((s) => s.modalStatusReducer.modalStatus);
  const categories = useSelector((s) => s.categoriesReducer.categories);

  const handleModalStatus = (status) => {
    dispatch(Actions.setModalStatus(status));
  };

  useEffect(() => {
    const asyncFunc = async () => {
      // 1. 카테고리를 가져옵니다.
      const tempCategories = await Fetches.getCategory();
      await dispatch(
        Actions.setCategories(
          tempCategories.map((el) => {
            return { ...el, checked: true };
          })
        )
      );

      // 2. 페이지 리스트를 가져옵니다.
      const tempItems = [];
      for (let i = 0; i < 10; i++) {}
      const categoryIds = tempCategories.map((el) => el.id);
      Fetches.getPosts(5, 10, "asc", categoryIds);

      setCount(10);
      setIsLoading(false);
    };

    asyncFunc();
  }, []);

  const handleOrder = (order) => {
    setOrder(order);
  };

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
              <button
                className={order === "asc" ? "active" : ""}
                onClick={() => handleOrder("asc")}
              >
                오름차순
              </button>
              <button
                className={order === "desc" ? "active" : ""}
                onClick={() => handleOrder("desc")}
              >
                내림차순
              </button>
            </div>
            <button id="filter" onClick={() => handleModalStatus(true)}>
              필터
            </button>
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

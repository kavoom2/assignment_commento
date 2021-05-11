import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Ads from "../components/Ads";
import Feed from "../components/Feed";
import Nav from "../components/Nav";
import { Actions } from "../actions/index";
import { Fetches } from "../utilities/index";
import "../scss/home.scss";

export default function Home({ history }) {
  const dispatch = useDispatch();
  const categories = useSelector((s) => s.categoriesReducer.categories);

  const [items, setItems] = useState([]);
  const [feedPages, setFeedPages] = useState(1);
  const [adsPages, setAdsPages] = useState(1);
  const [order, setOrder] = useState("asc");
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const getItems = (
    feedLimits,
    adsLimits,
    newFeedPage,
    newAdsPage,
    isInit,
    maxLimits
  ) => {
    if (categories.length === 0) return;

    const asyncFunc = async () => {
      try {
        let newItems = [];
        let prevTotalCount, curTotalCount;

        // 초기화시 0부터 카운트를 시작합니다.
        if (isInit) {
          setIsLoading(true);
          prevTotalCount = 0;
          curTotalCount = prevTotalCount + maxLimits;
        } else {
          newItems = Object.assign([], items);
          prevTotalCount = newItems.length;
          curTotalCount = newItems.length + maxLimits;
        }

        // 게시물을 불러옵니다.
        const newFeedItems = await Fetches.getPosts(
          newFeedPage,
          feedLimits,
          order,
          categories.filter((el) => el.checked === true).map((el) => el.id)
        );

        let newAdsItems;
        if (adsPages === 2) {
          newAdsItems = (await Fetches.getAds(1, 5)).slice(2);
        } else newAdsItems = await Fetches.getAds(newAdsPage, adsLimits);

        for (let i = prevTotalCount + 1; i <= curTotalCount; i++) {
          if (i % 4 === 0) {
            const item = newAdsItems.shift();
            if (!item) continue;

            item.type = "ads";
            newItems.push(item);
          } else {
            const item = newFeedItems.shift();
            if (!item) break;

            item.type = "feeds";
            newItems.push(item);
          }
        }

        const totalAdsPages = Math.floor(curTotalCount / 4);
        const totalFeedPages = curTotalCount - totalAdsPages;

        setFeedPages(totalFeedPages);
        setAdsPages(totalAdsPages);
        setItems(newItems);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    asyncFunc();
  };

  useEffect(() => {
    // 카테고리 불러오기
    const asyncFunc = async () => {
      try {
        const tempCategories = await Fetches.getCategory();
        await dispatch(
          Actions.setCategories(
            tempCategories.map((el) => {
              return { ...el, checked: true };
            })
          )
        );
      } catch (err) {
        console.log(err);
      }
    };

    asyncFunc();
  }, []);

  useEffect(() => {
    // 카테고리, 필터 변경시 목록 불러오기
    getItems(8, 2, 1, 1, true, 10);
  }, [categories, order]);

  useEffect(() => {
    // 스크롤 이벤트 헨들러 등록 및 삭제
    const scrollEvent = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
        setIsEnd(true);
      else setIsEnd(false);
    };

    window.addEventListener("scroll", scrollEvent, true);
    return () => {
      window.removeEventListener("scroll", scrollEvent, true);
    };
  }, []);

  useEffect(() => {
    // 스크롤 최대치 도달시 렌더링 이벤트
    if (isEnd) getItems(feedPages, adsPages, 2, 2, false, 10);
  }, [isEnd]);

  const handleOrder = (order) => {
    setOrder(order);
  };

  const handleModalStatus = (status) => {
    dispatch(Actions.setModalStatus(status));
  };

  const handleHistoryEvent = (id) => {
    history.push(`/${id}`);
    console.log(id);
  };

  const renderLists = () => {
    if (items.length === 0 || isLoading) return "";

    const result = [];

    for (let i = 0; i < items.length; i++) {
      const el = items[i];

      if (el.type === "feeds") {
        const categoryName = categories.filter(
          (category) => category.id === el.category_id
        )[0].name;
        const { id, user_id, created_at, title, contents } = el;
        const item = (
          <Feed
            key={i}
            categoryName={categoryName}
            id={id}
            user_id={user_id}
            created_at={created_at.slice(0, 10)}
            title={title}
            contents={contents}
            handleHistoryEvent={() => handleHistoryEvent(id)}
          />
        );
        result.push(item);
      } else if (el.type === "ads") {
        const { id, title, contents, img } = el;
        const item = (
          <Ads key={i} id={id} title={title} contents={contents} img={img} />
        );
        result.push(item);
      }
    }

    return result;
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
          {isLoading ? "불러오는 중입니다..." : renderLists()}
        </div>
      </div>
    </React.Fragment>
  );
}

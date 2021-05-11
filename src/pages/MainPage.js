import React, { useState, useEffect } from "react";
import Comment from "../components/Comment";
import Nav from "../components/Nav";
import { Fetches } from "../utilities/index";
import "../scss/mainPage.scss";

export default function MainPage(props) {
  const [feed, setFeed] = useState({});

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const id = props.match.params.id;
        const feed = await Fetches.getFeed(id);
        setFeed(feed);
      } catch (err) {
        console.log(err);
      }
    };

    asyncFunc();
  }, [props.match.params.id]);

  const renderComments = () => {
    const comments = feed.reply;

    return comments.map((el) => {
      const { id, contents, created_at } = el;
      const user_name = el.user.name;

      return (
        <Comment
          key={id}
          user_name={user_name}
          contents={contents}
          created_at={created_at}
        />
      );
    });
  };

  if (Object.keys(feed).length === 0)
    return (
      <React.Fragment>
        <Nav />
        <div id="section">
          <div id="section-right"></div>
        </div>
      </React.Fragment>
    );

  return (
    <React.Fragment>
      <Nav />
      <div id="section">
        <div id="section-right">
          <div id="container-post">
            <div className="title">{feed.title}</div>
            <div className="contents">{feed.contents}</div>
            <div className="footer">{feed.created_at.slice(0, 10)}</div>
          </div>

          <div id="container-comment">
            <div className="header">
              답변
              <span className="highlight">{` ${feed.reply.length}`}</span>
            </div>
            {renderComments()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

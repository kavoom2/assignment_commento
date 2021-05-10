import React, { useEffect, useState } from "react";

export default function Comment() {
  return (
    <div className="container-feed">
      <div className="category">
        <span className="category-name">category_name</span>
        <span className="category-id">id</span>
      </div>
      <div className="info">
        <span className="info-userId">user_id</span>
        <span className="info-createdAt">created_at(2020-02-02)</span>
      </div>
      <div className="title">
        Title Title Title Title Title Title Title Title Title Title Title Title
        Title Title Title Title Title Title Title Title Title Title Title Title
        Title Title Title Title Title Title Title Title Title Title Title Title
        Title Title Title Title Title Title Title Title Title
      </div>
      <div className="contents">
        contents contents contents contents contents contents contens contents
        contents contents contents contents contents contents contens contents
      </div>
    </div>
  );
}

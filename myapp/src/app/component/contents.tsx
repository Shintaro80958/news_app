'use client'

import NewsCard from "./news_card";
import { getNewsData } from "../../../lib/news_api";
import React, { useState, useEffect } from "react";

export default function Contents() {
  const [news_data, setNewsData] = useState([]);

  useEffect(() => {
    getNewsData().then((data) => {
      setNewsData(data);
      localStorage.setItem("foo", JSON.stringify(news_data));
    });
  }, [news_data]);

  return (
    <div>
      {news_data.map((item, index) => {
        return <NewsCard data={item} key={index} index={index} mystate={news_data} />;
      })}
    </div>
  );
}

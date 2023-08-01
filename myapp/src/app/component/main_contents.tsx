'use client'

import Title from "./title";
import data from "../data/data.json";
import NewsImage from "./news_image";
import Description from "./description";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


export function MainContents() {
  const searchParams = useSearchParams();
  const index: number = Number(searchParams.get("index"));

  const [news_data, setNewsData] = useState<[]>(JSON.parse(localStorage.getItem('foo')));

  const selected_news_data = news_data[index];

  return (
    <div className="grid container mx-auto my-5 gap-y-10">
      <Title title={selected_news_data.title} />
      <NewsImage src={selected_news_data.urlToImage} />
      <Description description={selected_news_data.content} />
    </div>
  );
}

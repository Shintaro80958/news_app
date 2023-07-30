"use client";

import Title from "./title";
import data from "../data/data.json";
import NewsImage from "./news_image";
import Description from "./description";
import { useSearchParams } from "next/navigation";

export function MainContents() {
  const searchParams = useSearchParams();
  const index: number = Number(searchParams.get("index"));

  const selected_news_data = data[index];

  return (
    <div className="grid container mx-auto my-5 gap-y-10">
      <Title title={selected_news_data.title} />
      <NewsImage src={selected_news_data.src} />
      <Description description={selected_news_data.description} />
    </div>
  );
}

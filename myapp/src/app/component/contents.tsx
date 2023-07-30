import NewsCard from "./news_card";
import data from "../data/data.json";

export default function Contents() {
  return (
    <div>
      {data.map((item, index) => {
        return <NewsCard data={item} key={index} index={index} />;
      })}
    </div>
  );
}

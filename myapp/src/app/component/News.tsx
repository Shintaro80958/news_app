import NewsImage from "./news_image";
import Title from "./title";
import Description from "./description";

export default function News(props) {
  const src = props.data.src;
  const title = props.data.title;
  const description = props.data.description;
  return (
    <div className="grid grid-cols-4 px-6 py-4 mx-8 my-4 bg-slate-50 rounded">
      <div className="col-span-1">
        <NewsImage src={src} />
      </div>
      <div className="col-span-3 px-4">
        <Title title={title} />
        <Description description={description} />
      </div>
    </div>
  );
}

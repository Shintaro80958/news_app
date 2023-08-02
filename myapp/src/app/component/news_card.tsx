import NewsImage from "./news_image";
import Title from "./title";
import Description from "./description";
import Link from "next/link";

interface Data {
  urlToImage: String;
  title: String;
  description: String;
  content: String;
}

interface Props {
  data: Data;
  index: number;
}

export default function NewsCard(props: Props) {
  const src: String = props.data.urlToImage;
  const title: String = props.data.title;
  const description: String = props.data.description;
  const index: number = props.index;

  return (
    <Link
      href={{
        pathname: "/news",
        query: { index: index },
      }}
      className="grid grid-cols-4 px-6 py-4 mx-8 my-4 bg-slate-50 rounded"
    >
      <div className="col-span-1">
        <NewsImage src={src} />
      </div>
      <div className="col-span-3 px-4">
        <Title title={title} />
        <Description description={description} />
      </div>
    </Link>
  );
}

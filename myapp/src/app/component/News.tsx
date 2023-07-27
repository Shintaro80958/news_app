import NewsImage from "./image";
import Title from "./title";
import Description from "./description";

export default function News(props) {
  const src = props.data.src;
  const title = props.data.title;
  const description = props.data.description;
  return (
    <div>
      <NewsImage src={src} />
      <Title title={title} />
      <Description description={description}/>
    </div>
  );
}

import Header from "./component/header";
import Contents from "./component/contents";

export default function Home() {
  const isNewsPage = false;
  return (
    <div>
      <Header isNewsPage={isNewsPage} />
      <Contents />
    </div>
  );
}

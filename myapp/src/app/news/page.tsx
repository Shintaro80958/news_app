import Header from "../component/header";
import { MainContents } from "../component/main_contents";

export default function News() {
  const isNewsPage: boolean = true;
  return (
    <div>
      <Header isNewsPage={isNewsPage} />
      <MainContents />
    </div>
  );
}

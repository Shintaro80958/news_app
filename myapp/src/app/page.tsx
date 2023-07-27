import Image from "next/image";
import Header from "./component/headear";
import Contents from "./component/contents";

export default function Home() {
  return (
    <div>
      <Header />
      <Contents />
    </div>
  );
}

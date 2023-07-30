import Image from "next/image";

const Logo = (props) => (
  <Image src="/penguin.jpeg" alt="logo" width={300} height={300} />
);

export default function NewsImage(props) {
  return (
    <div className="">
      <Logo />
    </div>
  );
}

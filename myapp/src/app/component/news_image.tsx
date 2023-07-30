import Image from "next/image";

const Logo = (props) => (
  <Image
    src="/penguin.jpeg"
    alt="logo"
    width={300}
    height={300}
    className="mx-auto"
  />
);

export default function NewsImage(props) {
  return (
    <div>
      <Logo />
    </div>
  );
}

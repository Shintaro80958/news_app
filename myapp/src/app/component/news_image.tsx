import Image from "next/image";

interface Props {
  src: String;
}

export default function NewsImage(props: Props) {
  const src: String = props.src;
  return (
    <div>
      <img
        src={src}
        alt="news image"
        width={500}
        height={400}
        className="mx-auto rounded"
      />
    </div>
  );
}

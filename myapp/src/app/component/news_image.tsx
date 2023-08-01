import Image from "next/image";

export default function NewsImage(props) {
  const src = props.src;
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

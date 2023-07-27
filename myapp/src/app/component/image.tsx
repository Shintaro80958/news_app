import data from "../data/data.json"
import Image from 'next/image';

const Logo = () =>  (
    <Image
      src="/penguin.jpeg"
      alt="logo"
      width={128}
      height={128}
   />
  )

export default function NewsImage() {
    const src = data.src;
    return (
        <div>
            <Logo/>
        </div>
    );
  }
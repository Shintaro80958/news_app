import Image from 'next/image';

const Logo = (props) =>  (
    <Image
      src="/penguin.jpeg"
      alt="logo"
      width={128}
      height={128}
   />
  )

export default function NewsImage(props) {
    return (
        <div>
            <Logo/>
        </div>
    );
  }
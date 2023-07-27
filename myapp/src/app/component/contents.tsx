import News from "./News"
import data from "../data/data.json"
import Image from 'next/image';



export default function Contents() {
    return (
      <div>
          <News data={data}/>
      </div>
    )
  }
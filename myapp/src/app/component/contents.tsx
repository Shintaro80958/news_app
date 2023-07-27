import News from "./News"
import data from "../data/data.json"

export default function Contents() {
    return (
      <div>
        {data.map((item, index)=>{
            return <News data={item} key={index}/>
        })}
      </div>
    )
  }
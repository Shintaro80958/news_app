import data from "../data/data.json"

export default function Description() {
    const  description = data.description;
    return (
      <div>
        <p>{description}</p>
      </div>
    );
  }
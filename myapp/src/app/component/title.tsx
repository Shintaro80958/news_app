import data from "../data/data.json"

export default function Title() {
    const title = data.title;
    return (
      <div>
        <p>{title}</p>
      </div>
    );
  }
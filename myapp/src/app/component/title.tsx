interface Props {
  title: String;
}

export default function Title(props: Props) {
  return (
    <div>
      <h1 className="text-3xl">{props.title}</h1>
    </div>
  );
}

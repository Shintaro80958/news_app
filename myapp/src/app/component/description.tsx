interface Props {
  description: String;
}

export default function Description(props: Props) {
  return (
    <div className="py-2">
      <p>{props.description}</p>
    </div>
  );
}

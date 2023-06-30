interface Props {
  count: number;
  image: string;
}

const Segment = ({ count, image }: Props) => {
  return (
    <div className="w-200 h-50 flex flex-row">
      <img src={image}></img>
      <h1>{count}</h1>
    </div>
  );
};

export default Segment;

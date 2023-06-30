import "../index.css";

interface Props {
  count: number;
  image: string;
}

const Segment = ({ count, image }: Props) => {
  return (
    <div className="w-200 h-50 flex flex-row skew-x-[-15deg] border-solid border-gray-500 border-2 font-['Monomaniac_One',sans-serif]">
      <div className="  bg-gray-700 h-full w-full">
        <img
          src={image}
          className="box-border overflow-hidden skew-x-[15deg] h-12 w-12"></img>
      </div>

      <h1 className="skew-x-[15deg] mx-2">{count}</h1>
    </div>
  );
};

export default Segment;

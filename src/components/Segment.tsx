import "../index.css";

interface Props {
  count: number;
  image: string;
}

const Segment = ({ count, image }: Props) => {
  return (
    <div className="w-[120px] h-50 flex flex-row skew-x-[-15deg] border-solid border-gray-500 border-2 font-['Monomaniac_One',sans-serif] justify-between items-center">
      <div className=" bg-gray-700 h-full w-[1fr] box-border overflow-hidden flex flex-col justify-center items-center">
        <img
          src={image}
          className="box-border  skew-x-[15deg] h-12 w-12 m-1"></img>
      </div>

      <h1 className="md:text-2xl text-1xl skew-x-[15deg] w-[1fr] mx-auto">
        {count}
      </h1>
    </div>
  );
};

export default Segment;

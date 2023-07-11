import "../index.css";

interface Props {
  count: string;
  image: string;
}

const Segment = ({ count, image }: Props) => {
  return (
    <div className="mr-2 md:w-[120px] h-50  w-[60px] flex flex-col md:flex-row skew-x-[-15deg] border-solid border-gray-500 border-2 font-['Monomaniac_One',sans-serif] justify-between items-center">
      <div className=" bg-gray-700 h-full md:w-[50%] w-full box-border overflow-hidden flex flex-col justify-center items-center">
        <img
          src={image}
          className="box-border  skew-x-[15deg] md:h-12 md:w-12 h-10 w-10 m-1 "></img>
      </div>
      <div className="w-[50%] flex flex-row justify-center mx-1">
        <h1 className=" md:text-2xl  text-[16px] skew-x-[15deg] my-2 md:my-0">
          {count}
        </h1>
      </div>
    </div>
  );
};

export default Segment;

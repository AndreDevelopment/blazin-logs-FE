import "../index.css";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";

interface Props {
  onRefresh: () => void;
  onUpdate: () => void;
}

const NavBar = ({ onRefresh, onUpdate }: Props) => {
  return (
    <div className="w-full py-4 px-4 bg-gray-800">
      <div className=" mx-auto flex flex-row justify-between items-center">
        <h1 className="md:text-4xl text-3xl font-['Carter_One',sans-serif] ">
          Blazin' Brawler Logs
        </h1>
        <div className="p-4 flex flex-row space-x-2">
          <button
            className="p-2 border-solid border-2 border-green rounded-md text-green hover:bg-gray-600"
            onClick={onRefresh}>
            <BiRefresh />
          </button>
          <button
            className="p-2 border-solid border-2 border-red rounded-md text-red hover:bg-gray-600 "
            onClick={onUpdate}>
            <AiOutlineArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import "../index.css";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineArrowUp } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="w-full py-8 px-4 bg-black">
      <div className=" mx-auto flex flex-row justify-between items-center">
        <h1 className="md:text-4xl text-3xl font-['Carter_One',sans-serif]">
          Blazin' Brawler Logs
        </h1>
        <div className="p-4 flex flex-row space-x-2">
          <button className="p-2 border-solid border-2 border-green-700 rounded-md text-green-700 hover:bg-slate-700">
            <BiRefresh />
          </button>
          <button className="p-2 border-solid border-2 border-red-700 rounded-md text-red-700 hover:bg-slate-700 ">
            <AiOutlineArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

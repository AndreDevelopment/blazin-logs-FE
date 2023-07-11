import { Dispatch, SetStateAction, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const StatSelector = ({ selected, setSelected }: Props) => {
  const options = ["Total Battles", "Victories", "Win Rate"];

  const [active, setActive] = useState(false);
  return (
    <div className="flex flex-col justify-start items-center w-[200px] text-2xl font-['Monomaniac_One',sans-serif] bg-gray-700 p-2 border-solid border-gray-500 border-2">
      <button
        className="flex flex-row space-x-2 items-center"
        onClick={() => setActive(!active)}>
        <h1>{selected}</h1>
        <div>
          <BiChevronDown />
        </div>
      </button>
      {active && (
        <ul className="flex flex-col items-center absolute bg-gray-700 z-[1] mt-10 w-[200px] border-solid border-gray-500 border-2 border-t-0 pb-2">
          {options.map((option) => (
            <li className="hover:bg-gray-600 px-2">
              <span
                className="hover:cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setActive(false);
                }}>
                {option}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatSelector;

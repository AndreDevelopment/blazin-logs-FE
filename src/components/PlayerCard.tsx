import { useState } from "react";
import { BattleWin } from "../hooks/useBattleWin";

import "../index.css";
import StatCard from "./StatCard";
interface Props {
  battleWin: BattleWin;
  selectedStat: string;
}

const PlayerCard = ({ battleWin, selectedStat }: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const gameModes = [
    ["gemGrab", "soloShowdown", "bounty", "brawlBall"],
    ["hotZone", "duoShowdown", "knockout", "takedown"],
    ["wipeout", "duels", "heist", "volleyBrawl"],
  ];

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= gameModes.length) {
      newIndex = gameModes.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="w-[900px] flex md:flex-row flex-col font-['Monomaniac_One',sans-serif] mb-4 justify-between items-center">
      <div className="flex flex-col md:mb-0 mb-2 items-center md:items-start">
        <h1
          style={{
            color: "#" + battleWin.player.nameColor.substring(4),
          }}
          className="md:text-3xl text-2xl">
          {battleWin.player.name}
        </h1>
        <div className="flex flex-row">
          <h2 className="text-gray-300 mr-2">W/R: </h2>
          <h2>{battleWin.winRate.toFixed(2)}</h2>
        </div>
        <div className="flex flex-row">
          <h2 className="text-gray-300 mr-2">Total Battles: </h2>
          <h2>{battleWin.totalBattles}</h2>
        </div>
      </div>

      <div className="flex flex-row w-[700px]">
        <button
          className="p-2 border-solid border-2 border-gray-500 rounded-md text-1xl hover:bg-gray-600"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}>
          &lt;
        </button>

        <div className="overflow-hidden w-[600px] ">
          <div
            className="whitespace-nowrap duration-[0.3s] transition-transform "
            style={{ transform: `translate(-${activeIndex * 100}%)` }}>
            {gameModes.map((card, idx) => (
              <StatCard
                key={idx}
                gameModes={card}
                wins={battleWin.wins}
                selectedStat={selectedStat}
              />
            ))}
          </div>
        </div>

        <button
          className="p-2 border-solid border-2 border-gray-500 rounded-md text-1xl  hover:bg-gray-600"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;

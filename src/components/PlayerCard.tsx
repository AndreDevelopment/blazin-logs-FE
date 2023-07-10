import { BattleWin } from "../hooks/useBattleWin";

import "../index.css";
import StatCard from "./StatCard";
interface Props {
  battleWin: BattleWin;
}

const PlayerCard = ({ battleWin }: Props) => {
  const gameModes = [["gemGrab", "soloShowdown", "duoShowdown", "brawlBall"]];

  /**    ["hotZone", "bounty", "knockout", "takedown"],
    ["wipeout", "duels", "heist", "volleyBrawl"], */
  console.log(battleWin);
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
        <h2>W/R: {battleWin.winRate.toFixed(2)}</h2>
      </div>
      <div className="flex flex-row  w-[660px] bg-green">
        <button className="w-12"> &lt;</button>
        <div className="w-[500px] absolute bg-red">
          {gameModes.map((card) => (
            <StatCard gameModes={card} wins={battleWin.wins} />
          ))}
        </div>
        <button className="w-12"> &gt;</button>
      </div>
    </div>
  );
};

export default PlayerCard;

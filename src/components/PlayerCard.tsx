import Segment from "./Segment";

import _3v3 from "../assets/3v3.png";
import Duos from "../assets/Duos.png";
import Solo from "../assets/Solo.png";
import Duels from "../assets/Duels.png";
import Total from "../assets/Total.png";
import { BattleWin } from "../hooks/useBattleWin";

import "../index.css";
interface Props {
  battleWin: BattleWin;
}

const PlayerCard = ({ battleWin }: Props) => {
  const imageList = [_3v3, Solo, Duels, Duos, Total];
  const headerStyle = {
    color: "#" + battleWin.player.nameColor.substring(4),
  };

  return (
    <div className="w-[760px] flex flex-row font-['Monomaniac_One',sans-serif] mb-4 justify-between">
      <div className="flex flex-col">
        <h1 style={headerStyle} className="md:text-3xl text-2xl">
          {battleWin.player.name}
        </h1>
        <h2>{battleWin.winRate.toFixed(2)}</h2>
      </div>
      <div className="flex flex-row justify-evenly w-[480px]">
        {battleWin.wins.map((win, idx) => (
          <Segment key={imageList[idx]} count={win} image={imageList[idx]} />
        ))}
      </div>
    </div>
  );
};

export default PlayerCard;

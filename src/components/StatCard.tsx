import { GameWin } from "../hooks/useBattleWin";
import Segment from "./Segment";

import gemGrab from "../assets/gemGrab.png";
import duoShowdown from "../assets/Duos.png";
import soloShowdown from "../assets/Solo.png";
import brawlBall from "../assets/brawlBall.png";
import hotZone from "../assets/hotZone.png";
import bounty from "../assets/bounty.png";
import knockout from "../assets/knockout.png";
import takedown from "../assets/takedown.png";
import wipeout from "../assets/wipeout.png";
import heist from "../assets/heist.png";
import volleyBrawl from "../assets/volleyBrawl.png";
import duels from "../assets/Duels.png";

interface Props {
  wins: { [key: string]: GameWin };
  gameModes: string[];
}

const StatCard = ({ wins, gameModes }: Props) => {
  const imageMap = [
    gemGrab,
    soloShowdown,
    duoShowdown,
    brawlBall,
    heist,
    bounty,
    knockout,
    hotZone,
    takedown,
    duels,
    wipeout,
    volleyBrawl,
  ];

  return (
    <div className="flex flex-row justify-evenly w-full">
      {gameModes.map((mode) => (
        <Segment
          count={wins[mode].totalBattles}
          image={imageMap[imageMap.indexOf(mode)]}
        />
      ))}
    </div>
  );
};

export default StatCard;

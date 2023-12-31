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
  selectedStat: string;
}

const StatCard = ({ wins, gameModes, selectedStat }: Props) => {
  const imageMap: { [key: string]: string } = {
    gemGrab: gemGrab,
    soloShowdown: soloShowdown,
    duoShowdown: duoShowdown,
    brawlBall: brawlBall,
    heist: heist,
    bounty: bounty,
    knockout: knockout,
    hotZone: hotZone,
    takedown: takedown,
    duels: duels,
    wipeout: wipeout,
    volleyBrawl: volleyBrawl,
  };

  return (
    <div className="inline-flex  w-full items-center justify-center">
      {gameModes.map((mode) => (
        <Segment
          key={mode}
          count={
            selectedStat === "Total Battles"
              ? wins[mode].totalBattles.toString()
              : selectedStat === "Victories"
              ? wins[mode].totalVictories.toString()
              : Number(wins[mode].winRate).toFixed(2) === "NaN"
              ? "0"
              : Number(wins[mode].winRate).toFixed(2)
          }
          image={imageMap[mode]}
        />
      ))}
    </div>
  );
};

export default StatCard;

import { useState } from "react";
import NavBar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard";
import StatSelector from "./components/StatSelector";
import useBattleWins from "./hooks/useBattleWin";
import useUpdateWins from "./hooks/useUpdateWin";

function App() {
  const { battleWins, error, fetchData } = useBattleWins();
  const { update, updateData } = useUpdateWins();
  const [selectedStat, setSelectedStat] = useState("Victories");

  return (
    <>
      <div className="top-0 w-full fixed z-[1] drop-shadow-xl">
        <NavBar onRefresh={() => fetchData()} onUpdate={() => updateData()} />
      </div>

      <div className="w-full flex justify-center items-center mt-32">
        <div className="md:w-[900px] w-[500px] flex flex-col md:flex-row md:justify-start justify-center items-center font-['Monomaniac_One',sans-serif] text-2xl md:text-3xl ">
          <h1 className="md:mr-28 mb-2 md:mb-0">
            GameMode Statistic Selector:{" "}
          </h1>
          <StatSelector selected={selectedStat} setSelected={setSelectedStat} />
        </div>
      </div>

      <div className="w-full relative mt-8 flex flex-col items-center">
        {battleWins.map((battleWin) => (
          <PlayerCard
            key={battleWin._id}
            battleWin={battleWin}
            selectedStat={selectedStat}
          />
        ))}
      </div>
      {update && <h1>{update}</h1>}
      {error && <h1>{error}</h1>}
    </>
  );
}

export default App;

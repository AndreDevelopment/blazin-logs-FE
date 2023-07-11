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

      <div className="w-full flex justify-center items-center mt-28">
        <StatSelector selected={selectedStat} setSelected={setSelectedStat} />
      </div>
      {/* {update && <h1>{update}</h1>}
      {error && <h1>{error}</h1>} */}

      <div className="w-full relative mt-8 flex flex-col items-center">
        {battleWins.map((battleWin) => (
          <PlayerCard
            key={battleWin._id}
            battleWin={battleWin}
            selectedStat={selectedStat}
          />
        ))}
      </div>
    </>
  );
}

export default App;

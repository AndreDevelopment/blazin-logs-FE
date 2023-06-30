import NavBar from "./components/NavBar";
import PlayerCard from "./components/PlayerCard";
import useBattleWins from "./hooks/useBattleWin";
import useUpdateWins from "./hooks/useUpdateWin";

function App() {
  const { battleWins, error, fetchData } = useBattleWins();
  const { update, updateData } = useUpdateWins();
  //const gameModes = ["3v3", "Solo", "Duels", "Duos", "Total"];
  return (
    <>
      <div className="top-0 w-full fixed z-[1] drop-shadow-xl">
        <NavBar onRefresh={() => fetchData()} onUpdate={() => updateData()} />
      </div>
      {update && <h1>{update}</h1>}
      {error && <h1>{error}</h1>}

      <div className="w-full relative mt-36 flex flex-col items-center">
        {battleWins.map((battleWin) => (
          <PlayerCard key={battleWin._id} battleWin={battleWin} />
        ))}
      </div>
    </>
  );
}

export default App;

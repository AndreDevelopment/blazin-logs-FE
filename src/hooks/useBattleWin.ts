import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";
 export interface BattleWin{

    _id:string,
    totalBattles: number,
    totalVictories: number,
    battleTime: string,
    player: Player,
    wins: { [key: string]: GameWin},
    winRate: number
    
}

export interface GameWin{

    totalBattles: number,
    totalVictories: number,
    winRate: number
}

 export interface Player{

    name: string,
    nameColor: string
}




const useBattleWins = ()=>{

    const [battleWins, setBattleWins] = useState<BattleWin[]>([]);
    const [error, setError] = useState("");
  

    const fetchData = async () => {
        try {
          const response = await apiClient.get<BattleWin[]>("/fetch");
          setBattleWins(response.data);
        } catch (err:any) {
            if (err instanceof CanceledError) return;
            setError(err.message);
        }
      };

    useEffect(() => {

        const contoller = new AbortController();

         fetchData();

        return () => contoller.abort();
    }, []);

    return {battleWins,error,fetchData};
}

export default useBattleWins;
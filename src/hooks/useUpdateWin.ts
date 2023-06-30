import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import apiClient from "../api-client";


const useUpdateWins=()=>{

    const [update, setUpdate] = useState("");
    const [error, setError] = useState("");


    
    const updateData = async () => {
        try {
          const response = await apiClient.get<string>("/update/wins");
          setUpdate(response.data);
        } catch (err:any) {
            if (err instanceof CanceledError) return;
            setError(err.message);
        }
      };
  
    useEffect(() => {

        const contoller = new AbortController();

        updateData();

        return () => contoller.abort();
    }, []);

    return {update,error,updateData};
}

export default useUpdateWins;
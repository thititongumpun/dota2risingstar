import { Stats } from './../../types/stats.d';
import { useQuery } from "react-query"

export const fetchPlayers = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/stats`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const stats: Stats[] = await response.json();
  return stats;
}

export const fetchPlayerId = async (playerId: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/profile/${playerId}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.json();
}

export const useFetchPlayers = () => useQuery(['players'], () => fetchPlayers());
// export fetchPlayerId;
// export const useFetchPlayerId = () => useQuery(['getPlayerId', () => fetchPlayerId()]);
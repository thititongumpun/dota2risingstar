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

export const useFetchPlayers = () => useQuery({ queryKey: ['players'], queryFn: () => fetchPlayers });
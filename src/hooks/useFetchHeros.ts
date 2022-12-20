import { Heros } from './../../types/hero.d';
import { useQuery } from "react-query"

export const fetchHeros = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRATZAPI}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRATZTOKEN}`
    },
  });
  const heros: Heros= await response.json();

  return heros;
}

export const useFetchHeros = () => useQuery(['heros'], () => fetchHeros());
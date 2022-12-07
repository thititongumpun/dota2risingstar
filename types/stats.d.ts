export interface Stats {
  playerId: number;
  playerName: string;
  avatar: string;
  wl: Wl;
}

export interface Wl {
  win: number;
  lose: number;
}

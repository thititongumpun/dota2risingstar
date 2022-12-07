export interface PlayerProfile {
  profile: Profile;
  solo_competitive_rank: number;
  competitive_rank: number;
  rank_tier: number;
  leaderboard_rank: number;
  mmr_estimate: MmrEstimate;
}

export interface MmrEstimate {
  estimate: number;
}

export interface Profile {
  account_id: number;
  personaname: string;
  name: string;
  plus: boolean;
  cheese: number;
  steamid: string;
  avatar: string;
  avatarmedium: string;
  avatarfull: string;
  profileurl: string;
  last_login: string;
  loccountrycode: string;
  status: string;
  is_contributor: boolean;
  is_subscriber: boolean;
}

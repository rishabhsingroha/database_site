export interface Country {
    id: string;
    name: string;
    flag: string;
  }
  export interface League {
    id: string;
    countryId: string;
    name: string;
    logo: string;
  }
  export interface Team {
    id: string;
    leagueId: string;
    name: string;
    logo: string;
  }
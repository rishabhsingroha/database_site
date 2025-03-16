import { Country, League, Team, Player, Trophy } from './types';

// Initial data
export const countries: Country[] = [
  {
    id: '1',
    name: 'England',
    flag: 'https://images.unsplash.com/photo-1485452499676-62ab02c20e83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    name: 'Spain',
    flag: 'https://images.unsplash.com/photo-1464790719320-516ecd75af6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Germany',
    flag: 'https://images.unsplash.com/photo-1527866512907-a35a62a0f6c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export const leagues: League[] = [
    {
      id: '1',
      countryId: '1',
      name: 'Premier League',
      logo: 'https://images.unsplash.com/photo-1521731978332-9e9e714bdd20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      countryId: '2',
      name: 'La Liga',
      logo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      countryId: '3',
      name: 'Bundesliga',
      logo: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  export const teams: Team[] = [
    {
      id: '1',
      leagueId: '1',
      name: 'Manchester United',
      logo: 'https://images.unsplash.com/photo-1564279613035-8a5f29ee48b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      leagueId: '1',
      name: 'Liverpool',
      logo: 'https://images.unsplash.com/photo-1566236224669-4d7a7afd9c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      leagueId: '2',
      name: 'Barcelona',
      logo: 'https://images.unsplash.com/photo-1546672657-366775449156?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '4',
      leagueId: '2',
      name: 'Real Madrid',
      logo: 'https://images.unsplash.com/photo-1580891034942-419a5e4d59a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '5',
      leagueId: '3',
      name: 'Bayern Munich',
      logo: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
  
  export const players: Player[] = [
    {
      id: '1',
      teamId: '1',
      name: 'Bruno Fernandes',
      position: 'Midfielder',
      image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      trophies: [
        {
          id: '1',
          name: 'FA Cup',
          year: 2023,
          image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ]
    },
    {
      id: '2',
      teamId: '3',
      name: 'Lionel Messi',
      position: 'Forward',
      image: 'https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      trophies: [
        {
          id: '2',
          name: 'Champions League',
          year: 2015,
          image: 'https://images.unsplash.com/photo-1622279457486-28f703b3a271?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3',
          name: 'World Cup',
          year: 2022,
          image: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  ];
  
  // Local storage management
  const STORAGE_KEY = 'football-trophy-showcase';
  
  export const saveData = () => {
    const data = { countries, leagues, teams, players };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };
  
  export const loadData = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      const parsedData = JSON.parse(data);
      
      // Update our arrays with the stored data
      countries.length = 0;
      countries.push(...parsedData.countries);
      
      leagues.length = 0;
      leagues.push(...parsedData.leagues);
      
      teams.length = 0;
      teams.push(...parsedData.teams);
      
      players.length = 0;
      players.push(...parsedData.players);
    }
  };
  
  // Helper functions to get data
  export const getCountryById = (id: string) => countries.find(country => country.id === id);
  export const getLeaguesByCountryId = (countryId: string) => leagues.filter(league => league.countryId === countryId);
  export const getLeagueById = (id: string) => leagues.find(league => league.id === id);
  export const getTeamsByLeagueId = (leagueId: string) => teams.filter(team => team.leagueId === leagueId);
  export const getTeamById = (id: string) => teams.find(team => team.id === id);
  export const getPlayersByTeamId = (teamId: string) => players.filter(player => player.teamId === teamId);
  export const getPlayerById = (id: string) => players.find(player => player.id === id);
  
  // Helper functions to add data
  export const addCountry = (country: Omit<Country, 'id'>) => {
    const newCountry = { ...country, id: Date.now().toString() };
    countries.push(newCountry);
    saveData();
    return newCountry;
  };
  
  export const addLeague = (league: Omit<League, 'id'>) => {
    const newLeague = { ...league, id: Date.now().toString() };
    leagues.push(newLeague);
    saveData();
    return newLeague;
  };
  
  export const addTeam = (team: Omit<Team, 'id'>) => {
    const newTeam = { ...team, id: Date.now().toString() };
    teams.push(newTeam);
    saveData();
    return newTeam;
  };
  
  export const addPlayer = (player: Omit<Player, 'id' | 'trophies'>) => {
    const newPlayer = { ...player, id: Date.now().toString(), trophies: [] };
    players.push(newPlayer);
    saveData();
    return newPlayer;
  };
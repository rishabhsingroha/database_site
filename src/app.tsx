import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CountriesPage from './pages/CountriesPage';
import LeaguesPage from './pages/LeaguesPage';
import TeamPage from './pages/TeamPage';
import PlayerPage from './pages/PlayerPage';
import PlayerDetailPage from './pages/PlayerDetailPage';
import { loadData } from './data';

const App: React.FC = () => {
  // Load data from localStorage on app start
  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CountriesPage />} />
        <Route path="/country/:countryId" element={<LeaguesPage />} />
        <Route path="/league/:leagueId" element={<TeamPage />} />
        <Route path="/team/:teamId" element={<PlayerPage />} />
        <Route path="/player/:playerId" element={<PlayerDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;



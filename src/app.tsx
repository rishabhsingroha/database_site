import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Card from './components/Card';
import { getLeagueById, getTeamsByLeagueId } from './data';
import { ArrowLeft } from 'lucide-react';

const TeamsPage: React.FC = () => {
  const { leagueId } = useParams<{ leagueId: string }>();

  if (!leagueId) {
    return <div>League not found</div>;
  }

  const league = getLeagueById(leagueId);
  const teams = getTeamsByLeagueId(leagueId);

  if (!league) {
    return <div>League not found</div>;
  }

  return (
    <Layout title={`Teams in ${league.name}`}>
      {/* Back Button */}
      <Link
        to={`/country/${league.countryId}`}
        className="flex items-center text-blue-600 mb-8 hover:text-blue-700 transition-colors duration-300"
      >
        <ArrowLeft size={18} className="mr-2" />
        <span className="text-lg font-medium">Back to Leagues</span>
      </Link>

      {/* Page Heading */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Teams in {league.name}
        </h1>
        <p className="text-lg text-gray-600">
          Explore the teams competing in {league.name}.
        </p>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teams.map((team) => (
          <Card
            key={team.id}
            id={team.id}
            title={team.name}
            image={team.logo}
            linkTo={`/team/${team.id}`}
            description={`Discover ${team.name}'s players and stats.`}
          />
        ))}
      </div>
    </Layout>
  );
};

export default TeamsPage;
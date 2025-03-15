import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { getTeamById, getPlayersByTeamId } from '../data';
import { ArrowLeft } from 'lucide-react';

const PlayersPage: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();

  if (!teamId) {
    return <div>Team not found</div>;
  }

  const team = getTeamById(teamId);
  const players = getPlayersByTeamId(teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  return (
    <Layout title={`Players in ${team.name}`}>
      {/* Back Button */}
      <Link
        to={`/league/${team.leagueId}`}
        className="flex items-center text-blue-600 mb-8 hover:text-blue-700 transition-colors duration-300"
      >
        <ArrowLeft size={18} className="mr-2" />
        <span className="text-lg font-medium">Back to Teams</span>
      </Link>

      {/* Page Heading */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Players in {team.name}
        </h1>
        <p className="text-lg text-gray-600">
          Explore the players representing {team.name}.
        </p>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {players.map((player) => (
          <Card
            key={player.id}
            id={player.id}
            title={player.name}
            image={player.image}
            linkTo={`/player/${player.id}`}
            description={`Discover ${player.name}'s stats and achievements.`}
          />
        ))}
      </div>
    </Layout>
  );
};

export default PlayersPage;
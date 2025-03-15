import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { getPlayerById, getTeamById } from '../data';
import { ArrowLeft } from 'lucide-react';

const PlayerDetailPage: React.FC = () => {
  const { playerId } = useParams<{ playerId: string }>();

  if (!playerId) {
    return <div>Player not found</div>;
  }

  const player = getPlayerById(playerId);

  if (!player) {
    return <div>Player not found</div>;
  }

  const team = getTeamById(player.teamId);

  return (
    <Layout title={`${player.name}'s Trophy Cabinet`}>
      {/* Back Button */}
      <Link
        to={`/team/${player.teamId}`}
        className="flex items-center text-blue-600 mb-8 hover:text-blue-700 transition-colors duration-300"
      >
        <ArrowLeft size={18} className="mr-2" />
        <span className="text-lg font-medium">Back to {team?.name || 'Team'}</span>
      </Link>

      {/* Page Heading */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {player.name}'s Trophy Cabinet
        </h1>
        <p className="text-lg text-gray-600">
          Explore the trophies and achievements of {player.name}.
        </p>
      </div>

      {/* Player Details Section */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="md:flex">
          {/* Player Image */}
          <div className="md:w-1/3">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Player Information */}
          <div className="md:w-2/3 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{player.name}</h2>
            <p className="text-lg text-gray-600 mb-4">Position: {player.position}</p>
            <p className="text-lg text-gray-600 mb-6">Team: {team?.name}</p>

            {/* Trophy Cabinet Section */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Trophy Cabinet</h3>

            {player.trophies.length === 0 ? (
              <p className="text-gray-500 italic">No trophies yet</p>
            ) : (
              <div className="relative">
                {/* Trophy Cabinet Background */}
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                    alt="Trophy Cabinet"
                    className="w-full h-72 object-cover rounded-lg"
                  />

                  {/* Trophies positioned on the cabinet */}
                  <div className="absolute inset-0 flex items-center justify-around p-6">
                    {player.trophies.map((trophy) => (
                      <div key={trophy.id} className="text-center">
                        <div className="relative w-20 h-20 mx-auto">
                          <img
                            src={trophy.image}
                            alt={trophy.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="mt-2 bg-white bg-opacity-80 rounded-lg p-2 shadow-sm">
                          <p className="text-sm font-semibold">{trophy.name}</p>
                          <p className="text-xs text-gray-600">{trophy.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PlayerDetailPage;
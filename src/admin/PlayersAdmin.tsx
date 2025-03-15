import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { players, teams, addPlayer } from '../data';
import { Trash2, Plus } from 'lucide-react';

const PlayersAdmin: React.FC = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState('');
  const [teamId, setTeamId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && position && image && teamId) {
      addPlayer({ name, position, image, teamId });
      setName('');
      setPosition('');
      setImage('');
      setTeamId('');
    }
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-6">Manage Players</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Add New Player</h3>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Player Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
              Position
            </label>
            <input
              type="text"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Player Image URL
            </label>
            <input
              type="url"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="teamId" className="block text-sm font-medium text-gray-700 mb-1">
              Team
            </label>
            <select
              id="teamId"
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a team</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={16} className="mr-1" />
            Add Player
          </button>
        </form>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Existing Players</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Team
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trophies
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {players.map((player) => {
                const team = teams.find(t => t.id === player.teamId);
                return (
                  <tr key={player.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {player.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {player.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {player.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {team?.name || 'Unknown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <img src={player.image} alt={player.name} className="h-10 w-10 object-cover rounded-full" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {player.trophies.length}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        className="text-red-600 hover:text-red-900"
                        onClick={() => alert('Delete functionality would be implemented here')}
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default PlayersAdmin;
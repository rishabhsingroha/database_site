import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { players, addTrophy } from '../data';
import { Trash2, Plus } from 'lucide-react';

const TrophiesAdmin: React.FC = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [image, setImage] = useState('');
  const [playerId, setPlayerId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && year && image && playerId) {
      addTrophy(playerId, { name, year, image });
      setName('');
      setYear(new Date().getFullYear());
      setImage('');
      setPlayerId('');
    }
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-6">Manage Trophies</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Add New Trophy</h3>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Trophy Name
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
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
              Year Won
            </label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              min="1900"
              max={new Date().getFullYear()}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
              Trophy Image URL
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
            <label htmlFor="playerId" className="block text-sm font-medium text-gray-700 mb-1">
              Player
            </label>
            <select
              id="playerId"
              value={playerId}
              onChange={(e) => setPlayerId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a player</option>
              {players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.name}
                </option>
              ))}
            </select>
          </div>
          
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={16} className="mr-1" />
            Add Trophy
          </button>
        </form>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">All Trophies</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trophy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Year
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {players.flatMap(player => 
                player.trophies.map(trophy => (
                  <tr key={trophy.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {trophy.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {trophy.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {trophy.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {player.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <img src={trophy.image} alt={trophy.name} className="h-10 w-10 object-contain" />
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
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default TrophiesAdmin;
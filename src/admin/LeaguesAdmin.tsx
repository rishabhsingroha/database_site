import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { leagues, countries, addLeague } from '../data';
import { Trash2, Plus } from 'lucide-react';

const LeaguesAdmin: React.FC = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [countryId, setCountryId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && logo && countryId) {
      addLeague({ name, logo, countryId });
      setName('');
      setLogo('');
      setCountryId('');
    }
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-6">Manage Leagues</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Add New League</h3>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              League Name
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
            <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-1">
              Logo Image URL
            </label>
            <input
              type="url"
              id="logo"
              value={logo}
              onChange={(e) => setLogo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="countryId" className="block text-sm font-medium text-gray-700 mb-1">
              Country
            </label>
            <select
              id="countryId"
              value={countryId}
              onChange={(e) => setCountryId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={16} className="mr-1" />
            Add League
          </button>
        </form>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Existing Leagues</h3>
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
                  Country
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Logo
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leagues.map((league) => {
                const country = countries.find(c => c.id === league.countryId);
                return (
                  <tr key={league.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {league.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {league.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {country?.name || 'Unknown'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <img src={league.logo} alt={league.name} className="h-10 w-16 object-cover rounded" />
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

export default LeaguesAdmin;
import React, { useState } from 'react';
import AdminLayout from './AdminLayout';
import { countries, addCountry } from '../data';
import { Trash2, Plus } from 'lucide-react';

const CountriesAdmin: React.FC = () => {
  const [name, setName] = useState('');
  const [flag, setFlag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && flag) {
      addCountry({ name, flag });
      setName('');
      setFlag('');
    }
  };

  return (
    <AdminLayout>
      <h2 className="text-2xl font-semibold mb-6">Manage Countries</h2>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Add New Country</h3>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-4 rounded-md">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Country Name
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
            <label htmlFor="flag" className="block text-sm font-medium text-gray-700 mb-1">
              Flag Image URL
            </label>
            <input
              type="url"
              id="flag"
              value={flag}
              onChange={(e) => setFlag(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <Plus size={16} className="mr-1" />
            Add Country
          </button>
        </form>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-4">Existing Countries</h3>
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
                  Flag
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {countries.map((country) => (
                <tr key={country.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {country.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {country.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <img src={country.flag} alt={country.name} className="h-10 w-16 object-cover rounded" />
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CountriesAdmin;
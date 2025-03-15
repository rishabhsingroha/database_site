import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { countries } from '../data';

const CountriesPage: React.FC = () => {
  return (
    <Layout title="Select a Country">
      {/* Sleek Heading Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-12 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Explore Football by Country
        </h1>
        <p className="text-lg md:text-xl text-gray-200">
          Discover teams, players, and stats from your favorite countries.
        </p>
      </div>

      {/* Original Country Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {countries.map((country) => (
          <Card
            key={country.id}
            id={country.id}
            title={country.name}
            image={country.flag}
            linkTo={`/country/${country.id}`}
          />
        ))}
      </div>
    </Layout>
  );
};

export default CountriesPage;
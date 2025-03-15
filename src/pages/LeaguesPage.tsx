import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { getCountryById, getLeaguesByCountryId } from '../data';
import { ArrowLeft } from 'lucide-react';

const LeaguesPage: React.FC = () => {
  const { countryId } = useParams<{ countryId: string }>();

  if (!countryId) {
    return <div>Country not found</div>;
  }

  const country = getCountryById(countryId);
  const leagues = getLeaguesByCountryId(countryId);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <Layout title={`Leagues in ${country.name}`}>
      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center text-blue-600 mb-8 hover:text-blue-700 transition-colors duration-300"
      >
        <ArrowLeft size={18} className="mr-2" />
        <span className="text-lg font-medium">Back to Countries</span>
      </Link>

      {/* Page Heading */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Leagues in {country.name}
        </h1>
        <p className="text-lg text-gray-600">
          Explore the top football leagues in {country.name}.
        </p>
      </div>

      {/* Leagues Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {leagues.map((league) => (
          <Card
            key={league.id}
            id={league.id}
            title={league.name}
            image={league.logo}
            linkTo={`/league/${league.id}`}
            description={`Discover ${league.name}'s teams, players, and stats.`}
          />
        ))}
      </div>
    </Layout>
  );
};

export default LeaguesPage;
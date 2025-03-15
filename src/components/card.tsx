import React from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  id: string;
  title: string;
  image: string;
  linkTo: string;
  description?: string; // Optional description for more detail
  badge?: string; // Optional badge (e.g., "New", "Trending")
}

const Card: React.FC<CardProps> = ({ id, title, image, linkTo, description, badge }) => {
  return (
    <Link
      to={linkTo}
      className="block bg-white rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group"
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        {/* Optional Badge */}
        {badge && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold shadow-md">
            {badge}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        )}
        {/* CTA Button */}
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Explore
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
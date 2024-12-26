'use client';

import React from 'react';
import { FaRocket, FaLightbulb, FaCogs, FaHeart } from 'react-icons/fa';

const caractereData = [
  {
    icon: FaRocket,
    title: 'Dynamique',
    description: 'Toujours prêt à relever de nouveaux défis avec énergie et enthousiasme.',
    color: 'text-red-500',
  },
  {
    icon: FaLightbulb,
    title: 'Créatif',
    description: 'Transformer des idées en solutions concrètes pour répondre à des besoins spécifiques.',
    color: 'text-yellow-500',
  },
  {
    icon: FaCogs,
    title: 'Orienté Résultat',
    description: 'Un esprit analytique, toujours orienté vers des solutions pratiques et efficaces.',
    color: 'text-blue-500',
  },
  {
    icon: FaHeart,
    title: 'Empathique',
    description: 'Comprendre les besoins des autres et collaborer efficacement en équipe.',
    color: 'text-pink-500',
  },
];

export default function Caractere() {
  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 my-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        Mes Caractères
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {caractereData.map((char, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-900/50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <char.icon className={`text-6xl ${char.color} mb-4`} />
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">{char.title}</h3>
            <p className="text-gray-300 text-center">{char.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

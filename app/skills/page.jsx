'use client'

import { useState, useEffect } from 'react'
import UrlConfig from '../../util/config';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${UrlConfig.apiBaseUrl}/api/skills/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch skills data');
        }
        return response.json();
      })
      .then(data => {
        setSkills(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
        setError('Impossible de charger les compétences.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-200">Chargement des compétences...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="bg-purple-900/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-purple-500/20">
      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-purple-400">
        Mes Compétences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(skill => (
          <div 
            key={skill.id} 
            className="bg-purple-800/30 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-500/20 hover:border-emerald-500/20"
          >
            <h3 className="text-2xl font-semibold mb-3 text-emerald-300">{skill.name}</h3>
            <div className="w-full bg-purple-900/50 rounded-full h-2.5 mb-4">
              <div
                className="bg-gradient-to-r from-emerald-400 to-purple-500 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-gray-300">Niveau: {skill.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}


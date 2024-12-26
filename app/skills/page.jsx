'use client'

import { useState, useEffect } from 'react'
import UrlConfig from '../../util/config';
import Loading from '../../components/Loading';

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
        // Tri des compétences par niveau (du plus élevé au plus bas)
        const sortedSkills = data.sort((a, b) => b.level - a.level);
        setSkills(sortedSkills);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching skills:', error);
        setError('Impossible de charger les compétences.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading type="skills"/>
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20">
      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        Mes Compétences
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(skill => (
          <div 
            key={skill.id} 
            className="bg-gray-700/30 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600/20 hover:border-blue-500/20"
          >
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">{skill.name}</h3>
            <div className="w-full bg-gray-800/50 rounded-full h-2.5 mb-4">
              <div
                className="bg-gradient-to-r from-blue-400 to-gray-500 h-2.5 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
                aria-label={`Niveau de compétence pour ${skill.name} à ${skill.level}%`}
              ></div>
            </div>
            <p className="text-gray-300">Niveau: {skill.level}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}


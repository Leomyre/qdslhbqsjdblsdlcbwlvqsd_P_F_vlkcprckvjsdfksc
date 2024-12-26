'use client';

import { useState, useEffect } from 'react';
import UrlConfig from '../../util/config';
import Loading from '../../components/Loading';
import SkillBar from '../../components/SkillBar';
import Caractere from '../../components/Caractere';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les compétences depuis l'API
  useEffect(() => {
    fetch(`${UrlConfig.apiBaseUrl}/api/skills/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch skills data');
        }
        return response.json();
      })
      .then(data => {
        // Trier les compétences par niveau (du plus élevé au moins élevé)
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
    return <Loading type="skills" />;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20">
      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        Mes Compétences
      </h2>

      {/* Grille des compétences */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map(skill => (
          <SkillBar key={skill.id} name={skill.name} level={skill.level} />
        ))}
      </div>

      {/* Section des caractères */}
      <Caractere />
    </div>
  );
}

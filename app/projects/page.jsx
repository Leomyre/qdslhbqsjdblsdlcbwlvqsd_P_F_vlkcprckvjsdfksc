'use client'

import { useState, useEffect } from 'react';
import UrlConfig from '../../util/config';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${UrlConfig.apiBaseUrl}/api/projects/`)
      .then(response => response.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-blue-200">Chargement des projets...</div>;
  }

  return (
    <div className="bg-blue-900 bg-opacity-50 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl">
      <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-blue-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-blue-300">{project.title}</h3>
            <p className="text-blue-200 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              Voir le projet →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PaperClipIcon, AcademicCapIcon } from '@heroicons/react/24/solid'; // Import des icônes
import UrlConfig from '../util/config';
import Loading from '@/components/Loading';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${UrlConfig.apiBaseUrl}/api/users/`)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setError('Impossible de charger les données.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading type="home" />;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const user = users[0]; // On suppose qu'il y a au moins un utilisateur

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-center text-gray-100 px-4">
      <div className="bg-purple-900/40 p-10 rounded-lg shadow-2xl border border-purple-500/30 max-w-4xl w-full">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-400">
          Bienvenue sur mon Portfolio
        </h1>
        
        {/* Image centrée */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/leomyre.jpg" 
            alt="Portrait de l'utilisateur" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg ring-4 ring-purple-500" 
          />
        </div>
        
        {/* Informations utilisateur */}
        {user && (
          <>
            <h2 className="text-3xl font-bold mb-4">
              Je suis <span className="text-teal-300">{user.name}</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-200">
              {user.bio}
            </p>
          </>
        )}

        {/* Boutons d'action */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link 
            href="/projects" 
            className="flex items-center bg-teal-500 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-600 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            aria-label="Voir mes projets"
          >
            <PaperClipIcon className="h-6 w-6 mr-2" />
            Voir mes projets
          </Link>
          <Link 
            href="/skills" 
            className="flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-700 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            aria-label="Mes compétences"
          >
            <AcademicCapIcon className="h-6 w-6 mr-2" />
            Mes compétences
          </Link>
        </div>
      </div>
    </div>
  );
}

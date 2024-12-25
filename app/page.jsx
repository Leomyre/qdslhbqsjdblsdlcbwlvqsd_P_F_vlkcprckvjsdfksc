'use client'

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
        console.error('Error fetching projects:', error);
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="bg-purple-900/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-purple-500/20">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-purple-400">
          Bienvenue sur mon Portfolio
        </h1>
        
        {/* Image centrée */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/leomyre.jpg" 
            alt="ma photo" 
            className="w-64 h-64 rounded-full object-cover shadow-xl" 
          />
        </div>
        
        {users.length > 0 && (
          <>
            <h2 className="text-3xl font-semibold text-gray-100 mb-4">Je suis {users[0].name}</h2>  {/* Affichage du nom */}
            <p className="text-xl mb-8 text-gray-200">
              {users[0].bio}  {/* Affichage de la bio */}
            </p>
          </>
        )}
        
        <div className="space-x-6">
  {/* Bouton avec icône pour les projets */}
  <Link 
    href="/projects" 
    className="flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:translate-y-1"
    aria-label="Voir mes projets"
  >
    <PaperClipIcon className="h-6 w-6 mr-3" /> {/* Icône "paperclip" */}
    Voir mes projets
  </Link>
  
  {/* Bouton avec icône pour les compétences */}
  <Link 
    href="/skills" 
    className="flex items-center bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:translate-y-1"
    aria-label="Mes compétences"
  >
    <AcademicCapIcon className="h-6 w-6 mr-3" /> {/* Icône "academic cap" */}
    Mes compétences
  </Link>
</div>

      </div>
    </div>
  );
}

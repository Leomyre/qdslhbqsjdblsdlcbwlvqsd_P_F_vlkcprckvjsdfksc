'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
      return <Loading type="home"/>
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
    
    <div className="space-x-4">
      <Link href="/projects" className="bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        Voir mes projets
      </Link>
      <Link href="/skills" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        Mes compétences
      </Link>
    </div>
  </div>
</div>

  );
}

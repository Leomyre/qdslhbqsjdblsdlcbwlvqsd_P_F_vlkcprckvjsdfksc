'use client'

import { useState, useEffect } from 'react'
import UrlConfig from '../../util/config';

export default function Contact() {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${UrlConfig.apiBaseUrl}/api/contacts/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch contact information');
        }
        return response.json();
      })
      .then(data => {
        setContact(data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching contact:', error);
        setError('Impossible de charger les informations de contact.');
        setLoading(false);
      });
  }, []);

  if (loading) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
      {/* Skeleton pour l'image */}
      <div className="w-64 h-64 rounded-full bg-gray-300 animate-pulse mb-6"></div>

      {/* Skeleton pour le titre */}
      <div className="w-1/2 h-8 bg-gray-300 animate-pulse mx-auto"></div>

      {/* Skeleton pour le nom */}
      <div className="w-1/3 h-6 bg-gray-300 animate-pulse mx-auto"></div>

      {/* Skeleton pour la bio */}
      <div className="w-3/4 h-4 bg-gray-300 animate-pulse mx-auto"></div>

      {/* Skeleton pour les boutons */}
      <div className="space-x-4">
        <div className="w-36 h-10 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="w-36 h-10 bg-gray-300 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
}

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      {contact ? (
        <div className="bg-white shadow-md rounded-lg p-4">
          <p className="mb-2"><strong>Email:</strong> {contact.email}</p>
          <p className="mb-2"><strong>Téléphone:</strong> {contact.phone}</p>
          <p>
            <strong>GitHub:</strong>{' '}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800"
            >
              {contact.github}
            </a>
          </p>
        </div>
      ) : (
        <p className="text-center">Aucune information de contact disponible.</p>
      )}
    </div>
  );
}

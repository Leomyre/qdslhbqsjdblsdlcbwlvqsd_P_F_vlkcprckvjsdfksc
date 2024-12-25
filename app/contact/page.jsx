'use client'

import { useState, useEffect } from 'react'
import Loading from '@/components/Loading';
import UrlConfig from '@/util/config'

export default function Contact() {
  const [contact, setContact] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${UrlConfig.apiBaseUrl}/api/contacts/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch contact information')
        }
        return response.json()
      })
      .then(data => {
        setContact(data[0])
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching contact:', error)
        setError('Impossible de charger les informations de contact.')
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading type= "contact"/>
  }

  if (error) {
    return (
      <div className="bg-purple-900/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-purple-500/20">
        <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-purple-400">
          Contact
        </h2>
        <div className="text-red-400 text-center">{error}</div>
      </div>
    )
  }

  return (
    <div className="bg-purple-900/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-purple-500/20">
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-purple-400">
        Contact
      </h2>
      {contact ? (
        <div className="space-y-4">
          <p className="flex items-center">
            <strong className="text-emerald-300 mr-2">Email:</strong>
            <span className="text-gray-200">{contact.email}</span>
          </p>
          <p className="flex items-center">
            <strong className="text-emerald-300 mr-2">Téléphone:</strong>
            <span className="text-gray-200">{contact.phone}</span>
          </p>
          <p className="flex items-center">
            <strong className="text-emerald-300 mr-2">GitHub:</strong>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-emerald-400 transition-colors duration-300"
            >
              {contact.github}
            </a>
          </p>
        </div>
      ) : (
        <p className="text-center text-gray-200">Aucune information de contact disponible.</p>
      )}
    </div>
  )
}
import { SiDjango, SiNextdotjs } from 'react-icons/si'

const technologies = [
  { 
    name: 'Django', 
    icon: SiDjango, 
    color: 'text-green-600',
    description: 'Framework Python puissant pour construire des applications web sécurisées et évolutives.',
    features: [
      'Gestion des utilisateurs et authentification intégrées',
      'Back-end robuste pour les projets complexes',
      'Support des API REST via Django Rest Framework',
    ]
  },
  { 
    name: 'Next.js', 
    icon: SiNextdotjs, 
    color: 'text-white',
    description: 'Framework React pour créer des interfaces modernes et performantes.',
    features: [
      'Prise en charge du rendu côté serveur (SSR) pour le SEO',
      'Flexibilité avec le rendu statique ou dynamique',
      'Optimisation des performances et chargement rapide des pages',
    ]
  },
]

export default function FavoriteTechnologies() {
  return (
    <div className="bg-gray-800/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-gray-700/20 my-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-gray-100">
        Mes Technologies Préférées
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center bg-gray-900/50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
            <tech.icon className={`text-6xl sm:text-7xl md:text-8xl ${tech.color} mb-4`} />
            <h3 className="text-2xl font-semibold mb-2 text-gray-100">{tech.name}</h3>
            <p className="text-gray-300 text-center mb-4">{tech.description}</p>
            <ul className="list-disc list-inside text-gray-400">
              {tech.features.map((feature, index) => (
                <li key={index} className="mb-1">{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

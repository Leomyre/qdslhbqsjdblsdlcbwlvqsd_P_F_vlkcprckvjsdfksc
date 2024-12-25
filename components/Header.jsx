import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-purple-900/50 backdrop-filter backdrop-blur-lg border-b border-purple-500/20">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex space-x-6 justify-center">
          <li>
            <Link 
              href="/" 
              className="text-gray-200 hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className="text-gray-200 hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Projets
            </Link>
          </li>
          <li>
            <Link 
              href="/skills" 
              className="text-gray-200 hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="text-gray-200 hover:text-emerald-400 transition-colors duration-300 font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}


import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="bg-purple-900/30 p-8 rounded-lg backdrop-filter backdrop-blur-lg shadow-xl border border-purple-500/20">
        <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-purple-400">
          Bienvenue sur mon Portfolio
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Je suis un développeur passionné par la création d'applications web innovantes.
        </p>
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
  )
}


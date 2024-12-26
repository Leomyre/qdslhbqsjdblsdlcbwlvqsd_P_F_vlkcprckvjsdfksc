export default function Footer() {
  return (
    <footer className="bg-gray-800/50 backdrop-filter backdrop-blur-lg border-t border-gray-700/20 text-gray-200 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} by Léomyre. Tous droits réservés.</p>
        <p className="text-sm text-gray-400">Développé avec passion.</p>
      </div>
    </footer>
  )
}


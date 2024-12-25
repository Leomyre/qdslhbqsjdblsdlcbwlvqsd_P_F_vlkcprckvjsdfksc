export default function Footer() {
  return (
    <footer className="bg-purple-900/50 backdrop-filter backdrop-blur-lg border-t border-purple-500/20 text-gray-200 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        <p className="text-sm text-gray-400">Développé avec passion et expertise</p>
      </div>
    </footer>
  )
}


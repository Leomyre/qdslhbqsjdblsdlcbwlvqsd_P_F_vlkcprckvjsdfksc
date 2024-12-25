import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackgroundAnimation from '../components/BackgroundAnimation'

export const metadata = {
  title: 'Portfolio de Léomyre',
  description: 'Portfolio du développeur Léomyre',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen text-white bg-gradient-to-br from-purple-900 via-purple-800 to-emerald-900">
        <BackgroundAnimation />
        <div className="flex-grow container mx-auto px-4 py-8 relative z-10">
          <Header />
          <main className="mt-8">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}


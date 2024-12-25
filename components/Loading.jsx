export default function Loading({ type }) {
  switch (type) {
    case 'home':
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
    case 'projects':
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
          {/* Skeleton pour le titre des projets */}
          <div className="w-1/2 h-8 bg-gray-300 animate-pulse mx-auto"></div>

          {/* Skeleton pour la liste des projets */}
          <div className="w-full h-20 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-full h-20 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-full h-20 bg-gray-300 animate-pulse"></div>
        </div>
      );
    case 'skills':
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
          {/* Skeleton pour le titre des compétences */}
          <div className="w-1/2 h-8 bg-gray-300 animate-pulse mx-auto"></div>

          {/* Skeleton pour les compétences */}
          <div className="w-3/4 h-6 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-300 animate-pulse mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-300 animate-pulse"></div>
        </div>
      );
    default:
      return null;
  }
}

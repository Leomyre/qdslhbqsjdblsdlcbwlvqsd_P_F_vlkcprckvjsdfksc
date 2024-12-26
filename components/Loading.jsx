export default function Loading({ type }) {
  switch (type) {
    case 'home':
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
          {/* Skeleton pour l'image */}
          <div className="w-64 h-64 rounded-full bg-gray-700 animate-pulse mb-6 shadow-lg"></div>

          {/* Skeleton pour le titre */}
          <div className="w-2/3 h-10 bg-gray-700 animate-pulse mx-auto rounded-md"></div>

          {/* Skeleton pour le nom */}
          <div className="w-1/2 h-8 bg-gray-700 animate-pulse mx-auto rounded-md"></div>

          {/* Skeleton pour la bio */}
          <div className="w-3/4 h-6 bg-gray-700 animate-pulse mx-auto rounded-md"></div>

          {/* Skeleton pour les boutons */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="w-36 h-12 bg-gray-700 animate-pulse rounded-full shadow-md"></div>
            <div className="w-36 h-12 bg-gray-700 animate-pulse rounded-full shadow-md"></div>
          </div>
        </div>
      );

    case 'projects':
      return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6">
          {/* Skeleton pour le titre des projets */}
          <div className="w-2/3 h-10 bg-gray-700 animate-pulse mx-auto rounded-md"></div>

          {/* Skeleton pour la liste des projets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
            <div className="w-full h-32 bg-gray-700 animate-pulse rounded-lg shadow-md"></div>
            <div className="w-full h-32 bg-gray-700 animate-pulse rounded-lg shadow-md"></div>
            <div className="w-full h-32 bg-gray-700 animate-pulse rounded-lg shadow-md"></div>
          </div>
        </div>
      );

    case 'skills':
  return (
    <div className="flex flex-col items-center min-h-screen text-center space-y-6">
      {/* Skeleton pour le titre des compétences */}
      <div className="w-3/4 h-12 bg-gray-700 animate-pulse mx-auto rounded-md"></div>

      {/* Skeleton pour les compétences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        <div className="w-full h-40 bg-gray-700 animate-pulse rounded-md shadow-md"></div>
        <div className="w-full h-40 bg-gray-700 animate-pulse rounded-md shadow-md"></div>
        <div className="w-full h-40 bg-gray-700 animate-pulse rounded-md shadow-md"></div>
      </div>

      {/* Skeleton pour les caractères */}
      <div className="w-3/4 h-12 bg-gray-700 animate-pulse mx-auto rounded-md mt-8"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
        <div className="w-full h-20 bg-gray-700 animate-pulse rounded-md shadow-md"></div>
        <div className="w-full h-20 bg-gray-700 animate-pulse rounded-md shadow-md"></div>
        <div className="w-full h-20 bg-gray-700 animate-pulse rounded-md shadow-md"></div>
      </div>
    </div>
  );

    case 'contact':
      return (
        <div className="flex flex-col items-center min-h-screen text-center space-y-6">
          {/* Skeleton pour le titre des contacts */}
          <div className="w-2/3 h-10 bg-gray-700 animate-pulse mx-auto rounded-md"></div>

          {/* Skeleton pour les informations de contact */}
          <div className="w-3/4 h-8 bg-gray-700 animate-pulse mb-4 rounded-md"></div>
          <div className="w-3/4 h-8 bg-gray-700 animate-pulse mb-4 rounded-md"></div>
          <div className="w-3/4 h-8 bg-gray-700 animate-pulse rounded-md"></div>
        </div>
      );

    default:
      return null;
  }
}

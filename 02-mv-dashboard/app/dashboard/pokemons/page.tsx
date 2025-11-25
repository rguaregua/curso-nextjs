
export const metadata = {
  title: "Pokemons",
  description: "Listado de Pokemones"
};

export default async function PokemonsPage() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const result = await response.json();
  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Listado de Pokemones</h2>
      <div className="overflow-x-auto overflow-y-auto min-h-[200px] max-h-[600px] rounded-lg shadow-lg bg-white p-4">

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-linear-to-r from-blue-500 to-gray-500">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">#</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-white uppercase tracking-wider">URL</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {result.results.map((pokemon: any, idx: number) => (
              <tr key={pokemon.name} className="hover:bg-blue-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-medium">{idx + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-semibold capitalize">{pokemon.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a href={pokemon.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline transition-colors">{pokemon.url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    </>
  );
}


import React, { useEffect } from 'react';

export const App = (props: { text: string }) => {
  const [pokemon, setPokemon] = React.useState(null);

  const fetchPokemonList = async (pokemon: string) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
      .then(async (res) => {
        const data = await res.json();
        setPokemon({
          ...data,
          type: data.types.map((type: any) => type.type.name).join(', '),
          moves: data.moves.length,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchPokemonList(props.text);
  }, [props.text]);

  return pokemon ? <Pokemon {...pokemon} /> : null;
};

function Pokemon({ name, types, id, sprites, stats }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[32px] font-bold text-slate-500">
          {name} #{id}
        </h1>
        <div className="relative z-2">
          <img
            alt={name}
            width={400}
            height={400}
            src={sprites.front_default}
          />
        </div>
      </div>

      <div className="bg-slate-900 rounded p-5">
        <ul className="flex gap-5">
          {types.map((type) => (
            <li key={type.slot} className="px-2 py-1 bg-slate-700 rounded">
              {type.type.name}
            </li>
          ))}
        </ul>

        <div>
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-700 my-2 rounded p-1">
              <div
                className="bg-slate-900 rounded px-2 text-white"
                style={{ width: `${stat.base_stat}%` }}
              >
                {stat.stat.name}: {stat.base_stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

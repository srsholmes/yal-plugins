import { IPokemon } from '../api/pokemon';
import { add, subtract, text } from '../state';
import { Buttons } from './Buttons';

export function Picture(props: { data?: IPokemon }) {
  return (
    <div class="bg-white/70 flex flex-col p-3 aspect-square backdrop-blur-md rounded-xl h-72">
      <Header />
      <PokemonImage data={props.data} />
      <Buttons add={add} subtract={subtract} count={text()} />
    </div>
  );
}

function Header() {
  return (
    <div class="flex">
      <p class="font-semibold flex-1 text-lg text-black/70">Picture</p>
    </div>
  );
}

function PokemonImage(props: { data?: IPokemon }) {
  return (
    <div class="flex-1 relative">
      {props.data && (
        <img
          class="absolute inset-0 w-full h-full object-contain object-center"
          src={props.data.sprites.other['official-artwork'].front_default}
          alt={props.data.name}
        />
      )}
    </div>
  );
}

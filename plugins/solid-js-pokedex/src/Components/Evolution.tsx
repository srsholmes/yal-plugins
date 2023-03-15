import { createQuery } from '@tanstack/solid-query';
import { add, subtract, text } from '../state';
import { getColorPalette, getEvolutionChain } from '../api/pokemon';
import { properCase } from '../utils';
import { For } from 'solid-js';
import { Buttons } from './Buttons';

export const Evolution = () => {
  const query = createQuery(() => ({
    queryKey: ['evolution', text()],
    queryFn: () => getEvolutionChain(text()),
    placeholderData: (prev) => prev,
  }));

  const { data } = createQuery(() => ({
    queryKey: ['color', text()],
    queryFn: () => getColorPalette(text()),
    placeholderData: (prev) => prev,
  }));

  return (
    <div class="bg-white/70 flex flex-col p-3 flex-1 backdrop-blur-md rounded-xl h-72">
      <div class="flex">
        <p class="font-semibold flex-1 text-lg text-black/70">
          Evolution Chain
        </p>
      </div>

      <div class="flex-1 relative flex items-center">
        <For each={query.data}>
          {(item) => (
            <div class="relative flex-1 flex gap-2 flex-col justify-center items-center">
              <p style="{ color color }">{properCase(item.name)}</p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
                class="w-32 h-32"
              />
            </div>
          )}
        </For>
      </div>
      <Buttons add={add} subtract={subtract} count={text()} />
    </div>
  );
};

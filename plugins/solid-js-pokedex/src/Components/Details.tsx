/** @jsxImportSource solid-js */

import { createQuery } from '@tanstack/solid-query';
import { For, Match, Switch } from 'solid-js';
import { getColorPalette, getTypesAndWeaknesses } from '../api/pokemon';
import { add, subtract, text } from '../state';
import { Buttons } from './Buttons';

export function Details() {
  const query = createQuery(() => ({
    queryKey: ['pokemonWeakness', text()],
    queryFn: () => getTypesAndWeaknesses(text()),
    placeholderData: (prev) => prev,
  }));

  const colorsQuery = createQuery(() => ({
    queryKey: ['color', text()],
    queryFn: () => getColorPalette(text()),
    placeholderData: (prev) => prev,
  }));

  let color = () =>
    colorsQuery.data ? `hsl(${colorsQuery.data[0]}, 40%, 30%)` : 'transparent';

  return (
    <div class="bg-white/70 gap-2 flex flex-col p-3 flex-1 backdrop-blur-md rounded-xl h-72">
      <div class="flex">
        <p class="font-semibold flex-1 text-lg text-black/70">Details</p>
      </div>
      <div class="flex-1 relative">
        <p class="text-sm font-semibold text-black/80">Type</p>
        <div class="flex flex-wrap mt-2 gap-2">
          <Switch>
            <Match when={query.isLoading}>Loading...</Match>
            <Match when={query.isSuccess}>
              <For each={query.data?.types}>
                {(type) => (
                  <span
                    class="px-4 py-1 border rounded-md font-medium border-5"
                    style={`color: ${color()}; border-color: ${color()}; border: 1px solid;`}
                  >
                    {type}
                  </span>
                )}
              </For>
            </Match>
          </Switch>
        </div>
        <p class="text-sm font-semibold text-black/80 mt-3">Weaknesses</p>
        <div class="flex flex-wrap mt-2 gap-2">
          <Switch>
            <Match when={query.isLoading}>Loading...</Match>
            <Match when={query.isSuccess}>
              <For each={query.data.weaknesses || []}>
                {(weakness) => (
                  <span
                    class="px-4 py-1 border rounded-md font-medium border-1"
                    style={`color: ${color()}; border-color: ${color()}; border: 1px solid;`}
                  >
                    {weakness}
                  </span>
                )}
              </For>
            </Match>
          </Switch>
        </div>
      </div>
      <Buttons add={add} subtract={subtract} count={text()} />
    </div>
  );
}

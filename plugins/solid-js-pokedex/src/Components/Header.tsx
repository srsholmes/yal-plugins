/** @jsxImportSource solid-js */

import { createQuery } from '@tanstack/solid-query';
import { getPokemon } from '../api/pokemon';
import { client, text } from '../state';
import { createLeadingZero } from '../utils';

export function Header() {
  const query = createQuery(
    () => ({
      queryKey: ['pokemon', text()],
      queryFn: () => getPokemon(text()),
      placeholderData: (prev) => prev,
    }),
    () => client
  );

  return (
    <>
      <div class="container flex items-center px-8 justify-between mx-auto max-w-5xl">
        <p class="text-8xl font-semibold opacity-70 font-['Ultra']">
          {query.data?.name}
        </p>
        <p class="text-2xl opacity-70 font-semibold font-['Ultra']">
          #{createLeadingZero(text())}
        </p>
      </div>
    </>
  );
}

import { createQuery, QueryClientProvider } from '@tanstack/solid-query';
import { getPokemon, IPokemon } from '../api/pokemon';
import { client, text } from '../state';
import { Background } from './Background';
import { Details } from './Details';
import { Header } from './Header';
import { Picture } from './Picture';
import { Stats } from './Stats';
import { Evolution } from './Evolution';

const Pokedex = () => {
  const query = createQuery(() => ({
    queryKey: ['pokemon', text()],
    queryFn: () => getPokemon(text()),
    placeholderData: (prev) => prev,
  }));

  return <Pokemon data={query.data} />;
};

function Pokemon(props: { data: IPokemon | undefined }) {
  return (
    <div>
      <div class={'z-20 relative'}>
        <Header />
        <div class="container flex gap-4 items-center px-8 mt-8 justify-between mx-auto max-w-5xl">
          <Picture data={props.data} />
          <Stats />
        </div>
        <div class="container flex gap-4 items-center px-8 mt-4 justify-between mx-auto max-w-5xl">
          <Details />
          <Evolution />
        </div>
      </div>
      <Background />
    </div>
  );
}

export default function PokedexProvider() {
  return (
    <QueryClientProvider client={client}>
      <Pokedex />
    </QueryClientProvider>
  );
}

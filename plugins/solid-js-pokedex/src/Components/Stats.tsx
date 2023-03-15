/** @jsxImportSource solid-js */

import { createQuery } from '@tanstack/solid-query';
import { Index } from 'solid-js';
import { getColorPalette, getPokemon } from '../api/pokemon';
import { add, client, subtract, text } from '../state';
import { Buttons } from './Buttons';

export function Stats() {
  const query = createQuery(
    () => ({
      queryKey: ['pokemon', text()],
      queryFn: () => getPokemon(text()),
      placeholderData: (prev) => prev,
      select: (data) => {
        return data.stats.map((stat) => ({
          label: stat.stat.name,
          value: stat.base_stat,
        }));
      },
    }),
    () => client
  );

  return (
    <div class="bg-white/70 flex flex-col p-3 flex-1 backdrop-blur-md rounded-xl h-72">
      <Header />
      <StatsGraph data={query.data ?? []} />
      <Buttons add={add} subtract={subtract} count={text()} />
    </div>
  );
}

interface StatsGraphProps {
  data?: Array<{
    // Stat Label
    label: string;
    // Stat Value
    value: number;
  }>;
}

function StatsGraph(props: StatsGraphProps) {
  const colorsQuery = createQuery(
    () => ({
      queryKey: ['color', text()],
      queryFn: () => getColorPalette(text()),
      placeholderData: (prev) => prev,
    }),
    () => client
  );

  const getFillStatColor = (color: [number, number, number]) => {
    return `hsl(${color[0]}, 50%, 62%)`;
  };

  const getBarColor = (color: [number, number, number]) => {
    return `hsl(${color[0]}, 10%, 32%)`;
  };

  const getTextColor = (color: [number, number, number]) => {
    return `hsl(${color[0]}, 20%, 32%)`;
  };

  return (
    <div class="flex-1 px-1">
      <div class="flex gap-3 align-middle mt-1">
        <div>
          <Index each={props.data || []}>
            {(stat, i) => (
              <div class="flex justify-between h-6 mt-2 items-center">
                <div
                  style={{
                    color: colorsQuery.data
                      ? getTextColor(colorsQuery.data)
                      : 'transparent',
                  }}
                  class="font-semibold text-sm"
                >
                  {stat().label}
                </div>
              </div>
            )}
          </Index>
        </div>
        <div class="flex-1">
          <Index each={props.data || []}>
            {(stat, i) => (
              <div class="flex items-center mt-2 h-6">
                <div
                  style={{
                    'background-color': colorsQuery.data
                      ? getBarColor(colorsQuery.data)
                      : 'transparent',
                  }}
                  class="flex-1 h-3 rounded-full relative"
                >
                  <div
                    class="absolute transition-all inset-y-0 left-0 rounded-full"
                    style={{
                      width: `${stat().value < 100 ? stat().value : 100}%`,
                      'background-color': colorsQuery.data
                        ? getFillStatColor(colorsQuery.data)
                        : 'transparent',
                    }}
                  ></div>
                </div>
              </div>
            )}
          </Index>
        </div>
        <div>
          <Index each={props.data || []}>
            {(stat, i) => (
              <div class="flex justify-between h-6 mt-2 items-center">
                <div
                  style={{
                    color: colorsQuery.data
                      ? getTextColor(colorsQuery.data)
                      : 'transparent',
                  }}
                  class="font-semibold text-sm tabular-nums"
                >
                  {Math.round((stat().value / 100) * 150)}
                </div>
              </div>
            )}
          </Index>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div class="flex">
      <p class="font-semibold flex-1 text-lg text-black/70">Stats</p>
    </div>
  );
}

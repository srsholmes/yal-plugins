import { QueryClient } from '@tanstack/solid-query';
import { createSignal } from 'solid-js';
import { PluginArgs } from '@yal-app/types';

const [text, setText] = createSignal('');

const [utils, setUtils] = createSignal<PluginArgs['utils']>(null);

const add = () => {
  utils().setInputText(`pokemon ${(Number(text()) + 1).toString()}`);
};

const subtract = () => {
  utils().setInputText(`pokemon ${(Number(text()) - 1).toString()}`);
};

export const client = new QueryClient();

export { text, setText, add, subtract, setUtils, utils };

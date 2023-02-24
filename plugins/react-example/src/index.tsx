import { YalPluginsConfig, YalAppPlugin } from '@yal-app/types';
import React from 'react';
import { createRoot } from 'react-dom/client';

let root;

const testReactApp: YalAppPlugin = (args) => {
  const { appNode } = args;
  if (appNode.children.length === 0) {
    root = createRoot(appNode);
  }
  root.render(
    <React.StrictMode>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hello World from react!
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            The input text (without the keyword is): {args.text}
          </p>
        </div>
      </div>
    </React.StrictMode>
  );
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'react',
  filter: false,
  isApp: true,
};
export default testReactApp;

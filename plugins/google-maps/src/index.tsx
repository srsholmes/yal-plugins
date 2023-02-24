import { YalPluginsConfig, YalAppPlugin } from '@yal-app/types';
import { default as React } from 'react';
import { createRoot } from 'react-dom/client';
import { Map } from './Map';

let root = null;

const testReactApp: YalAppPlugin = (args) => {
  const { appNode } = args;
  if (appNode.children.length === 0) {
    root = createRoot(appNode);
  }

  root.render(
    <div className="mx-auto px-4">
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-3xl mb-3">
        React App searching Google Maps for {args.text}
      </h1>
      <Map location={args.text} />
    </div>
  );

  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'gmaps',
  filter: false,
  isApp: true,
  keepOpen: true,
};
export default testReactApp;

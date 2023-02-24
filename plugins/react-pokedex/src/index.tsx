import { YalPluginsConfig, YalAppPlugin } from '@yal-app/types';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

const testReactApp: YalAppPlugin = (args) => {
  const { appNode } = args;

  ReactDOM.render(
    <React.StrictMode>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <App text={args.text} />
      </div>
    </React.StrictMode>,
    appNode
  );
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'pokemon',
  filter: false,
  isApp: true,
  debounce: true,
};

export default testReactApp;

import { YalPluginsConfig, YalAppPlugin } from '@yal-app/types';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { FileReader } from './FileReader';

let root;

const testReactApp: YalAppPlugin = (args) => {
  console.log('args', args);
  const { appNode } = args;
  if (!root) {
    root = createRoot(appNode);
  }
  root.render(
    <React.StrictMode>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            This is a basic example of how to use the Yal API.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Please click the button below to open a file dialog. Once you have
            selected a file, it will be displayed below the button.
          </p>
        </div>
        <div className="flex items-center">
          <FileReader />
        </div>
      </div>
    </React.StrictMode>
  );
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'file',
  filter: false,
  isApp: true,
};

export default testReactApp;

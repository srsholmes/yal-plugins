import { YalPluginsConfig, YalAppPlugin } from '@yal-app/types';
import React from 'react';
import { createRoot } from 'react-dom/client';
import png from './tester.png';

const ImageTest = () => {
  return (
    <div>
      <h1>Display a url image</h1>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png" />
      <h1>Display a bundled png</h1>
      <img src={png} />
    </div>
  );
};

let root;

const testReactApp: YalAppPlugin = (args) => {
  const { appNode } = args;
  if (!root) {
    root = createRoot(appNode);
  }
  root.render(
    <React.StrictMode>
      <div className="p-5">
        <h1 className={'text-white'}>Testing bundled images from react!</h1>
        <ImageTest />
      </div>
    </React.StrictMode>
  );
  return { appNode };
};

export const config: YalPluginsConfig = {
  keywords: 'imagetest',
  filter: false,
  isApp: true,
};
export default testReactApp;

import { YalPluginsConfig } from '@yal-app/types';

const testApp = (args) => {
  const { appNode } = args;
  const html = /*html*/ `
    <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Hello from Vanilla JS!
        </h1>
        <p class="mt-4 text-lg text-gray-200">
          This is a test app. Written with Vanilla JS and styled on the fly with Tailwind CSS.
        </p>
      </div>
    </div>
  `;
  appNode.innerHTML = html;

  return { appNode };
};

export default testApp;

export const config: YalPluginsConfig = {
  keywords: 'app-test',
  filter: false,
  isApp: true,
};

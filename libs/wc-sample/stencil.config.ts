import { Config } from '@stencil/core';

import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'wc-sample',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/wc-sample/dist',
    },
    {
      type: 'www',
      dir: '../../dist/libs/wc-sample/www',
      serviceWorker: null, // disable service workers
    },

    reactOutputTarget({
      componentCorePackage: '@rejin/wc-sample',
      proxiesFile: '../../../libs/wc-sample-react/src/generated/components.ts',
      includeDefineCustomElements: true,
    }),
  ],
};

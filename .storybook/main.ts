import type { StorybookConfig } from '@storybook/nextjs'

const path = require('path')

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    {
      name: '@storybook/addon-styling-webpack',

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss'),
                },
              },
            ],
          },
        ],
      },
    },
  ],

  previewHead: (head) => `
  ${head}
  <script async src="${process.env.GA_STORYBOOK_SRC}"></script>
    <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${process.env.GA_STORYBOOK_ID}');
  </script>
  
  `,
  staticDirs: ['public'],
  core: {
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },

  docs: {
    autodocs: 'tag',
    defaultName: 'Raferdev',
  },

  webpackFinal: async (config, {}) => {
    if (!config.resolve) {
      throw new Error('config.resolve is undefined')
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    }
    return config
  },
}

export default config

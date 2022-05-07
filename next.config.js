module.exports = {
  env: {
    BASE_URL: process.env.BASE_URL,
 },
   reactStrictMode: true,
   webpack5: false,
   webpack4: (config, options) => {
    config.module.rules.push({
      test: /\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: pluginOptions.options,
        },
      ],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
      }
    })

    return config
  },
 }

const path = require('path');
const extractCSS = require('extract-text-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const PrepackWebpackPlugin = require('prepack-webpack-plugin').default;

const plugins = [
  new extractCSS({
    filename: './bundle.css',
    allChunks: true,
  })
];

module.exports = function webpackStuff(env) {
  if (env === 'production') plugins.push(new BabiliPlugin());

  return {
    entry: [
      './src/index.js',
      './src/styles/app.css',
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, './'),
    },
    resolve: { alias: {
      "layout": path.resolve(__dirname, "./src/views/layout/"),
      "styles": path.resolve(__dirname, "./src/styles"),
      "@hew/understyle": path.resolve(__dirname, "./node_modules/understyle/src")
    }},
    module: {
      rules: [{
        test: /\.js$/,
        use: [{
          loader: 'babel-loader'
        }],
        include: [
          path.resolve(__dirname, './'),
        ],
      }, {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      }, {
        test: /\.svg/,
			    use: {
			        loader: 'svg-url-loader',
			        options: {}
			    }
      }],
    },
    plugins,
  };
};

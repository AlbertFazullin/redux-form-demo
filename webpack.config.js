const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const sourcePath = path.join(__dirname, './src');
const staticsPath = path.join(__dirname, './public');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';
const devServerPort = 3000;

const rules = [
  {
    test: /\.jsx?$/,
    include: sourcePath,
    loader: 'babel-loader',
    options: {
      presets: ['es2015', 'react', 'stage-0'],
      plugins: ['transform-decorators-legacy'],
    },
  },
  {
    test: /\.pug$/,
    include: sourcePath,
    loader: 'pug-loader',
  },
  {
    test: /\.html$/,
    include: sourcePath,
    use: {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  },
  {
    test: /\.pcss$/,
    include: sourcePath,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          query: {
            modules: true,
            sourceMaps: true,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          },
        },
        {
          loader: 'postcss-loader',
        },
      ],
    }),
  },
  {
    test: /\.css$/,
    use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
  },
];

if (!isProd) {
  rules.push({
    test: /\.jsx?$/,
    enforce: 'pre',
    include: sourcePath,
    loader: 'eslint-loader',
  });
}

console.info(`${nodeEnv} mode`);

const config = {
  devtool: isProd ? '' : 'eval-source-map',
  context: sourcePath,
  entry: {
    bundle: ['babel-polyfill', 'index.js'],
    vendor: ['react'],
  },
  output: {
    path: staticsPath,
    publicPath: `//localhost:${devServerPort}/`,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(__dirname, './node_modules'),
      sourcePath,
    ],
  },
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    host: '0.0.0.0',
    port: devServerPort,
    compress: isProd,
    inline: !isProd,
    hot: true,
    stats: {
      assets: true,
      children: false,
      chunks: true,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      watchContentBase: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.pug',
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.js',
    }),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV === 'development',
    }),
    new webpack.NamedModulesPlugin(),
  ],
};

if (isProd) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  );
} else {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

module.exports = config;

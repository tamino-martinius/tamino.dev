const resolve = require('path').resolve;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/// Rules

// Stylus
const stylusRule = {
  test: /\.styl$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'stylus-loader',
      options: {
        use: [
          // Stylus plugins
        ],
      },
    },
  ],
};

// CSS
const cssRule = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader',
  ],
};

// Vue
const vueRule = {
  test: /\.vue$/,
  loader: 'vue-loader',
  options: {
    cssModules: {
      localIdentName: '[path][name]---[local]---[hash:base64:5]',
      camelCase: true,
    },
  },
};

// YamlLoader
const yamlRule = {
  test: /\.ya?ml$/,
  loader: 'yml-loader',
  exclude: /node_modules/,
};

// TypeScript
const tsRule = {
  test: /\.tsx?$/,
  loader: 'ts-loader',
  exclude: /node_modules/,
  options: {
    appendTsSuffixTo: [/\.vue$/],
  },
};

// Images
const imageRule = {
  test: /\.(png|svg|jpg|gif)$/,
  loader: 'file-loader',
  options: {
    name: '[name].[ext]?[hash]'
  },
};

// XML
const xmlRule = {
  test: /\.xml$/,
  use: [
    'xml-loader',
  ],
};


/// Plugin Options

// CleanWebpackPlugin
const cleanPaths = [
  'dist/*',
];
const cleanOptions = {
  root: resolve('.'),
  exlude: [
    '.keep',
  ],
};

// Runtime Chunk
const runtimeChunkOptions = {
  name: 'runtime',
};

// Vendor Chunk
const vendorChunkOptions = {
  name: 'vendor',
};

// Minify
var minifyOptions = {
  sourceMap: false,
  uglifyOptions: {
    ecma: 6,
  },
};

/// Export
const title = '~/taminomartinius.de/main.ts';
const path = '/';

const transform = (content, filePath) => {
  if (filePath.endsWith('.json') || filePath.endsWith('.xml')) {
    return content.toString().replace(/#\{title\}/g, title).replace(/#\{path\}/g, path);
  } else {
    return content;
  }
};
const config = {
  entry: './index.ts',
  output: {
    filename: '[name].[hash].js',
    path: resolve('dist'),
  },
  context: resolve('src'),
  performance: {
    hints: false
  },
  module: {
    rules: [
      yamlRule,
      stylusRule,
      cssRule,
      vueRule,
      imageRule,
      xmlRule,
      tsRule,
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  plugins: [
    new CleanWebpackPlugin(cleanPaths, cleanOptions),
    new CopyWebpackPlugin([
      { transform, from: 'public' },
    ]),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      path,
      title,
      template: 'index.html',
      minify: process.env.NODE_ENV === 'production' ? {
        minifyJS: true,
        minifyCSS: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
      } : false,
    }),
  ],
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"',
    },
  }));
  config.plugins.push(new UglifyJsWebpackPlugin(minifyOptions));
  config.plugins.push(new OfflinePlugin({
    publicPath: '/',
    externals: [
      '/',
    ],
    updateStrategy: 'changed',
    autoUpdate: 1000 * 60 * 2,
    caches: {
      main: [
        'index.html',
        'main.*.js',
      ],
    },
    ServiceWorker: {
      events: true,
      navigateFallbackURL: '/',
    },
    AppCache: {
      events: true
    },
  }));
} else {
  config.devtool = '#eval-source-map';
  config.devServer = {
    port: 3000,
    hot: true,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    contentBase: './dist',
  };
}

module.exports = config;

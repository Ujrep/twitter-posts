const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');

const BASE_DIR = __dirname;
const EXCLUDE = /node_modules/;

const fileNamesMap = {
  development: {
    js: 'js/[name].js',
    css: 'css/[name].css',
    other: '[path][name].[ext]',
  },

  production: {
    js: 'js/[name].js',
    css: 'css/[name].css',
    other: '[path][name]-[sha512:hash:base64:10].[ext]',
  },
};
const fileNames = fileNamesMap[process.env.NODE_ENV];

const extractCSS = new ExtractTextPlugin(fileNames.css);

function isProduction() {
  if (process.env.NODE_ENV === 'production') {
    return true;
  }
  return false;
}

module.exports = {
  context: BASE_DIR,

  resolve: { root: BASE_DIR },

  entry: 'app.js',

  output: {
    path: __dirname + '/public/',
    filename: fileNames.js,
    publicPath: '/public/',
  },

  module: {
    loaders: (() => {
      const list = [];

      list.push([
        { test: /\.js$/, loader: 'babel', exclude: EXCLUDE },
        { test: /\.vue$/, loader: 'vue' },
        { test: /\.(otf|woff(2))$/,
          loader: 'url-loader?limit=1024',
          exlude: EXCLUDE,
        },
      ]);
      if (isProduction()) {
        list.push([
          { test: /\.(png|jpg)$/,
            loader: 'url-loader?name=images/[name].[ext]&limit=1024',
            exlude: EXCLUDE,
          },
          { test: /\.scss$/, loader: extractCSS.extract(['css', 'sass']) },
        ]);
      } else {
        list.push([
          { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
          { test: /\.scss$/, loader: 'style!css!autoprefixer?{browsers:["last 2 version"]}!sass', exclude: EXCLUDE },
        ]);
      }
      return list;
    })(),
  },

  plugins: (() => {
    const list = [];

    list.push(new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        APP_PROCESS_API_URL: JSON.stringify(process.env.APP_PROCESS_API_URL),
        MYLOCAL_API_URL: JSON.stringify(process.env.API_URL),
      },
    }));
    list.push(new AssetsPlugin({
      filename: 'assets.json',
    }));

    if (isProduction()) {
      list.push(extractCSS);
    }

    return list;
  })(),

  devtool: isProduction() ? '' : '#source-map',

  babel: {
    presets: ['es2015', 'stage-1'],
    plugins: ['transform-runtime'],
  },

  vue: {
    autoprefixer: {
      browsers: ['last 2 versions'],
    },
    loaders: {
      scss: isProduction() ? extractCSS.extract(['css', 'sass']) : 'style!css!sass',
    },
  },

  devServer: {
    port: 3003,
    colors: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};

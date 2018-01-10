const DIST_DIR = 'public';

var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//Files to copy
var projectStaticFiles = [
    //{ from: './node_modules/underscore' , to:'libs/underscore'},
    { from: './statics/css', to: 'css'},
  ];

var plugins = [
  new CleanWebpackPlugin([DIST_DIR], {
    root: __dirname,
    verbose: true,
    dry: false,
    exclude: []
  }),
  new webpack.optimize.CommonsChunkPlugin({names: ['vendor', 'manifest']}),
  new CopyWebpackPlugin(projectStaticFiles),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.ejs',
    chunks: ['app', 'vendor', 'manifest']
  }),
  new ExtractTextPlugin("css/[name].[chunkhash].css"),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
];

if(!debug){
  plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

var rules = [
  {
    test: /\.js$/,
    enforce: "pre",
    exclude: /node_modules/,
    loader: 'eslint-loader'
  },
  {
    test: /\.js$/,
    exclude: /node_modules\/(?!(autotrack|dom-utils))/,
    loader: 'babel-loader?cacheDirectory=true',
    query: {
      // presets: ['env']
      //presets: ['react', 'es2015', 'stage-1']
    }
  },
];

if(!debug){
  rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader?minimize=true",
    })
  });
}
else{
  rules.push({
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader",
    })
  });
}

module.exports = {
  resolve: {
    modules: [path.resolve(__dirname, "app_client_common"), "node_modules"],
  },
  module: {
    rules: rules
  },
  externals: {
     "_": "_",//underscore
     "underscore": "_",
     "window": "window", //only for google maps
     "Promise": "Promise"
   },
  entry: {
      app: "./src/index.js",
      vendor: [
        "babel-polyfill"
              ]
    },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, DIST_DIR),
    publicPath: '/'
  },
  devServer:{
    // https: true,
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: {
      rewrites: [
        { from: /^\/$/, to: '/index.html' },
        { from: /^\/app(\/.*)?$/, to: '/index.html' },
      ]
    },
    proxy: [{
      context: ["/__"],
      target: "http://localhost:5000"
    }]
  },
  plugins: plugins
};

if(debug){
  module.exports.devtool = 'inline-source-map';
}

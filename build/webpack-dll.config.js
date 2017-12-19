const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const vendors = [
  'react',
  'react-dom',
  'antd'
];

module.exports = {
  output: {
    path: path.resolve('./dll'),
    filename: '[name].js',
    library: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  entry: {
    common: vendors,
  },
  plugins: [
    new webpack.DllPlugin({
      path: './manifest.json', // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      name: '[name]',  // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
      context: __dirname, // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    }),
    /* 跟业务代码一样，该兼容的还是得兼容 */
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery',
    //   'window.jQuery': 'jquery',
    //   'window.$': 'jquery',
    // }),
    new ExtractTextPlugin('[name].css'), // 打包css/less的时候会用到ExtractTextPlugin
    new webpack.optimize.UglifyJsPlugin({
        // mangle: {
    	// 	except: ['require', 'exports', 'module', '$', 'jQuery', 'tools'],
    	// 	// screw_ie8: false
    	// },
        compress: {
          warnings: false
        }
    }),
    new webpack.DefinePlugin({
      "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
    })
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     postcss: require('./webpack-config/vendor/postcss.config.js'),
    //   },
    // }),
  ],
  module: {
      loaders: [
          {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract({
                  use: ["css-loader"],
                  fallback: 'style-loader'
                  })
          },
          {
              test: /\.scss$/,
              loader: ExtractTextPlugin.extract({
                  use: ["css-loader", "sass-loader"],
                  fallback: 'style-loader'
                  })
          },
          // {
          // 	test: /\.scss$/,
          // 	loader: ExtractTextPlugin.extract("style", "css!sass")
          // },
          // {
          // 	// 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
          // 	// 如下配置，将小于8192byte的图片转成base64码
          // 	test: /\.(png|jpg|gif)$/,
          // 	loader: 'url-loader?limit=8192&name=./static/img/[hash].[ext]'
          // },
          {
              test: /\.js|jsx$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel-loader',
              query:{
                presets:['es2015','stage-0','react'],
                plugins:['transform-runtime',["import", { "libraryName": "antd"}]]
              }
          }
      ]
  },
  // resolve: require('./webpack-config/resolve.config.js'), // 沿用业务代码的resolve配置
};

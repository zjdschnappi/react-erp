var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
// var precss = require('precss');
// var cssnext = require('cssnext');
// var autoprefixer = require('autoprefixer');
// var cssnano = require('cssnano');
var Ex = require('extract-text-webpack-plugin');

var folder = path.resolve('./src/css');
var files = fs.readdirSync(folder);

var cssFileMap = {};
files.forEach(file => {
	if (/.less$/.test(file) && file.indexOf('_') === -1) {
		const name = file.replace(/.less$/, '')
		cssFileMap[name] = `./src/css/${name}.less`;
	}
});

module.exports = {
  entry: cssFileMap,
  output: {
    path: path.join(__dirname, '../assets/css'), //打包输出目录
    filename: "[name].css",
  },
  module: {
    rules: [
        {
          test: /\.less|css$/,
          loader: Ex.extract({
              use:['css-loader?-url','postcss-loader','less-loader'],
              fallback: 'style-loader',
            }),
        },
        // {
        //     test: /\.(png|jpe?g|gif|ico)(\?\S*)?$/,
        //     loader: "url-loader?limit=8192",
        // },
    ]
  },
  plugins: [
      new Ex('[name].css')
  ]
}

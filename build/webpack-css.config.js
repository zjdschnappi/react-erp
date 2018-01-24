var webpack = require('webpack');
var fs = require('fs');
var path = require('path');
// var precss = require('precss');
// var cssnext = require('cssnext');
// var autoprefixer = require('autoprefixer');
// var cssnano = require('cssnano');
var Ex = require('extract-text-webpack-plugin');

// var folder = path.resolve('./src/css');
// var files = fs.readdirSync(folder);
const readFileList = function(path, filesList) {
        var files = fs.readdirSync(path);
        files.forEach(function (itm, index) {
            var stat = fs.statSync(path + itm);
            if (stat.isDirectory()) {
            //递归读取文件
                readFileList(path + itm + "/", filesList)
            } else {

                var obj = {};//定义一个对象存放文件的路径和名字
                obj.path = path;//路径
                obj.filename = itm//名字
                filesList.push(obj);
            }

        })
    }
const getFileList = function (path) {
               var filesList = [];
               readFileList(path, filesList);
               return filesList;
           }

const fileList = getFileList('./src/css/');
var cssFileMap = {};
fileList.forEach(file => {
	if (/.less$/.test(file.filename) && file.filename.indexOf('_') === -1) {
		const name = file.filename.replace(/.less$/, '').replace(/.css$/, '')
		cssFileMap[name] = `${file.path}${file.filename}`;
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
          test: /\.(png|jpe?g|gif|ico)(\?\S*)?$/,
          // loader: "url-loader?limit=8192&name=/src/img/[name].[ext]",
          loader: [
            {
              loader:'url-loader',
              options:{
                limit: 8192,
                name: '../img/[name].[ext]'
              }
            }
          ]
        },
        {
          test: /\.less|css$/,
          use: Ex.extract({
              fallback: 'style-loader',
              use:[
                'css-loader',
                {
                  loader:'postcss-loader',
                  options: {
                    config: {
                      ctx: {
                        autoprefixer: {browsers: ['last 2 versions']},
                        cssnano: {}
                      }
                    }
                  }
                },
                'less-loader'
              ],
            }),
        },
    ]
  },
  plugins: [
      new Ex('[name].css')
  ]
}

/*eslint quotes: [0]*/
var fs = require('fs');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

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

const fileList = getFileList('./src/pages/');

const jsFileMap = {};
fileList.forEach(file =>{
	if(/\.js|jsx$/.test(file.filename)){
		let name = file.filename.replace(/\.js$/, '').replace(/\.jsx$/, '');
		jsFileMap[name] = `${file.path}${name}`;
	}
})
// jsFileMap['vendor'] = ['antd','react','react-dom'];
module.exports = {
	// The standard entry point and output config
	//每个页面的js文件
	entry: jsFileMap,
	externals: {//不打包以下模块，主要用在在scipt标签外部引入插件的时候
		'react': 'React',
   	'react-dom':'ReactDOM',
		'antd':'antd'
	},
	resolve: {
		extensions: ['.js', '.jsx'],//自动扩展文件后缀名，意味着我们导入模块可以省略不写后缀名
		alias: {
			//别名配置，，方便后续直接引用别名，无须多写长长的地址
			'module' : path.join(__dirname, '../src/module'),
			'component': path.join(__dirname, '../src/component'),
	      'css': path.join(__dirname, '../src/css'),
	      'store': path.join(__dirname, '../src/store'),
		}
	},
	output: {
		path: path.join(__dirname, '../assets'), //打包输出目录
		// 这里只是设置了一个占位符，构建的时候会用 window.publicPath + "/" 替换掉的
		// publicPath: PUBLIC_PATH, //webpack-dev-server访问的路径
		filename: '[name].js', //输出文件名
		// chunkFilename: 'bundle-[chunkhash:6].js', //输出chunk文件名
		chunkFilename: '[name].chunk.js', //输出chunk文件名
		// "runtimePublicPath": "window.whatever()",
		sourceMapFilename: "sourceMap/[file].map",
		libraryTarget: "umd"
	},
	module: {
		rules: [
			// {
			// 	test: /\.css$/,
			// 	loader: ExtractTextPlugin.extract({
			// 		use: ["css-loader"],
			// 		fallback: 'style-loader'
			// 		})
			// },
			// {
			// 	test: /\.less$/,
			// 	loader: ExtractTextPlugin.extract({
			// 		use: ["css-loader", "less-loader"],
			// 		fallback: 'style-loader'
			// 		})
			// },
			// {
		   //       test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		   //       loader: "url-loader?limit=10000&mimetype=application/font-woff"
	       // }, {
		   //       test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		   //       loader: "file-loader"
	       // },
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
				// query:{
        //   presets:['env','stage-0','react'],
        //   plugins: ["transform-runtime", "transform-decorators-legacy"]
        //   // plugins:['transform-runtime',["import", { "libraryName": "antd"}]]
        // }
			}
		]
	},
	// devtool: "source-map",
	plugins: [
		new NamedModulesPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		// new webpack.DllReferencePlugin({
	    //   context: __dirname,
	    //   manifest: require('./manifest.json'),
	    // }),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',//提取公共模块到vendor.js
			// minChunks: ({ resource }) => (
			//     resource &&
			//     resource.indexOf('node_modules') >= 0 &&
			//     resource.match(/\.js$/)
			//   ),
			minChunks:3
		})
		//
	]
};

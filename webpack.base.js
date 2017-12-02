/*eslint quotes: [0]*/
var fs = require('fs')
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// const CommonsChunkPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

// require("runtime-public-path-webpack-plugin");

// const DynamicPublicPathPlugin = require("./webpack-dynamic.js");
// const PUBLIC_PATH = 'likoshow4567';
var folder = path.resolve('./src')

var files = fs.readdirSync(folder);

var jsFileMap = {
	vendor: ['antd','react','react-dom']
}
files.forEach(file => {
	if (/.js$/.test(file) && file.indexOf('1') === -1) {
		const name = file.replace(/.js$/, '')
		jsFileMap[name] = `./src/${name}`;
	}
});

module.exports = {
	// The standard entry point and output config
	//每个页面的js文件
	entry: jsFileMap,
	externals: {
		// 'react': 'React',
   		// 'react-dom':'ReactDOM',
		// 'antd':'antd'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	// resolve: {
	// 	modulesDirectories: ['.']
	// },
	output: {
		path: path.join(__dirname, './assets'), //打包输出目录
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
		loaders: [
			{
				test: /\.css$/,
				// use: [
				// 'style-loader',
				// 'css-loader',
				// ]
				loader: ExtractTextPlugin.extract({
					use: ["css-loader"],
					fallback: 'style-loader'
					})
			},
			{
				test: /\.scss$/,
				// use: [
				// 'style-loader',
				// 'css-loader',
				// ]
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
			// {
			// 	test: /\.vue$/,
			// 	loader: 'vue-loader',
			// 	options: {
			// 		loaders: {
			// 			scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
			// 			sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax', // <style lang="sass">
			// 			css: 'vue-style-loader!css-loader'
			// 		}
			// 	}
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
	// devtool: "source-map",
	plugins: [
		new NamedModulesPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		// new DynamicPublicPathPlugin({
		// 	oldPublicPath: PUBLIC_PATH,
		// 	publicPath: 'window.publicPath + "/"',
		// 	outputPath: path.join(__dirname, 'assets')
		// }),
		// new ExtractTextPlugin('[name].css'),
		// 	new CommonsChunkPlugin({
		// 		minChunks: 2,
		// 		name: "pages.chunk",
		// 		chunks: ["home", "detail"]
		// 	}),
		// extract css into its own file
	    new ExtractTextPlugin({
	      filename: 'css/[name].css'
	    }),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor"
			// chunks: ["home", "pages.chunk", "detail", "list"]
		}),
		new webpack.DefinePlugin({
		  "process.env": {
		     NODE_ENV: JSON.stringify("production")
		   }
})
		//
	]
};

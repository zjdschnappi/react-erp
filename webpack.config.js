const webpack = require('webpack');
const optoins = require('./webpack.base.js');
optoins.plugins.push(new webpack.optimize.UglifyJsPlugin({
	// compress: {
	// 	properties: false,
	// },
	mangle: {
		except: ['require', 'exports', 'module', '$', 'jQuery', 'tools', 'doT'],
		// screw_ie8: false
	},
	sourceMap: true,
	'output': {
		ascii_only: true
	}
}))
optoins.plugins.push(
	new webpack.DefinePlugin({
	  "process.env": {
		 NODE_ENV: JSON.stringify("production")
	   }
	})
)
module.exports = optoins;

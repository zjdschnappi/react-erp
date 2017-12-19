const webpack = require('webpack');
const options = require('./webpack.base.js');
const os = require('os');

options.plugins.push(
	new webpack.optimize.UglifyJsPlugin({
		// compress: {
		// 	properties: false,
		// },
		mangle: {
			// 	except: ['require', 'exports', 'module', '$', 'jQuery', 'tools'],
			// 	// screw_ie8: false
			// },
			// sourceMap: true,
			// 'output': {
			// 	ascii_only: true
			// }
			compress:{
				warnings :false
			}
		}
	})
)
options.plugins.push(
	new webpack.DefinePlugin({
	  "process.env": {
		 NODE_ENV: JSON.stringify("production")
	   }
	})
)
module.exports = options;

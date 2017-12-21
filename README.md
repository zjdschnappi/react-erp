npm run dev 生成本地运行js(未压缩版)

npm run build 生成生产环境代码(压缩版)

npm run css 处理less文件(转为css并压缩)

共用文件lib.js由	
    'src/libs/react.min.js',
	'src/libs/react-dom.min.js',
	'src/libs/antd.min.js',
	'src/libs/polyfill.min.js'
四个文件合并而成。基本不会变化

共用文件common.js 里面是自己的业务逻辑代码，如tools.js以及jQuery的ajax设置等等

共用文件vendor.js 是webpack在每个入口js中寻找共用3次及以上的代码 提取出来的公共代码;
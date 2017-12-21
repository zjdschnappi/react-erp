 const Klass = {

		'util':{

			'getError':function(data){

				if(data["errorMessage"] !== null) {
					return data["errorMessage"]['message'] ||  data["errorMessage"];
				}else if(data["errorEnum"] !== null) {
					return data["errorEnum"]['message'];
				}else if(data["errorCode"] !== null) {
					return data["errorCode"];
				}else if(data["error"] !== null){
					return data["error"]['message'] || data["error"]['code'];
				}else if(data["detailMessage"] !== null){
					return data["detailMessage"];
				}else if(data["fieldErrors"] !== null){
					let _html = [];
					for(let i in data["fieldErrors"]){
						_html.push(data["fieldErrors"][i]);
					}
					return _html.join('；');
				}else {
					return null;
				}
			},

			'getErrorCode':function(data){
				if(data["errorCode"] !== null) {
					return data["errorCode"];
				}else if(data["error"] !== null){
					return data["error"]['code'];
				} else {
					return null;
				}
			},

			/**
			 * 自动补充0，比如在分钟把 3 变成 03
			 * @constructs
			 * @param {Int} val 传入的数字
			 * @param {Int} len 要填补0的个数
			 * @author <a href="mailto:jon@mail.huored.com">Jon</a>
			 * @returns {String} val
			 */
			'zeropad':function(val, len){
				val = '' + val;
				len = len || 2;
				while (val.length < len) { val = "0" + val; }
				return val;
			},

			/**
			 * 将字符转成整数，如果不能转，变成默认数值
			 * @constructs
			 * @param {String} _txt 要转成数字的字符
			 * @param {Number} _def 如果不能转，返回的数字，默认为 0
			 * @author <a href="mailto:jon@mail.huored.com">Jon</a>
			 * @returns {Number} _txt
			 */
			'str2Int':function(_txt,_def){
				_txt = parseInt(_txt,10);
				if(isNaN(_txt)){
					_txt = _def || 0;
				}

				return _txt;
			},


			/**
			 * 将字符转成数字(包括整数和小数)，如果不能转，变成默认数值
			 * @constructs
			 * @param {String} _txt 要转成数字的字符
			 * @param {Number} _def 如果不能转，返回的数字，默认为 0
			 * @author <a href="mailto:jon@mail.huored.com">Jon</a>
			 * @returns {Number} _txt
			 */
			'str2Number':function(_txt,_def){
				_txt = parseFloat(_txt);
				if(isNaN(_txt)){
					_txt = _def || 0;
				}

				return _txt;
			}
		},
		'date':{

			'getNow':function(){
				let _date = new Date();
				_date.setTime(_date.valueOf() - CONFIG['timeDiff']);
				return _date;
			},


			/**
			 * 把 yyyy-mm-dd hh:mm:ss
			 * yyyy-mm-dd
			 * yyyy/mm/dd
			 * 转成 Date 格式
			 * @param {String} v 日期字符
			 * @returns {Date} 时间
			 */
			'toDate':function(v){
				return v ? new Date(Date.parse(v.replace(/\-/g,'/'))) : null;
			},


			/**
			 * 格式化时间
			 * @constructs
			 * @param {Date} _date 时间
			 * @param {String} _format 格式 默认为 "yyyy-MM-dd hh:mm:ss";
			 * @author <a href="mailto:jon@mail.huored.com">Jon</a>
			 * @returns {String} 返回字符
			 */
			'format':function(_date,_format){
				let _map = {
					"M+":_date.getMonth()+1, //month
					"d+":_date.getDate(), //day
					"h+":_date.getHours(), //hour
					"m+":_date.getMinutes(), //minute
					"s+":_date.getSeconds(), //second
					"q+":Math.floor((_date.getMonth()+3)/3), //quarter
					"S":_date.getMilliseconds() //millisecond
				};

				_format = _format || 'yyyy-MM-dd hh:mm:ss';

				if(/(y+)/.test(_format)){
					_format=_format.replace(RegExp.$1,(_date.getFullYear()+"").substr(4 - RegExp.$1.length));
				}

				for(let k in _map){
					if(new RegExp("("+ k +")").test(_format)){
						_format = _format.replace(RegExp.$1,RegExp.$1.length==1 ? _map[k] :("00"+ _map[k]).substr((""+ _map[k]).length));
					}
				}

				return _format;
			},


			/**
			 * 获得时间，可以不怎么准确的
			 * @constructs
			 * @param {Data} _dt 时间
			 * @param {Boolean} _needYear 是否带年
			 * @author <a href="mailto:jon@mail.huored.com">Jon</a>
			 * @returns {String} _rt
			 */
			'getVagueTime':function(_dt,_needYear,_cb){

				if(arguments.length<2){
					_needYear = true;
				}


				// 如果不是日期类型
				if(!(_dt.getDate)){
					_dt = this.toDate(_dt);
				}

				let _now = this.getNow(),
				_isThisYear = _now.getFullYear() == _dt.getFullYear();
				_isToday = _now.getDate() == _dt.getDate(),
				_bt = _now.getTime() / 1e3 - _dt.getTime() / 1e3, // 差值
				_hour = _dt.getHours(),
				_min = _dt.getMinutes();
				_rt='';

				_hour = this.util.zeropad(_hour,2);
				_min = this.util.zeropad(_min,2);

				if(_bt < 0){
					_rt = (_dt.getMonth() + 1) + "月" + _dt.getDate() + "日" + _hour + ":" + _min;
				}else{
					switch(!0){
						case _bt<= 50:
							_rt = parseInt(_bt / 10 + 1) + "0秒前";
							break;

						case _bt > 50 && _bt < 3600:
							_rt = parseInt(_bt / 60 + 1) + "分钟前";
							break;

						case _bt >= 3600 && _bt < 86400:
							_rt = (_isToday ? "今天 " : "昨天 ") + _hour + ":" + _min;
							break;

						default:
							_rt = (_dt.getMonth() + 1) + "月" + _dt.getDate() + "日 " + _hour + ":" + _min;
							break;
					}
				}

				if(_cb && $.isFunction(_cb)){
					_cb(_bt);
				}

				return ((_needYear && !(_isThisYear))?_dt.getFullYear()+'年 ':'') + _rt;

			}
		},


		'ajax':{
			'createXhr':function(){
				let req;

				if(window.XMLHttpRequest){
					req = new XMLHttpRequest();
				}else{
					try{
						let _msArr = ['MSXML2.XMLHTTP.6.0','MSXML3.XMLHTTP','Microsoft.XMLHTTP','MSXML2.XMLHTTP.3.0'];

						for(let i = 0,l=_msArr.length;i<l;++i){
							try{
								req = new ActiveXObject(_msArr[i]);
								break;
							}catch(e2){
								continue;
							}
						}
					}catch(e){}
				}

				return req;
			}
		},


		'oi':{
			/**
			 * 动态上传
			 * @constructor
			 * @param {Object} options 配置
			 * @param {String} options['url'] 提交地址
			 * @param {Object} options['form'] 表单元素 jQeury 对象
			 * @param {Number} options['timeout'] 超时长
			 * @param {Function} options['onComplete'] 当返回信息后
			 * @param {Function} options['onTimeout'] 当超时后
			 * @param {Object} options['args']其它参数
			 * @param {String} options['callbackName'] 要调用的返回值
			 * @version 2012 beta release
			 * @returns {Null}
			 */
			'ijax':function(options){
				options = $.extend({
					'url':'',
					'form':null,
					'args':{},
					'timeout':30000,
					'onComplete':$.noop,
					'onTimeout':$.noop,
					'onFail':$.noop,
					'callbackName':null
				},options);

				if (!(options.form)) {
					throw "需要传入 form 值";
				}

				if (options.url == "") {
					options.url = options.form.attr('action');
				}

				if (options.url == "") {
					throw "需要传入 url 值";
				}

				let _iframe = this.getIframeTrans({
					'onComplete':function(){

						try{
							options['onComplete']($.parseJSON($.trim($('#'+(_iframe.getId())).contents().text())));
							// 如果可以返回，那么就不用超时了
							clearTimeout(_timer);
						}catch(e){
							options['onFail']();
							// 如果可以返回，那么就不用超时了
							clearTimeout(_timer);
						}
					}
				}),

				_abortFunc = function(){
					_iframe.destroy();
					_iframe = null;

					clearTimeout(_timer);
					_timer = null;
				};

				let i,
				_val,
				_input,
				_form=options['form'];
				// 创建隐藏域
				for(i in options['args']){
					_val = options['args'][i];
					_input = _form.find('input[name="'+i+'"]');
					if(_input.size()!==0){
						_input.val(_val);
					}else{
						_form.append('<input type="hidden" name="'+i+'" value="'+_val+'" />');
					}
				}

				// 设置表单并提交
				_form.attr({
					'action':options['url'],
					'target':_iframe.getId()
				}).get(0).submit();
				/*_form[0].action = options['url'];
				_form[0].target = _iframe.getId();
				_form[0].submit();*/

				let _timer = setTimeout(function(){
					_abortFunc();

					options['onTimeout']();

					let i;
					for(i in options){
						options[i] = null;
					}
					options = null;
					i = null;


				},options['timeout']);

				return {
					'abort':_abortFunc
				};

			},

			iUpload:(!!(window.FormData && ('upload' in ($.ajaxSettings.xhr()))))?function(options){
				let _form = options['form'],

				_formData = new FormData(_form[0]);

				$.ajax({
					'url':_form.attr('action'),
					'type':'POST',
					'data':_formData,
					'contentType':false,
					'processData':false,
					'dataType':'json',
					'success':function(db){
						options.onSuccess(db);
					},
					error:function(db){
						options.onFail(db);
					},
					fail:function(){
						options.onFail(db);
					}
				});
			}:function(options){
				let _form = options['form'];

				Klass.oi.ijax({
					'url':_form.attr('action'),
					'form':_form,
					timeout:3000,
					onComplete:function(db){
						options.onSuccess(db);
					},
					onFail:function(db){
						options.onFail(db);
					},
					onTimeout:function(){
						options.onTimeout(db);
					}
				});
			}

		},

		'obj':{

			/** 删除obj对象的所有属性，高效的将obj转化为一个崭新的对象！
			 * Description of constructor
			 * @constructs
			 * @param {Object} obj 要删除数据的对象
			 * @attention 只能删除一层，不能深层删除
			 * @author <a href="mailto:jon@mail.huored.com">Jon</a>
			 * @returns {Null}
			 */
			'wipe':function(obj){
				for(let i in obj){
					 if (obj.hasOwnProperty(i)){
						delete obj[i];
					 }
				}
			}
		},


		'arr':{

			/** 对 slice 方法的改进
			 * slice方法会返回一个新的数组对象
			 * Description of constructor
			 * @constructs
			 * @param {Array} arr 要删除数据的数组
			 * @param {Int} i 要删除数值的位置
			 * @author <a href="mailto:jon@mail.huored.com">Jon</a>
			 * @returns {Null}
			 */
			'slice':function(arr,i){
				for(let l = (arr.length-1);i<l;i++){
					arr[i] = arr[i+1];
				}
				arr.length = l;
			},


			/** 删除数组中的一个值
			 * Description of constructor
			 * @constructs
			 * @param {Array} _arr 要删除数据的数组
			 * @param {*} _val 要删除数值的值
			 * @author <a href="mailto:jon@mail.huored.com">Jon</a>
			 * @returns {Null}
			 */
			'remove':function(_arr,_val){
				let i = _arr.length;

				for(;i--;){
					if(_arr[i] === _val){
						this.slice(_arr,i);
					}
				}
			}
		},

		'editor': {
			//得到编辑器的内容长度
			'getEditorTextLength':function(editor){

				let _len = editor.getContentTxt().trim().length,

					//图片
					_imgs = $(editor.$body).find('img'),

					i = _imgs.length;

					for (; i--;) {
						let img = _imgs.eq(i);

						if (img.attr('role') === 'face') {
							_len += img.attr('alt').length;
						} else {
							_len += 4;
						}

					}
				return _len;
			},

			// 显示还剩多少字
			'reviewEditorTextLen':function(options){

				let _len = this.getEditorTextLength(options.editor),
					_form = $(options.editor.$body).closest('form');
					// _dom = _form.find('span[data-role="textCount"]');

				if(_len > options.maxlength){
					options.dom.html('已经超出<strong class="text-danger">'+(_len - options.maxlength)+'</strong>个字');
				}else{
					options.dom.html('还可以输入<strong>'+(options.maxlength - _len)+'</strong>个字');
				}

				// 如果字数为0，设置不可点
				if(_len === 0){
					// _form.find('input[type="submit"],button[type="submit"]').addClass('disabled').prop('disabled',true);
				} else if(_len > options.maxlength){
					_form.find('input[type="submit"],button[type="submit"],button[data-role="ok"]').addClass('disabled').prop('disabled',true);
				} else {
					_form.find('input[type="submit"],button[type="submit"],button[data-role="ok"]').removeClass('disabled').prop('disabled',false);
				}

			}
		},

		// 计算类
		'math':{
			'floatAdd':function(arg1,arg2){
				let r1,r2,m;
				try{r1=(''+arg1).split(".")[1].length;}catch(e){r1=0;}
				try{r2=(''+arg2).split(".")[1].length;}catch(e){r2=0;}
				m=Math.pow(10,Math.max(r1,r2));
				return (arg1*m+arg2*m)/m;
			},

			'floatSub':function(arg1,arg2){
				let r1,r2,m,n;
				try{r1=(''+arg1).split(".")[1].length;}catch(e){r1=0}
				try{r2=(''+arg2).split(".")[1].length;}catch(e){r2=0;}
				m=Math.pow(10,Math.max(r1,r2));
				//动态控制精度长度
				n=(r1>=r2)?r1:r2;
				return ((arg1*m-arg2*m)/m).toFixed(n);
			},

			 //浮点数乘法运算
			'floatMul':function(arg1,arg2){
				let m=0,
				s1=''+arg1,
				s2=''+arg2;

				try{m+=s1.split(".")[1].length;}catch(e){}
				try{m+=s2.split(".")[1].length;}catch(e){}
				return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
			},

			//浮点数除法运算
			'floatDiv':function(arg1,arg2){
				let t1=0,t2=0,r1,r2;
				try{t1=(''+arg1).split(".")[1].length}catch(e){}
				try{t2=(''+arg2).split(".")[1].length}catch(e){}

				r1=Number((''+arg1).replace(".",""));
				r2=Number((''+arg2).replace(".",""));
				return (r1/r2)*(Math.pow(10,t2-t1));

			}
		},

		'img':{
			// 获得 input file 里面 图片 的大小
			// 只用于支持 html5 的浏览器中
			//_input为原生
			'getInputFileSize': function(_input){

				let _val = _input.value;

				// 如果不是图片，返回 -1
				if(!/.(gif|jpg|jpeg|png)$/.test(_val.toLowerCase())){
					return -1;
				}

				// 如果支持 html5的
				if(_input.files){

					let _files = _input.files,
					i , l = _files.length,
					_arr=[];

					for(i = 0 ;i<l;i++){
						_arr.push(_files[i].size);
					}

					return _arr;

				}else{
					return -1;
				}
			}
		}

	};
export default Klass;

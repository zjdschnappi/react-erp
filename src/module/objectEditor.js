import '../libs/ueditor/editor';

export default class Ueditor {
    constructor(options){
        this._foreColors =['c00000','ff0000','ffc000','ffff00','92d050','00b050','00b0f0','0070c0','002060','7030a0','000000'];
        this._backColors = ['ff9595','ffba80','fafa4b','bbf57c','7cf2a1','acebff','9ec9ff','d4aeff','ffffff'];
        this.init(options);
    }


    		// options.toolbar string toolbar的id
    		// options.textarea string textarea的id
    	init(options) {

    		let _self = this;


    		this.params = options.params || {};

    		// 当发表成功后回调的函数
    		if(options.onAfterCreated){
    			this.onAfterCreated = options.onAfterCreated;
    		}

    		// 如果是弹出窗口
    		if(options.modal){

    			_self.modal = options.modal;
    		}


    		options = $.extend({
    			'minlength':5,
    			'maxlength':10000
    		},options);


    		this.minlength = options.minlength;
    		this.maxlength = options.maxlength;

    		_self.editorId = `object_editor_${options.textAreaId}`
    		// 暂时把全屏功能去掉
    		options.needFullScreen = false;

    		_self.container = options.container.css('position','relative').append('<div class="object-editor" action="#" method="post"><header onmousedown="return false"><ul class="object-editor-tool-bar clearfix" id="object_editor_tools"><li data-role="face"><i class="i-block i-face"></i>表情</li><li data-role="img"><i class="i-block i-img"></i>图片</li><li class="divider"></li><li data-role="forecolor"><i class="i-block i-forecolor"><em class="fore-color" data-role="foreColor"></em></i>颜色</li><li data-role="bold"><i class="i-block i-bold"></i>加粗</li><li data-role="backcolor"><i class="i-block i-backcolor"><em class="back-color" data-role="backColor"></em></i>底色</li><li data-role="removeformat"><i class="i-block i-removeformat"></i>清除格式</li>'+(options.needFullScreen ? '<li data-role="fullscreen"><i class="i-block i-fullscreen"><em class="full-screen" data-role="fullscreen"></em></i>全屏</li>' : '')+'</ul></header><div class="textarea" id="'+_self.editorId+'"></div></div>');

    		_self.initToolbar(_self.container.children('div').children('header'));

    		_self.editor = UM.getEditor(_self.editorId, {
    			'toolbar': ['forecolor'],
    			'initialFrameWidth':'100%', // 如果用 'auto', ie 下会报错
    			'initialFrameHeight':250
    		});

    		// 当编辑器 body获得焦点时，把所有的 dialog 隐藏
    		_self.editor.$body.on('focus',function(){

    			_self.hideDialog('face');
    			_self.hideDialog('img');
    			_self.hideDialog('forecolor');
    			_self.hideDialog('backcolor');

    		});

    		// 当选中时，查看当前文字的状态
    		_self.editor.addListener('selectionchange', function(){

    			// 前景色
    			let _state = this.queryCommandState('forecolor');

    			if(!(_state) || _state < 0){
    				_state = ''
    			}else{
    				_state = _state.toLowerCase().split('#')[1];
    			}


    			// 如果能找到当前颜色
    			if($.inArray(_state,_self._foreColors) > -1){

    				// 设置当前的颜色
    				_self['toolbar'].find('em[data-role="foreColor"]').css('background-color','#' + _state).closest('li').addClass('active');

    			}else{
    				// 去除样式
    				_self['toolbar'].find('em[data-role="foreColor"]').removeAttr('style').closest('li').removeClass('active');

    			}



    			// 是否加粗
    			_state = this.queryCommandState('bold');

    			// 如果是加粗，设置当前样式
    			if(_state == 1){
    				_self['toolbar'].find('li[data-role="bold"]').addClass('active');
    			}else{
    				_self['toolbar'].find('li[data-role="bold"]').removeClass('active');
    			}

    			// 底色
    			_state = this.queryCommandState('backcolor');

    			if(!(_state) || _state < 0){
    				_state = ''
    			}else{
    				_state = _state.toLowerCase().split('#')[1];
    			}

    			// 如果能找到当前颜色
    			if($.inArray(_state,_self._backColors) > -1){

    				// 设置当前的颜色
    				_self['toolbar'].find('em[data-role="backColor"]').css('background-color','#' + _state).closest('li').addClass('active');

    			}else{
    				// 去除样式
    				_self['toolbar'].find('em[data-role="backColor"]').removeAttr('style').closest('li').removeClass('active');

    			}


    		});

    		// 如果要自动保存
    		if(options.autoSave){

    			if($.support.localStorage === undefined){
    				$.support.localStorage = 'localStorage' in window && window['localStorage'] !== null;
    			}

    			if($.support.localStorage && localStorage.getItem('objectEditorContent')){
    				// 用 setContent,有内存问题
    				_self.editor.execCommand('inserthtml',localStorage.getItem('objectEditorContent'),true);
    			}

    			$(window).on('beforeunload',function(){

    				if(_self.editor.hasContents() && (!(_self.modal) || _self.modal.is(':visible'))){
    					// 如果有内容
    					if($.support.localStorage === undefined){
    						$.support.localStorage = 'localStorage' in window && window['localStorage'] !== null;
    					}

    					if($.support.localStorage){
    						localStorage.setItem('objectEditorContent',_self.editor.getPlainTxt());
    					}

    					// let message = '编辑器内还有内容，是否继续关闭浏览器？';
    					// e.returnValue = message;
    					return;
    				}

    			});
    		}
    	}

    	initToolbar(_dom) {

    		let _self = this;

    		_self.toolbar = _dom;

    		_self.toolbar.on('mouseenter','li',function(){

    			$(this).addClass('hover').siblings('li').removeClass('hover');

    		}).on('mouseleave','li',function(){
    			$(this).removeClass('hover');

    		}).on('click','li',function(){

    			let _btn = $(this),
    				_role = _btn.attr('data-role');

    			if(_role === 'bold'){
    				_self.editor.execCommand('bold');

    			}else if(_role === 'removeformat'){

    				_self.editor.execCommand('removeformat');

    			}else if(_role === 'fullscreen'){

    				if(_self.fullscreen && $.isFunction(_self.fullscreen)){
    					_self.fullscreen();
    				}

    			}else{

    				// 如果已经显示出来了
    				if(_self[_role+'DialogIsShow']){

    					// 关闭
    					_self.hideDialog(_role);
    				}else{
    					// 显示
    						if(!(_self[_role+'Dialog'])){

    							_self.createDialog(_role);

    						}

    						_self.showDialog(_role);


    					if(_role === 'forecolor'){

    						// 要查看当前的颜色值
    						let _color = _self.editor.queryCommandState('forecolor'),
    							_span = _self['forecolorDialog'].find('span[data-color="'+(_color.replace(/#/,'').toLowerCase())+'"]');

    						_self['forecolorDialog'].find('li.active').removeClass('active');

    						if(_span.length !== 0){
    							_span.closest('li').addClass('active');
    						}



    					}else if(_role === 'backcolor'){

    						// 要查看当前的颜色值
    						let _color = _self.editor.queryCommandState('backcolor'),
    							_span = _self['backcolorDialog'].find('span[data-color="'+(_color.replace(/#/,'').toLowerCase())+'"]');

    						_self['backcolorDialog'].find('li.active').removeClass('active');

    						if(_span.length !== 0){
    							_span.closest('li').addClass('active');
    						}
    					}



    				}

    			}




    		});

    	}

    	createDialog(_role) {

    		switch(_role){
    			// 表情
    			case 'face':
    				this.createFaceDialog();
    				break;

    			// 图片
    			case 'img':
    				this.createImgDialog();
    				break;

    			case 'forecolor':

    				this.createForecolorDialog();
    				break;

    			case 'backcolor':
    				this.createBackcolorDialog();
    				break;


    			default:
    				break;
    		}

    	}
    	/**
    	 * 创建表情包选择条
    	 * @param  {list} emotionList   存放了表情包name和url
    	 * @param  {Number} pkgNo      是一组表情包中第一个的index
    	 */
    	createFaceHeader(emotionList, pkgNo) {
    		$('.face-header').hide();
    		if(this.pkgIndex[pkgNo]){
    			$('ul[data-index="' + pkgNo + '"]').show();
    		}
    		else {

    			let faceHeader = '<ul class="face-header clearfix" data-index=' + pkgNo + '>';
    			let _db;

    			_db = emotionList[0];
    			faceHeader += '<li class="face-pkg"><img data-role="emotion-pkg" title="'+_db['value'][0]['name']+'" alt="'+_db['name']+'" src="' + this._linkTop + 'normal/' +_db['value'][0]['url']+'"></li>';

    			faceHeader += '</ul>';
    			$(faceHeader).prependTo($('.editor-dialog-face').eq(0));
    			this.pkgIndex[pkgNo] = true;
    		}

    	}
    	/**
    	 * 创建表情包选择条
    	 * @param  {list} emotionList   存放了表情包name和url
    	 * @param  {Number} pkgNo      是一组表情包中第一个的index
    	 */

    	//指定表情包，已经存在就直接显示,没有就创建
    	getFaceBlock(emotionData, pkgname) {

    		this['faceDialog'].find('div.face-wrap').hide();

    		let $pkg = $('#dom_face_' + pkgname);
    		if($pkg.length){
    			$pkg.show();
    		}
    		else {
    			let _db,
    			pkg = emotionData[pkgname],
    			i,l = pkg.length;

    			let facepath = (pkgname === 'normal') ? 'normal/' : 'middle/' + pkgname + '/';
    			let liClass = (pkgname === 'normal') ? 'face face-sm' : 'face face-bg';

    			let html = '<div class="face-wrap" id="dom_face_' + pkgname +'">';
    			html += '<ul class="face-list clearfix">';
    			for(i=1; i<l; i++){
    				_db = pkg[i];
    				html += '<li class="' + liClass +'"><img data-role="emotion" title="'+(_db['name'])+'" alt="'+(_db['name'])+'" src="' + this._linkTop+ facepath +(_db['url'])+'"></li>';
    			}
    			$(html + '</ul></div>').insertBefore($('#dom_face_preview'));
    		}
    	}
    	//创建表情框
    	createFaceDialog() {

    		//获得并处理表情包数据
    		this._linkTop = CONFIG['resourcePath'] + '/img/emotion/';
    		// let emotionData = require('data/emotion');
    		let _normal = emotionData.normal;
    		if(!_normal) return;

    		//emotionList打算用于表情包的批量切换
    		let emotionList = [];
    		for(let key in emotionData){
    			if(key !== 'normal'){
    				emotionList.push({
    					'name':key,
    					'value':emotionData[key]});
    			}
    		}
    		emotionList = [{'name':'normal','value':_normal}].concat(emotionList);


    		//创建表情框总体框架
    		let _html = '<div class="editor-dialog editor-dialog-face "><i class="i-arr1 bgc"></i><i class="i-arr2 bgc"></i>';
    		_html += '<div id="dom_face_preview" class="preview"></div>';
    		this['faceDialog'] = $(_html + '</div>').appendTo(this.container);

    		//创建表情框头部
    		this.pkgIndex = [];
    		this.createFaceHeader(emotionList, 0);
    		$('.face-pkg').eq(0).addClass('active');

    		//创建表情框body
    		this.getFaceBlock(emotionData, 'normal');

    		// 创建事件
    		this.createFaceEvent(emotionData);

    	}
    	createFaceEvent(emotionData) {
    		let _self = this;
    		let $preview = $('#dom_face_preview');
    		this['faceDialog'].on('click','li.face',function(){
    			//插入表情事件

    			let _img = $(this).children('img').eq(0);
    			let bigImgSrc = (_img.attr('src')).replace('middle', 'normal').replace('png', 'gif');

    			// 要看看当前插入的位置
    			_self.checkInsertHtmlPos();

    			_self.editor.execCommand('insertHtml', '<img class="tag-face" alt="'+_img.attr('alt')+'" role="face" src="'+ bigImgSrc +'">',true);

    			_self.hideDialog('face');

    		}).on('click','li.face-pkg',function(){
    			//表情包点击切换事件函数

    			let $this = $(this);
    			$this.addClass('active').siblings().removeClass('active');
    			let pkgname = $this.children('img').eq(0).attr('alt');

    			_self.getFaceBlock(emotionData, pkgname);

    		}).on('mouseenter','li.face', function() {
    			//详细表情hover效果函数（大表情和小表情都有）

    			$(this).addClass('li-hover');
    		}).on('mouseenter','li.face-bg', function() {

    			let $this = $(this),
    				_offset = $this.position();

    			$preview.empty().html('<i class="fa fa-spinner fa-spin text-muted"></i>').show().css({'left':_offset.left + $this.outerWidth() - 2 + 'px','top':_offset.top - $preview.outerHeight() + 'px'});


    			let _img = $this.children('img').eq(0);

    			let bigImg = new Image();
    			bigImg.onload = function() {
    				$preview.empty().append(bigImg)
    				  .css({'left':_offset.left + $this.outerWidth() - 2 + 'px','top':_offset.top - $preview.outerHeight() + 'px'});
    			};
    			bigImg.src = _img.attr('src').replace('middle', 'normal').replace('.png', '.gif');

    		}).on('mouseleave','li.face', function() {
    			$(this).removeClass('li-hover');
    			$preview.empty().hide();
    		});
    	}

    	createImgDialog() {
    		let _self = this;

    		_self['imgDialog'] = $('<div class="editor-dialog editor-dialog-img"><i class="i-arr1"></i><i class="i-arr2"></i><button class="btn-close" type="button" title="关闭">&times;</button><ul class="nav-tab clearfix"><li class="active">本地上传</li></ul><div class="img-list"><p>最多上传10张图片，单张图片请小于5M</p><ul class="imgs clearfix"></ul></div><div class="editor-foot"><button class="btn btn-cancel" type="button" data-action="cancel">取消</button><button class="btn btn-ok" type="button" data-action="ok">插入</button></div></div>');

    		_self.container.append(_self['imgDialog']);

    		_self['imgDialog'].find('button.btn-close').on('click',function(){
    			_self.hideDialog('img');
    		});

    		_self['imgDialog'].on('click','i.fa-trash',function(){
    			let _btn = $(this),

    			_ul = _btn.closest('ul');

    			_btn.closest('li').remove();

    			// 如果已经没有了上传按钮
    			if(_ul.children('li.btn-add').length === 0){
    				_self.initUploadInput();
    			}

    			_btn = null;

    		}).find('div.editor-foot').on('click','button',function(){

    			let _action = $(this).attr('data-action');

    			if(_action === 'ok'){
    				let _imgs = _self['imgDialog'].find('ul.imgs').find('img');
    				if(_imgs.length === 0){
    					bootbox.alert({
    						'backdrop':false,
    						'animate':false,
    						'className':'section-modal',
    						'size': 'small',
    						'title':'提示',
    						'buttons':{
    							ok:{
    								'label':'我知道了'
    							}
    						},
    						message: '<p class="text-lg text-warning"><i class="fa fa-warning"></i> 请点击“添加图片”按钮，上传图片</p>'
    					});
    				}else{
    					// 插入到编辑器里面
    					let _img;

    					_self.checkInsertHtmlPos();

    					for(let i = 0,l = _imgs.length; i<l; i++){

    						_img = _imgs.eq(i);

    						_self.editor.execCommand('inserthtml','<img src="'+_img.attr('src')+'" data-fileName="'+_img.attr('data-fileName')+'" alt="'+_img.attr('alt')+'" role="img" />',true);
    					}


    					// 清空
    					_self['imgDialog'].find('ul.imgs').empty();

    					_self.initUploadInput();

    					_self.hideDialog('img');
    				}


    			}else{
    				// 关闭
    				_self.hideDialog('img');

    			}

    		});

    		_self.initUploadInput();

    	}


    	createForecolorDialog() {

    		let _self = this,
    		_colors = _self['_foreColors'],

    		_html = '',
    		i,l = _colors.length;

    		for(i=0; i<l; i++){

    			_html += '<li><span style="background-color:#'+ _colors[i] +'" data-color="'+ _colors[i] +'"></span></li>';

    		}


    		_self['forecolorDialog'] = $('<div class="editor-dialog editor-dialog-color" onmousedown="return false"><i class="i-arr1"></i><i class="i-arr2"></i><ul class="color-list clearfix">' + _html + '</ul></div>');

    		_self.container.append(_self['forecolorDialog']);

    		_self['forecolorDialog'].on('click','li',function(){

    			_self.editor.execCommand('forecolor',UM.dom.domUtils.getComputedStyle( $(this).children('span')[0], 'background-color'));

    			_self.hideDialog('forecolor');

    		});

    	}

    	createBackcolorDialog() {

    		let _self = this,
    		_colors = _self['_backColors'],

    		_html = '',
    		i,l = _colors.length;

    		for(i=0; i<l; i++){

    			_html += '<li><span style="background-color:#'+ _colors[i] +'" data-color="'+ _colors[i] +'"></span></li>';

    		}

    		_self['backcolorDialog'] = $('<div class="editor-dialog editor-dialog-color editor-dialog-backcolor" onmousedown="return false"><i class="i-arr1"></i><i class="i-arr2"></i><ul class="color-list clearfix">' + _html + '</ul></div>');

    		_self.container.append(_self['backcolorDialog']);

    		_self['backcolorDialog'].on('click','li',function(){

    			// 如果当前颜色为白色，表明要清空颜色值
    			let _color = UM.dom.domUtils.getComputedStyle( $(this).children('span')[0], 'background-color');

    			_color.toLowerCase();
    			if(_color !== '#ffffff'){
    				_self.editor.execCommand('backcolor',_color);
    			}else{
    				_self.editor.execCommand('backcolor','');
    			}

    			_self.hideDialog('backcolor');

    		});

    	}

    	// // 当前图片数量
    	// '_imgCount':0,

    	// 去除以前的 file 控件，加入一个新的
    	initUploadInput() {

    		let _self = this;
    		_self['imgDialog'].find('li.btn-add').remove();

    		let _allImgsSize = _self['imgDialog'].find('ul.imgs').children('li').filter(function(){
    			// 去掉添加图片按钮
    			return !$(this).hasClass('btn-add');
    		}).length;

    		// 再加上已经插入到编辑器里面的图片
    		_allImgsSize += $(_self.editor.body).find('img[role="img"]').length;

    		// 如果不大于10个
    		if(_allImgsSize < 10){
    			_self._imgCount ++;

    			// 上传图片为本域名就可以了
    			_self['imgDialog'].find('ul.imgs').append('<li class="btn-add"><form action="/post/imageTempUpload.htm" method="post" enctype="multipart/form-data"><span class="i-add">+</span>添加图片<input class="input-file-hide" type="file" accept="image/gif,image/png,image/jpeg" name="uploadImage_'+_self._imgCount+'" /></form></li>');

    			// 如果改变了
    			_self['imgDialog'].find('input[type="file"]').on('change',function(){


    				let _form = $(this).closest('form'),

    				_val = this.value.toLowerCase();
    				if(!/\.(gif|jpg|jpeg|png)$/.test(_val)){
    					bootbox.alert({
    						'backdrop':false,
    						'animate':false,
    						'className':'section-modal',
    						'size': 'small',
    						'title':'提示',
    						'buttons':{
    							ok:{
    								'label':'我知道了'
    							}
    						},
    						message: '<p class="text-lg text-warning"><i class="fa fa-warning"></i> 只支持<strong>JPG</strong>、<strong>PNG</strong>、<strong>GIF</strong></p>'
    					});

    					// 重新设置下
    					_self.initUploadInput();

    				}else{

    					//求得图片体积大小
    					let _sizes = Tools.img.getInputFileSize(this),
    					_canUpload = true;
    					if($.isArray(_sizes)){
    						//图片最大为5M
    						let _maxSize = 5 * 1024 *1024,
    						l = _sizes.length;

    						for(; l--; ){
    							if(_sizes[l] > _maxSize){
    								_canUpload = false;
    								bootbox.alert({
    									'animate':false,
    									'className':'section-modal',
    									'size': 'small',
    									'title':'提示',
    									'buttons':{
    										ok:{
    											'label':'我知道了'
    										}
    									},
    									'backdrop':false,
    									message: '<p class="text-lg text-warning"><i class="fa fa-warning"></i> 对不起！上传的图片大小不能超过<strong>5M</strong>！</p>'
    								});
    								break;
    							}
    						}

    					}


    					// 如果可以
    					if(_canUpload){

    						// 显示正在上传
    						_self['imgDialog'].find('ul.imgs').find('li.btn-add').after('<li class="loading-item"></li></li>');
    						Tools.oi.iUpload({
    							'form':_form,
    							'onSuccess':function(db){
    								// 如果成功了
    								if(db['success']){
    									// 替换正在载入样式
    									let _item = $('<li><img src="'+db['url']+'" alt="'+db['original']+'" data-fileName="'+db['fileName']+'" /><span class="mask"></span><i class="fa fa-trash" title="删除"></i></li></li>');

    									_self['imgDialog'].find('li.loading-item').replaceWith(_item);

    									_item.find('img').on('load',function(){
    										let _img = $(this),
    										_w = _img.width(),
    										_h = _img.height(),
    										_rate = _w/_h;

    										// 如果宽大于高
    										if(_rate > 1){
    											_img.css('width','78px');
    										}else{
    											_img.css('height','78px');
    										}

    									});

    									_self.initUploadInput();

    								}else{
    									_self.initUploadInput();

    									// 如果是登录
    									if(db['errorCode'] && db['errorCode']==='USER_NOT_LOGIN'){

    										window.location.reload(true);


    										// 去除正在载入的
    										_self['imgDialog'].find('li.loading-item').remove();
    										_self.initUploadInput();


    									}
    									else{

    										let _tip = Tools.util.getError(db);

    										if(_tip !== null){

    											// 如果是 fieldErrors
    											if($.isPlainObject(_tip)){
    												let _objTip = [];
    												for(let i in _tip){
    													_objTip.push(_tip[i]);
    												}

    												_tip = _objTip.join('；');

    											}

    										}else{
    											_tip = '对不起，上传图片时发生了错误，请稍候再试。';
    										}

    										bootbox.alert({
    											'backdrop':false,
    											'animate':false,
    											'className':'section-modal',
    											'size': 'small',
    											'title':'提示',
    											'buttons':{
    												ok:{
    													'label':'我知道了'
    												}
    											},
    											message: '<p class="text-lg text-warning"><i class="fa fa-warning"></i> '+_tip+'</p>'
    										});
    									}

    								}
    							},

    							'onFail':function(db){
    								let _db = db.responseText;
    								_self['imgDialog'].find('li.loading-item').remove();

    								_self.initUploadInput();

    								// 如果是登录
    								if(_db['errorCode'] && _db['errorCode']==='USER_NOT_LOGIN'){
    									window.location.reload(true);
    								}else{

    									let _tip = Tools.util.getError(_db);

    									if(_tip !== null){

    										// 如果是 fieldErrors
    										if($.isPlainObject(_tip)){
    											let _objTip = [];
    											for(let i in _tip){
    												_objTip.push(_tip[i]);
    											}

    											_tip = _objTip.join('；');

    										}

    									}else{
    										_tip = '对不起，上传图片时发生了错误，请稍候再试。';
    									}

    									bootbox.alert({
    										'backdrop':false,
    										'animate':false,
    										'className':'section-modal',
    										'size': 'small',
    										'title':'提示',
    										'buttons':{
    											ok:{
    												'label':'我知道了'
    											}
    										},
    										message: '<p class="text-lg text-warning"><i class="fa fa-warning"></i> '+_tip+'</p>'
    									});

    								}

    							},

    							'onTimeout':function(){

    								_self['imgDialog'].find('li.loading-item').remove();

    								_self.initUploadInput();

    								bootbox.alert({
    									'backdrop':false,
    									'animate':false,
    									'className':'section-modal',
    									'size': 'small',
    									'title':'提示',
    									'buttons':{
    										ok:{
    											'label':'我知道了'
    										}
    									},
    									message: '<p class="text-lg text-warning"><i class="fa fa-warning"></i> 上传图片超时</p>'
    								});

    							}
    						});
    					}else{
    						_self.initUploadInput();
    					}

    				}

    			});

    		}

    	}

    	showDialog(_role) {

    		let _arr = ['face','img','forecolor','backcolor'],
    		i = _arr.length;

    		for(;i--;){
    			// 如果是当前的，显示
    			if(_role === _arr[i]){
    				this[_role + 'Dialog'].show();

    				this[_role + 'DialogIsShow'] = true;

    				if(_role === 'img'){

    					// 要看当前有多少张图片，如果图片小于10，但是添加图片按钮没有，显示添加按钮
    					if(this.editor.$body.find('img[role="img"]').length < 10 && this['imgDialog'].find('li.btn-add').length === 0){
    						this.initUploadInput();
    					}

    				}


    			}else{

    				// 如果不是当前的，隐藏

    				if(this[_arr[i] + 'Dialog']){
    					this[_arr[i] + 'Dialog'].hide();

    					this[_arr[i] + 'DialogIsShow'] = false;
    				}

    			}
    		}


    	}


    	hideDialog(_role) {

    		if(this[_role + 'Dialog']){
    			this[_role + 'Dialog'].hide();

    			this[_role + 'DialogIsShow'] = false;
    		}

    	}

    	// '_hideDom':$('<div><div>'),


    	getValue(isDismiss) {

    		let _hideContent = this._hideDom;
    		_hideContent.empty().append(this.editor.getContent());

    		// 字长度
    		let _len = $.trim(_hideContent.text()).length,

    		_error = '',

    		_imgLen = _hideContent.find('img[role="img"]').length;

    		if(_imgLen > 10){
    			_error = '图片不能超过<strong>10</strong>张';
    		}

    		if(_error !== ''){
    			bootbox.alert({
    				'backdrop':false,
    				'animate':false,
    				'className':'section-modal',
    				'size': 'small',
    				'title':'提示',
    				'buttons':{
    					ok:{
    						'label':'我知道了'
    					}
    				},
    				'message':'<i calss="fa fa-warning text-warning"></i> ' + _error
    			});

    			return '';
    		}

    		// 如果是表情
    		let _tags = _hideContent.find('img[role="face"]'),
    		_tag,
    		_replaceTxt,
    		i=_tags.length;

    		// 更新表情
    		for(;i--;){
    			_tag = _tags.eq(i);

    			_len += _tag.attr('alt').length;

    			_tag.replaceWith(this.formatEmotion(_tag));
    		}

    		// 更新标签
    		_tags = _hideContent.find('input[role],img[role="img"]');
    		i=_tags.length;
    		for(;i--;){
    			_tag = _tags.eq(i);

    			if(_tags.is('input')){
    				_len += _tag.val().length;
    			}else{
    				_len += _tag.attr('alt').length;
    			}

    			_tag.replaceWith(this.formatTag(_tag));
    		}
    		if(!isDismiss){
    			// 如果没有内容，除发表话题，其它都显示 内容不能为空哦，随便说点什么吧

    			if(this.minlength <= 1 && _len === 0){
    				bootbox.alert({
    					'backdrop':false,
    					'animate':false,
    					'className':'section-modal',
    					'size': 'small',
    					'title':'提示',
    					'buttons':{
    						ok:{
    							'label':'我知道了'
    						}
    					},
    					'message':'<i calss="fa fa-warning text-warning"></i> 内容不能为空哦，随便说点什么吧'
    				});

    				return '';

    			}else if(this.minlength > 1 && _len < this.minlength){
    				bootbox.alert({
    					'backdrop':false,
    					'animate':false,
    					'className':'section-modal',
    					'size': 'small',
    					'title':'提示',
    					'buttons':{
    						ok:{
    							'label':'我知道了'
    						}
    					},
    					'message':'<i calss="fa fa-warning text-warning"></i> 内容不能小于<strong>' + this.minlength + '</strong>个字'
    				});

    				return '';
    			}else if(_len > 10000){
    				bootbox.alert({
    					'backdrop':false,
    					'animate':false,
    					'className':'section-modal',
    					'size': 'small',
    					'title':'提示',
    					'buttons':{
    						ok:{
    							'label':'我知道了'
    						}
    					},
    					'message':'<i calss="fa fa-warning text-warning"></i> 您发表的内容过长'
    				});

    				return '';
    			}else if(this.maxlength < 10000 && _len > this.maxlength){

    				bootbox.alert({
    					'backdrop':false,
    					'animate':false,
    					'className':'section-modal',
    					'size': 'small',
    					'title':'提示',
    					'buttons':{
    						ok:{
    							'label':'我知道了'
    						}
    					},
    					'message':'<i calss="fa fa-warning text-warning"></i> 发表的内容不能超过<strong>' + this.maxlength + '</strong>个字'
    				});

    				return '';

    			}else{
    				// 编辑器不能再改
    				this.editor.setDisabled('fullscreen');

    				return _hideContent.html();

    			}
    		}else{
    			return {
    				_content: _hideContent.html(),
    				_len : _len
    			};
    		}

    	}

    	formatEmotion(_img) {
    		//[EMOTION imageName="normal/vw.gif"/]
    		// http://weibo-local.huored.net/images/weibo/emotion/
    		let _src = _img.attr('src').split('/emotion/')[1];
    		return '<emotion image_name="'+_src+'" image_alt="'+_img.attr('alt')+'">'+_img.attr('alt')+'</emotion>';

    	}

    	formatTag(_tag) {
    		let _tagType = _tag.attr('role');

    		switch(_tagType){
    			case 'img':
    				return '<upload_image file_name="'+_tag.attr('data-fileName')+'">[图片]</upload_image>';

    			default:
    				break;

    		}

    	}


    	clean() {

    		// this.editor.execCommand('cleardoc');
    		this.editor.setContent('');
    		this.cleanLocalStorage();

    		// 清空上传图片
    		if(this['imgDialog']){
    			this['imgDialog'].find('ul.imgs').empty();

    			this.initUploadInput();
    		}

    	}

    	// 清空 localStorage 缓存
    	cleanLocalStorage() {

    		if($.support.localStorage){
    			localStorage.removeItem('objectEditorContent');
    		}

    	}

    	checkInsertHtmlPos() {
    		// 如果当前有选区
    		let _range = this.editor.selection.getRange(),
    			_start = _range ?  _range.startContainer : null;

    		if(_start){

    			// 如果父元素是 span, 转到另一个
    			if(_start.nodeName === 'SPAN'){
    				_range.setStartAfter(_start).collapse(!0).select();
    			}else{
    				let _elm = $(_start);
    				// 如果父元素是 span
    				if(_elm.parent().is('span')){
    					_range.setStartAfter(_elm.parent()[0]).collapse(!0).select();
    				}
    			}

    		}

    	}
}

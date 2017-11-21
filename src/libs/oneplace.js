/*! http://mths.be/placeholder v2.1.2 by @mathias */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
		define('oneplace', function(){return factory(jQuery);}); // jQuery Switch
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

	'use strict';
	
    if($.support.placeholder === undefined){
		$.support.placeholder = 'placeholder' in document.createElement('input');
	}

	if($.support.placeholder){
		
		$.fn.oneplace = function() {
            return this;
        };
	}else{
		
		
		$.fn.oneplace = function(options) {
			
			options = $.extend({
				'customClass':'oneplace',
				'setPosition':true // 是否给父元素加上 position relative
			},options);
			
			this.each(function(){
				
				var _this = $(this);
				// 只支持 text,textarea,
				var _type = _this.attr('type').toLowerCase(),
				_nodeName = this.nodeName.toLowerCase(),
				_placeText = _this.attr('placeholder');
				
				// 支持类型
				if((_nodeName === 'input' || _nodeName === 'textarea') && _placeText!== undefined && _placeText !== '' && ($.inArray(_type,['text','password','search','tel','mail','number']) !== -1)){
					
					if(options['setPosition']){
						_this.parent().css('position','relative');
					}
					
					var _offset = _this.position(),
					
					_domPlace = $('<span class="' + options['customClass'] + '" data-role="oneplace">' + _placeText + '</span>');
					
					var _cssmap = {
						'left': (parseInt(_offset.left,10) + parseInt(_this.css('paddingLeft'),10)) + 'px',
						'top':(parseInt(_offset.top,10) + parseInt(_this.css('paddingTop'),10)) + 'px',
						'line-height':_this.css('line-height')
					}
					
					// 如果是 textarea,要计算下宽度
					if(_type === 'textarea'){
						
						_cssmap['width'] = _this.width() + 'px';
						
					}

					_domPlace.css(_cssmap);
					
					_this.parent().append(_domPlace);
					
					
					_this.on('focus.oneplace',function(){
						_domPlace.hide();
					}).on('blur.oneplace',function(){
						
						if(this.value === ''){
							_domPlace.show();
						}
						
					});
					
					_domPlace.on('click.oneplace',function(){
						$(this).hide();
						
						_this[0].focus();
					});
					
					if(this.value !== ''){
						_domPlace.hide();
					}

				}
				
			});
			
			
			
            return this;
        };
	}

}));
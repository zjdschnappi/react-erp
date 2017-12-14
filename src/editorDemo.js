import Ueditor from './module/objectEditor';
const Klass = {
    init(){
        new Ueditor({
            'container': $('#app'),
            'textAreaId':'app'
        })
        new Ueditor({
            'container': $('#app1'),
            'textAreaId':'app1'
        })
    }
};
$(function () {
    Klass.init();
})

!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var l in a)("object"==typeof exports?exports:e)[l]=a[l]}}(this,function(){return webpackJsonp([4],{"./src/register.js":function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}var r=a("./node_modules/babel-runtime/helpers/extends.js"),n=l(r),s=a("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),c=l(s),o=a("./node_modules/babel-runtime/helpers/classCallCheck.js"),i=l(o),u=a("./node_modules/babel-runtime/helpers/createClass.js"),m=l(u),d=a("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=l(d),p=a("./node_modules/babel-runtime/helpers/inherits.js"),f=l(p),b=antd,R=b.Form,g=b.Input,E=b.Tooltip,v=b.Icon,y=b.Cascader,C=b.Select,k=b.Row,w=b.Col,j=b.Checkbox,x=b.Button,_=b.AutoComplete,S=R.Item,q=C.Option,B=_.Option,F=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],P=function(e){function t(e){(0,i.default)(this,t);var a=(0,h.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return a.state={confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=a.handleSubmit.bind(a),a.handleConfirmBlur=a.handleConfirmBlur.bind(a),a.checkPassword=a.checkPassword.bind(a),a.checkConfirm=a.checkConfirm.bind(a),a}return(0,f.default)(t,e),(0,m.default)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.form.validateFieldsAndScroll(function(e,t){e||console.log("Received values of form: ",t)})}},{key:"handleConfirmBlur",value:function(e){var t=e.target.value;this.setState({confirmDirty:this.state.confirmDirty||!!t})}},{key:"checkPassword",value:function(e,t,a){var l=this.props.form;t&&t!==l.getFieldValue("password")?a("Two passwords that you enter is inconsistent!"):a()}},{key:"checkConfirm",value:function(e,t,a){var l=this.props.form;t&&this.state.confirmDirty&&l.validateFields(["confirm"],{force:!0}),a()}},{key:"handleWebsiteChange",value:function(e){var t=void 0;t=e?[".com",".org",".net"].map(function(t){return""+e+t}):[],this.setState({autoCompleteResult:t})}},{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t=this.state.autoCompleteResult,a={labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:14}}},l={wrapperCol:{xs:{span:24,offset:0},sm:{span:14,offset:6}}},r=e("prefix",{initialValue:"86"})(React.createElement(C,{style:{width:60}},React.createElement(q,{value:"86"},"+86"),React.createElement(q,{value:"87"},"+87"))),s=t.map(function(e){return React.createElement(B,{key:e},e)});return React.createElement(R,{onSubmit:this.handleSubmit},React.createElement(S,(0,n.default)({},a,{label:"E-mail",hasFeedback:!0}),e("email",{rules:[{type:"email",message:"输入的不是有效的邮箱格式!"},{required:!0,message:"请输入邮箱地址!"}]})(React.createElement(g,null))),React.createElement(S,(0,n.default)({},a,{label:"Password",hasFeedback:!0}),e("password",{rules:[{required:!0,message:"请输入你的密码!"},{validator:this.checkConfirm}]})(React.createElement(g,{type:"password"}))),React.createElement(S,(0,n.default)({},a,{label:"Confirm Password",hasFeedback:!0}),e("confirm",{rules:[{required:!0,message:"请确认你的密码!"},{validator:this.checkPassword}]})(React.createElement(g,{type:"password",onBlur:this.handleConfirmBlur}))),React.createElement(S,(0,n.default)({},a,{label:React.createElement("span",null,"Nickname ",React.createElement(E,{title:"你希望别人怎么称呼你?"},React.createElement(v,{type:"question-circle-o"}))),hasFeedback:!0}),e("nickname",{rules:[{required:!0,message:"请输入昵称",whitespace:!0}]})(React.createElement(g,null))),React.createElement(S,(0,n.default)({},a,{label:"Habitual Residence"}),e("residence",{initialValue:["zhejiang","hangzhou","xihu"],rules:[{type:"array",required:!0,message:"Please select your habitual residence!"}]})(React.createElement(y,{options:F}))),React.createElement(S,(0,n.default)({},a,{label:"Phone Number"}),e("phone",{rules:[{required:!0,message:"请输入手机号!"}]})(React.createElement(g,{addonBefore:r,style:{width:"100%"}}))),React.createElement(S,(0,n.default)({},a,{label:"Website"}),e("website",{rules:[{required:!0,message:"请输入网址!"}]})(React.createElement(_,{dataSource:s,onChange:this.handleWebsiteChange,placeholder:"website"},React.createElement(g,null)))),React.createElement(S,(0,n.default)({},a,{label:"Captcha",extra:"你是机器吗."}),React.createElement(k,{gutter:8},React.createElement(w,{span:12},e("captcha",{rules:[{required:!0,message:"请输入你收到的验证码!"}]})(React.createElement(g,{size:"large"}))),React.createElement(w,{span:12},React.createElement(x,{size:"large"},"Get captcha")))),React.createElement(S,(0,n.default)({},l,{style:{marginBottom:8}}),e("agreement",{valuePropName:"checked"})(React.createElement(j,null,"I have read the ",React.createElement("a",{href:""},"agreement")))),React.createElement(S,l,React.createElement(x,{type:"primary",htmlType:"submit"},"Register")))}}]),t}(React.Component),z=R.create()(P);ReactDOM.render(React.createElement(z,null),document.getElementById("root"))}},["./src/register.js"])});
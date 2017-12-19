// import React from 'react';
// import ReactDOM from 'react-dom';
import moment from 'moment';

const {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Rate, DatePicker
} = antd;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Demo extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          console.log(moment(this.props.form.getFieldValue('range-picker')[0]._d).format('YYYY/MM/DD'));
          console.log('Received values of form: ', values);
      }
    });
  }
  checkNumber = (rule, value, callback) =>{
    const form = this.props.form;
    if (value && !/^\d+$/.test(value)) {
      callback('请输入正整数');
    } else {
      callback();
    }
  }
  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form onSubmit={this.handleSubmit} hideRequiredMark={true}>
        <FormItem
          {...formItemLayout}
          label="Plain Text"
        >
          <span className="ant-form-text">China</span>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Select"
          hasFeedback
        >
          {getFieldDecorator('country', {
            rules: [
              { required: true, message: '请选择你的国家!' },
            ],

          })(
            <Select placeholder="请选择你的国家">
              <Option value="china">China</Option>
              <Option value="use">U.S.A</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Select[multiple]"
        >
          {getFieldDecorator('color', {
            rules: [
              { required: true, message: '请选择最喜欢的颜色!', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="选择最喜欢的颜色">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="InputNumber"
        >
          {getFieldDecorator('numbers', {
              initialValue: 3,
              rules: [
                  { validator: this.checkNumber }
              ],
          })(
            <InputNumber min={1} max={10} />
          )}
          <span className="ant-form-text"> machines</span>
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="DatePicker"
        >
          {getFieldDecorator('range-picker', {
              rules: [
                { required: true, message: '请选择时间范围!' },
              ],
              initialValue: [moment('2015/01/01', 'YYYY/MM/DD'), moment('2015/01/01', 'YYYY/MM/DD')]
          })(
            <DatePicker.RangePicker
                format = 'YYYY/MM/DD'
            />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Switch"
        >
          {getFieldDecorator('switch', { valuePropName: 'checked' })(
            <Switch />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Slider"
        >
          {getFieldDecorator('slider')(
            <Slider marks={{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }} />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Radio.Group"
        >
          {getFieldDecorator('radio-group')(
            <RadioGroup>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Radio.Button"
        >
          {getFieldDecorator('radio-button')(
            <RadioGroup>
              <RadioButton value="a">item 1</RadioButton>
              <RadioButton value="b">item 2</RadioButton>
              <RadioButton value="c">item 3</RadioButton>
            </RadioGroup>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Rate"
        >
          {getFieldDecorator('rate', {
            initialValue: 3.5,
          })(
            <Rate />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Upload"
          extra="longgggggggggggggggggggggggggggggggggg"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="Dragger"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
                <p className="ant-upload-hint">支持单文件大文件上传.</p>
              </Upload.Dragger>
            )}
          </div>
        </FormItem>

        <FormItem
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedDemo = Form.create()(Demo);

ReactDOM.render(<WrappedDemo />, document.getElementById('app'));

import React from 'react';
import styles from './Home.css';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 18 },
};

export default function Login(): JSX.Element {
  const history = useHistory();

  const onFinish = values => {
    console.log('Success:', values);
    history.push("/new_device");
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      initialValues={{ remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="用户名"
        name="username"
        rules={[
          {
            required: true,
            message: "请输入用户名！"
          }
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            required: true,
            message: "请输入密码！"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>记住登录</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

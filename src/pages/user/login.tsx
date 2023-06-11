import React from 'react';
import { Button, Checkbox, Col, Form, Input, Layout, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;


const App: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    navigate('/');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="layout" style={{height: '100vh'}}>
      <Content style={{ padding: '10vh'}}>
        <Row justify="center" align="middle" style={{height: '80vh', display: 'flex', alignItems: 'center'}}>
          <Col xs={24} sm={24} md={16} lg={10} xl={8}>
            <Form
              name="basic"
              layout='vertical'
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Getspos ©2023</Footer>
    </Layout>
  );
};

export default App;
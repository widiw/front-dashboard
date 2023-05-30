import { Form, Input } from 'antd';

const App = () => {
  return (
      <>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      </>
  );
};

export default App;
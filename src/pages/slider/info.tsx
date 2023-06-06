import { Form, Input, InputNumber, Select } from 'antd';

const timeInterval = [
  { label: '5 second', value: '5' },
  { label: '10 second', value: '10' },
  { label: '15 second', value: '15' },
  { label: '30 second', value: '30' },
  { label: '60 second', value: '60' },
  { label: '5 minutes', value: '300' },
  { label: '10 minutes', value: '600' },
  { label: '15 minutes', value: '900' },
  { label: '30 minutes', value: '1800' },
  { label: '60 minutes', value: '3600' },
  { label: 'Custom', value: 'custom' },
];

const App = () => {
  return (
      <>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}      >
        <Input />
      </Form.Item>
      <Form.Item label="Select Location" rules={[{ required: true }]}>
        <Select>
          <Select.Option value="accout1">Account 1</Select.Option>
          <Select.Option value="account2">Account 2</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="interval" label="Time interval between Slides">
        <Select options={timeInterval}></Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.interval !== currentValues.interval}
      >
        {({ getFieldValue }) =>
          getFieldValue('interval') === 'custom' ? (
            <Form.Item name="customInvertal" label="Custom Time Interval" rules={[{ required: true }]}>
              <InputNumber />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      </>
  );
};

export default App;
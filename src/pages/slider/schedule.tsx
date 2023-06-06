import { Button, Col, DatePicker, Form, Row, Space, Switch, TimePicker } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const dateRangeConfig = {
  rules: [{ type: 'array' as const, required: true, message: 'Please select time!' }],
};

const App = () => {

  return (
      <>
      <Form.Item name="date" label="Select Date Range" {...dateRangeConfig}>
        <RangePicker />
      </Form.Item>
      <Row align='bottom'>
      <Col xs={24} sm={24} md={12} >
        <Form.Item name="switch" label="Run Whole Day"
          valuePropName="unchecked"
        >
          <Switch />
        </Form.Item>
      </Col>
      <Form.List name="timeSchedule">
        {(fields, { add, remove }) => (
          <>
            <Col xs={24} sm={24} md={12} >
              <Form.Item>
                <Button type="link" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add time period
                </Button>
              </Form.Item>
            </Col>
            {fields.map((field) => (
              <Space key={field.key} align="baseline">
                <Form.Item label="RangePicker[showTime]" {...dateRangeConfig}>
                  <TimePicker.RangePicker use12Hours format="h:mm a" minuteStep={15} hourStep={1} />
                </Form.Item>

                <MinusCircleOutlined onClick={() => remove(field.name)} />
              </Space>
            ))}
          </>
        )}
      </Form.List>
      </Row>
      </>
  );
};

export default App;
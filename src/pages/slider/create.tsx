import React, { useState } from 'react';
import { Button, Divider, Form, FormInstance, message, Row, Steps } from 'antd';
import BasicInfo from './info';
import Schedule from './schedule';
import ListFiles from './files';

const steps = [
  {
    title: 'First',
    content: <BasicInfo />,
  },
  {
    title: 'Second',
    content: <Schedule />,
  },
  {
    title: 'Last',
    content: <ListFiles />,
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    marginTop: 32,
  };

  //form handle
  const [form] = Form.useForm();

  const SubmitButton = ({ form, handleClick, btnText }: { form: FormInstance, handleClick: React.MouseEventHandler, btnText: String }) => {
    const [submittable, setSubmittable] = React.useState(false);
  
    // Watch all values
    const values = Form.useWatch([], form);
  
    React.useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
    }, [form, values]);
  
    return (
      <Button style={{ marginRight: '8px' }} type="primary" htmlType="submit" onClick={handleClick} disabled={!submittable}>
        {btnText}
      </Button>
    );
  };

  const formLayout = { labelCol: { span: 24 }, wrapperCol: { span: 24 } };

  return (
    <>
      <Divider />
      <Form {...formLayout}
        onFinish={onFinish}
        form={form} name="validateOnly" layout="vertical" autoComplete="off"
      >
        <Steps current={current} onChange={onChange} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <Row justify='end' >
          <Form.Item>
            {current > 0 && (
              <Button style={{ marginRight: '8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
            {current < steps.length - 1 && (
              <SubmitButton form={form} handleClick={() => next()} btnText={'Next'} />
            )}
            {current === steps.length - 1 && (
              <SubmitButton form={form} handleClick={() => message.success('Processing complete!')} btnText={'Submit'} />
            )}
          </Form.Item>
        </Row>      
      </Form>
    </>
  );
};

export default App;
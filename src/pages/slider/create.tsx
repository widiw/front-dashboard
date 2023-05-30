import React, { useState } from 'react';
import { Button, Form, FormInstance, message, Row, Steps, theme } from 'antd';
import BasicInfo from './info';

const steps = [
  {
    title: 'First',
    content: <BasicInfo />,
  },
  {
    title: 'Second',
    content: <BasicInfo />,
  },
  {
    title: 'Last',
    content: <BasicInfo />,
  },
];

const App: React.FC = () => {
  const { token } = theme.useToken();
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

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const contentStyle: React.CSSProperties = {
    //lineHeight: '260px',
    //textAlign: 'center',
    //color: token.colorTextTertiary,
    //backgroundColor: token.colorFillAlter,
    //borderRadius: token.borderRadiusLG,
    //border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
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

  return (
    <>
      <Form form={form} name="validateOnly" layout="vertical" autoComplete="off">
      <Steps current={current} onChange={onChange} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <Row justify='end' >
      <div>
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
      </div>
      </Row>      
      </Form>
    </>
  );
};

export default App;
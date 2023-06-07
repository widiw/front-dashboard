import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const deleteSlider = () => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};

const App: React.FC = () => (
  <Space wrap>
    <span onClick={deleteSlider}><DeleteOutlined key="delete" /></span>
  </Space>
);

export default App;
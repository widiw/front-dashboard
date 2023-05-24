import type { MenuProps } from 'antd';
import { Dropdown, message } from 'antd';
import { useState } from 'react';
import { Modal } from 'antd';
import { FileImageOutlined, SettingOutlined, EditOutlined } from '@ant-design/icons';

const items: MenuProps['items'] = [
  {
    label: 'Configuration',
    key: '1',
    icon: <EditOutlined />
  },
  {
    label: 'Files',
    key: '2',
    icon: <FileImageOutlined />
  },
];


const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const onClick: MenuProps['onClick'] = ({ key }) => {
    setOpen(true);
    message.info(`Click on item ${key}`);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  
  return (
    <>
      <Dropdown menu={{ items, onClick }} trigger={['click']} placement="topLeft" arrow>
        <SettingOutlined key="setting" onClick={(e) => e.preventDefault()} />
      </Dropdown>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  );
}
export default App;
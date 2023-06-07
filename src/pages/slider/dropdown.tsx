import { Button, Drawer, MenuProps, Space } from 'antd';
import { Dropdown, message } from 'antd';
import { useState } from 'react';
import { Modal } from 'antd';
import { FileImageOutlined, SettingOutlined, EditOutlined, CaretRightOutlined } from '@ant-design/icons';
import Presentation from './carousel';

const items: MenuProps['items'] = [
  {
    label: 'Play',
    key: 'play',
    icon: <CaretRightOutlined />
  },
  {
    label: 'Configuration',
    key: 'config',
    icon: <EditOutlined />
  },
  {
    label: 'Files',
    key: 'files',
    icon: <FileImageOutlined />
  },
];


const App = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [openPlay, setOpenPlay] = useState(false);

  const playDrawer = () => {
    setOpenPlay(true);
  };

  const onClosePlay = () => {
    setOpenPlay(false);
  };

  const onClick: MenuProps['onClick'] = ({ key }) => {
    (key === 'play') ? playDrawer() : setOpen(true);
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
      <Drawer
        title="Drawer with extra actions"
        placement="top"
        width={500}
        onClose={onClosePlay}
        open={openPlay}
        extra={
          <Space>
            <Button onClick={onClosePlay}>Cancel</Button>
            <Button type="primary" onClick={onClosePlay}>
              OK
            </Button>
          </Space>
        }
      >
        <Presentation />
      </Drawer>
    </>
  );
}
export default App;
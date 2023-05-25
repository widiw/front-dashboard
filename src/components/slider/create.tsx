import React, { useState } from 'react';
import { Button, Modal, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ModalCreate from "./createStep";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Create New Slider">
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>Create</Button>
      </Tooltip>
      <Modal
        title="Create New Slider"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <ModalCreate />
      </Modal>
    </>
  );
};

export default App;
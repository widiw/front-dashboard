import React, { useState } from 'react';
import { Button, Modal, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const App = ( contents: { data: React.ReactNode, size: number, title: string; } ) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title={contents.title}>
        <Button type="primary" icon={<PlusOutlined />} onClick={() => setOpen(true)}>Create</Button>
      </Tooltip>
      <Modal
        title={contents.title}
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={contents.size}
      >
        {contents.data}
      </Modal>
    </>
  );
};

export default App;
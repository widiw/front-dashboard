import React from 'react';
import type { MenuProps } from 'antd';
import { Image, Dropdown, message, Modal, Space } from 'antd';
import { Col, Divider, Row } from 'antd';
import { EyeOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { Player, BigPlayButton } from 'video-react';
import "video-react/dist/video-react.css";

const { confirm } = Modal;

const style: React.CSSProperties = { background: '#000000', width: '100%', overflow: 'hidden', height:200, alignItems: "center", display:'flex', borderRadius: '8px' };

const items: MenuProps['items'] = [
  {
    label: 'Delete',
    key: 'delete',
    icon: <DeleteOutlined />
  },
];

const onClick: MenuProps['onClick'] = ({ key }) => {
  confirm({
    title: 'Are you sure delete this task?',
    icon: <ExclamationCircleFilled />,
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    async onOk() {
      try {
        return await new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          message.info(`Click on cancel ${key}`);
        });
      } catch {
        return console.log('Oops errors!');
      }
    },
    onCancel() {
      message.info(`Click on cancel ${key}`);
    },
  });
};

const App: React.FC = () => (
  <>
  <Divider orientation="left">Folder Name</Divider>
  <Row gutter={[{ xs: 16, sm: 16, md: 16, lg: 16 }, { xs: 16, sm: 16, md: 16, lg: 16 }]} align="middle">
    <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Space wrap>
        <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]}>
          <div style={style}>
            <Image
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              fallback="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              preview={{ 
                mask:
                  <>
                    <div className='ant-image-mask-info'><EyeOutlined />Preview</div>
                  </>
              }}
            />
          </div>
        </Dropdown>
      </Space>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]}>
        <div style={style}>
          <Image
            src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
            fallback="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
          />
        </div>
      </Dropdown>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]}>
        <div style={style}>
          <Image
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            fallback="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        </div>
      </Dropdown>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]}>
        <div style={style}>
          <Image
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            fallback="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            preview={{
              mask: <><div className='ant-image-mask-info'><EyeOutlined />Preview</div></>
            }}
          />
        </div>
      </Dropdown>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]}>
        <div style={style}>
          <Player
            playsInline
            poster="poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
        </div>
      </Dropdown>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]}>
        <div style={style}>
          <Player
            playsInline
            poster="poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
        </div>
      </Dropdown>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]}>
        <div style={style}>
          <Player
            playsInline
            poster="poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
        </div>
      </Dropdown>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={8} lg={6} xl={6}>
      <Dropdown menu={{ items, onClick }} trigger={["contextMenu"]}>
        <div style={style}>
          <Player
            playsInline
            poster="poster.png"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          >
            <BigPlayButton position="center" />
          </Player>
        </div>
      </Dropdown>
    </Col>
  </Row>
  </>
);

export default App;
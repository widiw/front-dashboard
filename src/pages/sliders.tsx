import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';

const { Meta } = Card;

const App = () => {
  return <>
  <Row gutter={16} align="middle">
    <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
      <div>
        <Card
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title="Slide Title 1"
            description="This is the description"
          />
        </Card>
      </div>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
      <div>
        <Card
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title="Slide Title 2"
            description="This is the description"
          />
        </Card>
      </div>
    </Col>
    <Col className="gutter-row" xs={24} sm={12} md={12} lg={8} xl={8}>
      <div>
        <Card
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
            title="Slide Title 3"
            description="This is the description"
          />
        </Card>
      </div>
    </Col>
  </Row>
  </>;
}
export default App;
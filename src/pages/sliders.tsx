import { Avatar, Card, Col, Row, Divider, Space } from 'antd';
import Ddown from "../components/slider/dropdown";
import DeleteSlider from "../components/slider/delete";
import CreateSlider from "../components/create";
import ModalCreate from "../pages/slider/create";

const { Meta } = Card;

const App = () => {
  const Content = <ModalCreate />;

  return <>
  <Row gutter={16} align="middle" justify="start">
    <Col>
      <Space direction="vertical">
        <CreateSlider data={Content} size={1000} title='Create New Slider' />
      </Space>
    </Col>
  </Row>
  <Divider />
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
            <Ddown />,
            <DeleteSlider />,
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
            <Ddown />,
            <DeleteSlider />,
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
            <Ddown />,
            <DeleteSlider />,
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
import React from 'react';
import { UsergroupAddOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const App: React.FC = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card>
        <Statistic
          title="Active Users"
          value={8}
          valueStyle={{ color: '#3f8600' }}
          prefix={<UsergroupAddOutlined />}
          suffix=""
        />
      </Card>
    </Col>
    <Col span={8}>
      <Card>
        <Statistic
          title="Slider Active"
          value={4}
          valueStyle={{ color: '#3f8600' }}
          prefix={<PlayCircleOutlined />}
          suffix=""
        />
      </Card>
    </Col>
  </Row>
);

export default App;
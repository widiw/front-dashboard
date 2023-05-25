import React from 'react';
import { Avatar, Button, List, theme } from 'antd';

const App: React.FC = () => {
  const { token } = theme.useToken();
  const contentStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    padding: '0 24px 0',
  };

  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
  ];

  return (
    <div style={contentStyle}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item actions={[<Button type="link" key="edit">edit</Button>, <Button type="link" key="list-loadmore-more">more</Button>]}>
            <List.Item.Meta
              avatar={<Avatar size={40}>SLAVE</Avatar>}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
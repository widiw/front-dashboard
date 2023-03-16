import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';



const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  
  return(
    <Layout className="header">
        <div className="logo" />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Layout>
  );
};

export default Header;
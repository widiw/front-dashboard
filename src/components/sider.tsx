import React, { useState } from 'react';
import {
  HomeOutlined,
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  SlidersOutlined,
} from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import type { MenuProps } from 'antd';
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<NavLink to={'/'}>Dashboard</NavLink>, 'home', <HomeOutlined />),
  getItem(<NavLink to={'sliders'}>Sliders</NavLink>, 'sliders', <DesktopOutlined />),
  getItem(<Link to={'medialist'}>Media</Link>, 'medialist', <FileOutlined />),
  getItem('Accounts', 'userchild', <TeamOutlined />, [
    getItem(<Link to={'users'}>Master Account</Link>, 'users'),
    getItem('Sub Account', 'subaccount')
  ]),
  getItem('Settings', '7', <SlidersOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  var pathactive = pathname.split("/");

  if( pathactive[1].length === 0 ){
    pathactive[1] = 'home';
  }

  var openchild:string[] | undefined;
  if( pathactive[1] === 'users' || pathactive[1] === 'subaccount' ){
    openchild = ['userchild'];
  }

  return(
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="dark" defaultSelectedKeys={['home']} selectedKeys={pathactive} defaultOpenKeys={openchild} mode="inline" items={items} />
    </Sider>
  );
};

export default App;
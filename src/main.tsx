import './index.css';
import { Breadcrumb, Layout, theme } from 'antd';
import Header from './components/header';
import Sider from './components/sider';
import Footer from './components/footer';

import { Link, Outlet } from "react-router-dom";

const { Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
      key: 'home',
    },
    {
      title: <Link to="/">Bill</Link>,
      key: 'bill',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider />
      <Layout className="site-layout">
        <Header />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={breadcrumbItems} />
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Outlet />
          </div>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default App;
import { Layout, Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React from 'react';
import { useRouter } from 'next/router';

const MenuLayout = ({ children }) => {
  const router = useRouter();
  console.log(router);
  const { Header, Sider, Footer, Content } = Layout;
  return (
    <Layout theme="dark" id="body">
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          style={{
            paddingTop: 20,
          }}
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
            key: String(index + 1),
            icon: React.createElement(icon),
            label: `Next.js ${index + 1}`,
          }))}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: '0px 40px 0',
          }}>
          <h2
            style={{
              color: '#fff',
            }}>
            Next.js
          </h2>
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}>
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}>
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}>
          Next.js + Recoil Test
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MenuLayout;

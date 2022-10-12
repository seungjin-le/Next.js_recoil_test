import { Layout, Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import React from 'react';
import { useRouter } from 'next/router';
import PageHeader from './pageHeader';
import PageFooter from './pageFooter';
import PageSider from './pageSider';

const MenuLayout = ({ children }) => {
  const router = useRouter();
  console.log(router);
  const { Content } = Layout;
  return (
    <Layout theme="dark" id="body">
      <Layout>
        <PageHeader />
        <PageSider />
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
        <PageFooter />
      </Layout>
    </Layout>
  );
};

export default MenuLayout;

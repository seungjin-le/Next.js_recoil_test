import React from 'react';
import { Menu } from 'antd';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Sider from 'antd/lib/layout/Sider';

const PageSider = () => {
  let link = ['Kakao', 'redux', 'redux', 'redux'];
  return (
    <Sider breakpoint="lg" collapsedWidth="0" collapsible>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
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
          label: link[index],
        }))}
      />
    </Sider>
  );
};

export default PageSider;

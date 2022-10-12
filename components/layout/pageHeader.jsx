import React from 'react';
import { Header } from 'antd/lib/layout/layout';

const PageHeader = () => {
  return (
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
  );
};

export default PageHeader;

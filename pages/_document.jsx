import React from 'react';
import { Html, Main, NextScript } from 'next/document';
import Head from 'next/head';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NextScript
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=916ced9befd4ecf22b601f586949912d&libraries=services,clusterer"
        />
        <Main />
      </body>
    </Html>
  );
}

import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = () => {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script
          type="text/javascript"
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env['KAKAO_MAPS_API_KEY']}&libraries=services,clusterer?autoload=false`}
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
};
export default Document;

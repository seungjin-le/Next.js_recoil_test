import Layout from '../components/layout/Layout';
import 'antd/dist/antd.min.css';
import '/styles/layout/Layout.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Layout } from '@/components';

function MyApp({ Component, pageProps }:any) {
  return (
    <Provider store={store}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

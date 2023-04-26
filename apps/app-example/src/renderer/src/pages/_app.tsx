import Titlebar from '@/components/ui/titlebar';
import '@/styles/styles.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement<P>) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use this to wrap the page in an additional layout
  /* i.e.:
    PageWithcustomLayout.getLayout = (page) => {
      return <CustomLayout>{page}</CustomLayout>;
    };
  */

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Titlebar />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;

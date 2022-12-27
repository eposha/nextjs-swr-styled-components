import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { MainLayout } from 'components/layouts';
import { GlobalStyle } from 'styles/globals';
import { lightTheme } from 'theme';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <ThemeProvider theme={lightTheme}>
      {getLayout(
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>,
      )}
    </ThemeProvider>
  );
}

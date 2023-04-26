import '@/assets/main.css';
import { PageLayout } from 'ui/Layout';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { Head, ModalCtrl } from '@/frontend/components/common';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Head />
      <RecoilRoot>
        <PageLayout>
          <Component {...pageProps} />
          <ModalCtrl />
        </PageLayout>
      </RecoilRoot>
    </>
  );
}

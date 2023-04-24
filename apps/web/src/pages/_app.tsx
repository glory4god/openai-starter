import '@/assets/main.css';
import { PageLayout } from 'ui/Layout';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { SessionProvider, signIn, useSession } from 'next-auth/react';
import { Head, ModalCtrl } from '@/frontend/components/common';
import { useRouter } from 'next/router';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <SessionProvider session={session}>
        <Head />
        <RecoilRoot>
          <NextAuthFilter>
            <PageLayout>
              <Component {...pageProps} />
              <ModalCtrl />
            </PageLayout>
          </NextAuthFilter>
        </RecoilRoot>
      </SessionProvider>
    </>
  );
}

const accessPaths = [undefined, '/', '/start'];

const NextAuthFilter = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useRouter();
  const { data: session, status } = useSession();
  if (!accessPaths.includes(pathname)) {
    if (!session?.user?.id) {
      if (status !== 'loading') {
        signIn();
      }
    }
  }
  return <>{children}</>;
};

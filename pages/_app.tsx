import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Suspense } from 'react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {

  return (
    <>
    <Suspense fallback={<div>Loading...</div>}></Suspense>
    <Component {...pageProps} />
    </>
  );
}

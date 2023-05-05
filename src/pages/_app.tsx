import { AppProps } from 'next/app';
import { useEffect, useRef } from 'react';
import 'focus-visible';

import '@/styles/globals.css';

// TODO: Remove the Header and Footer from overall App once it has been migrated to Layouts configuration
import { Footer } from '@/components/blog-components/Footer';
import { Header } from '@/components/blog-components/Header';

function usePrevious(value: any) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

/* ANCHOR *
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

// TODO Review the thingy

export default function App({ Component, pageProps, router }: AppProps) {
  const previousPathname = usePrevious(router.pathname);

  return <Component previousPathname={previousPathname} {...pageProps} />;
}

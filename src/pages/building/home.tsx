import * as React from 'react';

import Layout from '@/components/page-layout/Layout';
import Seo from '@/components/Seo';
import { Hero } from '@/components/building/hero';

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />
      <Layout>
        <main>
          <Hero />
        </main>
      </Layout>
    </>
  );
}

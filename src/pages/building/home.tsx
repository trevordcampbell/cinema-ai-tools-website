import * as React from 'react';

import { Hero } from '@/components/building/Hero';
import Layout from '@/components/page-layout/Layout';
import Seo from '@/components/Seo';

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

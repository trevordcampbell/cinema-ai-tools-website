import Head from 'next/head';

import { CallToAction } from '@/components/building/CallToAction';
import { FeatureClassification } from '@/components/building/FeatureClassification';
import { FeatureOverview } from '@/components/building/FeatureOverview';
import { FeatureSoundEffects } from '@/components/building/FeatureSFX';
import { FeatureVisualEffects } from '@/components/building/FeatureVFX';
import { Hero } from '@/components/building/Hero';
import { IntegratedTools } from '@/components/building/IntegratedTools';
import { Footer } from '@/components/pocket-template/Footer';
import { Header } from '@/components/pocket-template/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pocket - Invest at the perfect time.</title>
        <meta
          name='description'
          content='By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses.'
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <FeatureOverview />
        <FeatureClassification />
        <FeatureVisualEffects />
        <FeatureSoundEffects />
        <IntegratedTools />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}

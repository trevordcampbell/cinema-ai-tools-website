import Head from 'next/head'

import { CallToAction } from '@/components/pocket-template/CallToAction'
import { Faqs } from '@/components/pocket-template/Faqs'
import { Footer } from '@/components/pocket-template/Footer'
import { Header } from '@/components/pocket-template/Header'
import { Hero } from '@/components/pocket-template/Hero'
import { Pricing } from '@/components/pocket-template/Pricing'
import { PrimaryFeatures } from '@/components/pocket-template/PrimaryFeatures'
import { Reviews } from '@/components/pocket-template/Reviews'
import { SecondaryFeatures } from '@/components/pocket-template/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pocket - Invest at the perfect time.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Reviews />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}

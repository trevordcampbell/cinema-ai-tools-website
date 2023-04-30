import * as React from 'react';

import { ModeToggle } from '@/components/buttons/ModeToggle';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Layout from '@/components/page-layout/Layout';
import { Container } from '@/components/pocket-template/Container';
import Seo from '@/components/Seo';

import Vercel from '~/svg/Vercel.svg';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <Container className='flex min-h-screen flex-col items-center justify-center py-12 text-center'>
              <NextImage
                useSkeleton
                priority
                src={Vercel}
                alt="Follow us on Twitter"
                className='w-32 md:w-40'
                width='180'
                height='180'
              />
              {/* <Vercel className='text-5xl' />
              <Airbnb className='text-5xl' /> */}
              <h1 className='mt-4'>
                Next.js + Tailwind CSS + TypeScript Starter
              </h1>
              <p className='mt-2 text-sm text-gray-800'>
                A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
                Import, Seo, Link component, pre-configured with Husky{' '}
              </p>
              <p className='mt-2 text-sm text-gray-700'>
                <ArrowLink href='https://github.com/theodorusclarence/ts-nextjs-tailwind-starter'>
                  See the repository
                </ArrowLink>
              </p>

              <ModeToggle />

              <ButtonLink className='mt-6' href='/components' variant='light'>
                See all components
              </ButtonLink>

              <UnstyledLink
                href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
                className='mt-4'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  width='92'
                  height='32'
                  src='https://vercel.com/button'
                  alt='Deploy with Vercel'
                />
              </UnstyledLink>

              <footer className='absolute bottom-2 text-gray-700'>
                © {new Date().getFullYear()} By{' '}
                <UnderlineLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                  Theodorus Clarence
                </UnderlineLink>
              </footer>
          </Container>
          {/* <Container.Outer className='bg-purple-500'>
            <Container.Inner className='bg-red-500'>
              <p>Inner Container</p>
            </Container.Inner>
          </Container.Outer> */}
        </section>
      </main>
    </Layout>
  );
}

import {
  BoltIcon,
  LightBulbIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/20/solid';

import { Container } from '@/components/pocket-template/Container';

import ArrowLink from '../links/ArrowLink';

const features = [
  {
    name: 'Deeply-networked content library in one click.',
    description:
      'The days of manual footage and audio review are over. Let computers watch, tag, and organize your content for you in the blink of an eye.',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Know everything about your content.',
    description:
      'Automated feature extraction gives you video descriptions, audio transcripts, scene information, object detection, camera motion, and more.',
    icon: LightBulbIcon,
  },
  {
    name: 'Identify the content you need in seconds.',
    description:
      'Surf through terabytes and petabytes of footage or audio with ease by asking your library in plain english: "Show me shots of ramen in Tokyo".',
    icon: BoltIcon,
  },
];

export function FeatureClassification() {
  return (
    <section
      id='classification-engine'
      aria-label='Features for building a portfolio'
      className='overflow-hidden py-20 sm:py-32'
    >
      <Container>
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start'>
          <div className='max-w-lg sm:px-6 lg:ml-auto lg:px-0 lg:pt-4'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='mb-6 inline-flex'>
                <span className='rounded-full bg-rose-600/10 px-3 py-1 font-semibold text-rose-500 ring-1 ring-inset ring-rose-600/10'>
                  🗄 Content Classification Engine
                </span>
              </h2>
              <p className='text-3xl font-medium tracking-tight text-majorColor dark:text-majorColor-darkMode'>
                Never organize another piece of footage or audio ever again
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base text-minorColor dark:text-minorColor-darkMode lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-majorColor dark:text-majorColor-darkMode'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-rose-500'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <ArrowLink className='mt-12 sm:ml-9 sm:mt-8' href='/'>
                More about our Content Classification Engine
              </ArrowLink>
            </div>
          </div>
          <div className='flex h-full items-center overflow-hidden lg:order-first'>
            <img
              src='https://tailwindui.com/img/component-images/project-app-screenshot.png'
              alt='Product screenshot'
              className='w-full rounded-xl bg-red-500 sm:mx-auto sm:max-w-2xl lg:max-w-none'
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

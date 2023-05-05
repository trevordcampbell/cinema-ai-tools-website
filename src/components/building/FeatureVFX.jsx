import {
  BoltIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  ScissorsIcon,
  SparklesIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/20/solid';

import { Container } from '@/components/pocket-template/Container';

import ArrowLink from '../links/ArrowLink';

const features = [
  {
    name: 'Automate 80% of your VFX workflow.',
    description:
      'Say goodbye to manual masking, compositing, relighting, rotoscoping, and mo-capping. Save weeks of time for your Visual Effects team.',
    icon: ScissorsIcon,
  },
  {
    name: 'Context-Aware VFX.',
    description:
      "This isn't the cheesy CGI you've seen in Sharknado. Our software analyzes every aspect of your footage to masterfully in-paint ridiculously realistic results.",
    icon: CubeTransparentIcon,
  },
  {
    name: 'VFX as big as your imagination.',
    description:
      'If you can dream it, you can do it. "Make the motorcycle explode", "Turn this into a snowy day", "Multiply the crowd to make it twice as dense".',
    icon: SparklesIcon,
  },
];

export function FeatureVisualEffects() {
  return (
    <section
      id='visual-effects-engine'
      aria-label='Features for building a portfolio'
      className='overflow-hidden py-20 sm:py-32'
    >
      <Container>
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start'>
          <div className='max-w-lg sm:px-6 lg:px-0 lg:pt-4'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='mb-6 inline-flex'>
                <span className='rounded-full bg-lime-600/10 px-3 py-1 font-semibold text-lime-500 ring-1 ring-inset ring-lime-600/10'>
                  ✨ Visual Effects Engine
                </span>
              </h2>
              <p className='text-3xl font-medium tracking-tight text-majorColor dark:text-majorColor-darkMode'>
                Shockingly Simple Visual Effects that make you say "Holy $#%T"
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base text-minorColor dark:text-minorColor-darkMode lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-majorColor dark:text-majorColor-darkMode'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-lime-500'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <ArrowLink className='mt-12 sm:ml-9 sm:mt-8' href='/'>
                More about our Visual Effects Engine
              </ArrowLink>
            </div>
          </div>
          <div className='flex h-full items-center overflow-hidden'>
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

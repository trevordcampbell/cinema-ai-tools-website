import {
  BoltIcon,
  Cog6ToothIcon,
  Cog8ToothIcon,
  CogIcon,
  EyeSlashIcon,
  LightBulbIcon,
  MicrophoneIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/20/solid';

import { Container } from '@/components/pocket-template/Container';

import ArrowLink from '../links/ArrowLink';

const features = [
  {
    name: 'Immersive sound design without a Foley artist.',
    description:
      'Kick your stories up a notch with a massive boom. Keep your audience focused with a quiet restaurant background chatter. Automatically.',
    icon: MicrophoneIcon,
  },
  {
    name: 'Context-aware generative sound effects.',
    description:
      'No more wasting time scrolling through stock sounds. Our engine processes your footage to create novel sound design that matches your scene.',
    icon: CogIcon,
  },
  {
    name: 'So good that nobody will notice.',
    description:
      'Strike the perfect balance of immersive sound and rapid production. It can be our secret that it only took 5 minutes.',
    icon: EyeSlashIcon,
  },
];

export function FeatureSoundEffects() {
  return (
    <section
      id='sound-effects-engine'
      aria-label='Features for building a portfolio'
      className='overflow-hidden py-20 sm:py-32'
    >
      <Container>
        <div className='grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start'>
          <div className='max-w-lg sm:px-6 lg:ml-auto lg:px-0 lg:pt-4'>
            <div className='mx-auto max-w-2xl lg:mx-0'>
              <h2 className='mb-6 inline-flex'>
                <span className='rounded-full bg-blue-600/10 px-3 py-1 font-semibold text-blue-500 ring-1 ring-inset ring-blue-600/10'>
                  🗄 Sound Effects Engine
                </span>
              </h2>
              <p className='text-3xl font-medium tracking-tight text-majorColor dark:text-majorColor-darkMode'>
                The perfect sounds for your scene, made effortless.
              </p>
              <dl className='mt-10 max-w-xl space-y-8 text-base text-minorColor dark:text-minorColor-darkMode lg:max-w-none'>
                {features.map((feature) => (
                  <div key={feature.name} className='relative pl-9'>
                    <dt className='inline font-semibold text-majorColor dark:text-majorColor-darkMode'>
                      <feature.icon
                        className='absolute left-1 top-1 h-5 w-5 text-blue-500'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className='inline'>{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <ArrowLink className='mt-12 sm:ml-9 sm:mt-8' href='/'>
                More about our Sound Effects Engine
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

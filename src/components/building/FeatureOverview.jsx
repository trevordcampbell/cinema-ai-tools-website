import {
  MagnifyingGlassIcon,
  PhotoIcon,
  PuzzlePieceIcon,
  SignalIcon,
  SparklesIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/20/solid';

import { Container } from '@/components/pocket-template/Container';
import clsxm from '@/lib/clsxm';

const features = [
  {
    name: 'Content Classification Engine',
    description:
      'More than labeling and segmentation, achieve total understanding of your cinematic video + audio assets.',
    icon: PuzzlePieceIcon,
    color: 'text-rose-500',
  },
  {
    name: 'Visual Effects Engine',
    description:
      "Big-budget effects in just a few clicks. Become a one-person studio, or cut your film's end credits in half.",
    icon: SparklesIcon,
    color: 'text-lime-500',
  },
  {
    name: 'Sound Effects Engine',
    description:
      'Eliminate your foley artists with context-aware AI-generated sound effects that perfectly match your footage.',
    icon: SignalIcon,
    color: 'text-blue-500',
  },
];

export function FeatureOverview() {
  return (
    <section
      id='secondary-features'
      aria-label='Features for building a portfolio'
      className='py-20 sm:py-32'
    >
      <Container>
        <div className='mx-auto max-w-3xl sm:text-center'>
          <h2 className='text-3xl font-medium tracking-tight text-majorColor dark:text-majorColor-darkMode'>
            The power of an entire Hollywood studio at your fingertips
          </h2>
          <p className='mt-2 text-lg text-minorColor dark:text-minorColor-darkMode'>
            An integrated suite of tools that gives you post-production
            superpowers. Thoughtfully crafted solutions for Content Management,
            Visual Effects, and Sound Effects.
          </p>
        </div>
        <ul
          role='list'
          className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3'
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className={clsxm(
                'rounded-2xl border border-gray-200 bg-white p-8 dark:border-none dark:bg-zinc-900/50',
                feature.color
              )}
            >
              <feature.icon className='h-8 w-8' />
              <h3 className='mt-6 text-lg font-semibold'>{feature.name}</h3>
              <p className='mt-2 text-minorColor dark:text-minorColor-darkMode'>
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

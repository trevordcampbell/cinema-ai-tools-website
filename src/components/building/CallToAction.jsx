// NOTE - This element has a dark bg-zinc-900, if this changes will have to change some text and other styling for Dark / Light Mode difference.

import { HiDocumentText } from 'react-icons/hi';

import { Container } from '@/components/pocket-template/Container';

import Button from '../buttons/Button';

export function CallToAction() {
  return (
    <section
      id='waitlist'
      className='relative overflow-hidden bg-zinc-800 py-20 sm:py-28'
    >
      <Container className='relative'>
        <div className='mx-auto max-w-2xl sm:text-center'>
          <h2 className='text-3xl font-medium tracking-tight text-majorColor-darkMode dark:text-majorColor-darkMode sm:text-4xl'>
            Want post-production superpowers?
          </h2>
          <p className='mt-4 text-lg text-minorColor-darkMode dark:text-minorColor-darkMode'>
            Get early-access to our beta-testing tools, or be notified when we
            launch. Sign up for the waitlist today!
          </p>
          <Button className='mt-8' variant='primary' leftIcon={HiDocumentText}>
            Get on Waitlist
          </Button>
        </div>
      </Container>
    </section>
  );
}

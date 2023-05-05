import { Container } from '@/components/pocket-template/Container';
import Image from 'next/image';

import DavinciResolveLogo from '@/images/logos/DaVinci_Resolve_Studio-logo-small.png';
import PremiereLogo from '@/images/logos/Adobe-Premiere-Pro-CC-icon.svg';
import FinalCutLogo from '@/images/logos/Final-Cut-Pro-Logo.png';

export function IntegratedTools() {
  return (
    <section
      id='integrated-tools'
      aria-label='Features for building a portfolio'
      className='bg-zinc-800 py-20 sm:py-32'
    >
      <Container>
        <div className='mx-auto max-w-3xl sm:text-center'>
          <h2 className='text-3xl font-medium tracking-tight text-majorColor dark:text-majorColor-darkMode'>
            The best part? It integrates with all of your favorite tools...
          </h2>
          <p className='mt-2 text-lg text-minorColor dark:text-minorColor-darkMode'>
            No need to worry about learning a new editing program, utilize the
            power of XX in all the programs you already know and love.
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-xl grid-cols-3 items-start gap-x-8 gap-y-12 text-center text-lg font-semibold text-majorColor dark:text-majorColor-darkMode sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 sm:text-xl lg:grid-cols-3'>
          <div className='col-span-1 mx-auto lg:col-span-1'>
            <Image
              src={DavinciResolveLogo}
              alt='Davinci Resolve Studio'
              className='max-h-24 object-contain'
            />
            <p>Davinci Resolve</p>
          </div>
          <div className='col-span-1 mx-auto lg:col-span-1'>
            <Image
              src={PremiereLogo}
              alt='Adobe Premiere Pro'
              className='max-h-24 object-contain p-2'
            />
            <p>Premiere Pro</p>
          </div>
          <div className='col-span-1 mx-auto lg:col-span-1'>
            <Image
              src={FinalCutLogo}
              alt='Final Cut Pro'
              className='max-h-24 object-contain'
            />
            <p>Final Cut Pro</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// NOTE - This page is used to create a variant-based Layout component for different sections of the website
// TODO - Add other Page Layout Variants here, like Auth/Login, General Site, Blog, App, etc.

import { Footer } from '@/components/blog-components/Footer';
import NextImage from '@/components/NextImage';
import { Header } from '@/components/pocket-template/Header';

import backgroundImage from '@/images/backgrounds/background-auth.jpg';

type LayoutProps = {
  layoutType?: 'blog' | 'auth';
  children: React.ReactNode;
};

export default function Layout({ layoutType, children }: LayoutProps) {
  // NOTE - Renders different layout configurations based on a given layoutType prop value.

  // Originally from the "Spotlight" template
  if (layoutType === 'blog') {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }

  // Originally from the "Salient" template
  if (layoutType === 'auth') {
    return (
      <>
        <div className='relative flex min-h-full justify-center md:px-12 lg:px-0'>
          <div className='relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28'>
            <div className='mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0'>
              {children}
            </div>
          </div>
          <div className='hidden sm:contents lg:relative lg:block lg:flex-1'>
            <NextImage
              className='absolute inset-0 h-full w-full object-cover'
              src={backgroundImage}
              alt=''
              fill
              unoptimized
              priority
            />
          </div>
        </div>
      </>
    );
  }

  // General Layout which is rendered when no layoutType is defined (general site-wide usage)
  else {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    );
  }
}

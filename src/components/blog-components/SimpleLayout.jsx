// NOTE - This Component is used for the Header / title of a page with the rest of the page content displayed below
// TODO - Try to deprecate to a more generalized page Header / Title component or rename it away from SimpleLayout to be more accurately desriptive like 'PageTitle'

import { Container } from "@/components/blog-components/Container";

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className='mt-16 sm:mt-32'>
      <header className='max-w-2xl'>
        <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
          {title}
        </h1>
        <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>
          {intro}
        </p>
      </header>
      <div className='mt-16 sm:mt-20'>{children}</div>
    </Container>
  );
}

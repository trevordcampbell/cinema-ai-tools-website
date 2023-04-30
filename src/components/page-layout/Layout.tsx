// NOTE - This page is used to create a variant-based Layout component for different sections of the website
// TODO - Add other Page Layout Variants here, like Auth/Login, General Site, Blog, App, etc.

import * as React from 'react';

import { Footer } from '@/components/blog-components/Footer';
import { Header } from '@/components/pocket-template/Header';

type LayoutProps = {
  layoutType?: string;
  children: React.ReactNode
} 

export default function Layout({ layoutType, children }: LayoutProps) {

  // Renders different layout configurations based on a given layoutType prop value.
  if (layoutType === 'blog') {
    return (
      <>
        <Header />
        {children}
        <Footer />
      </>
    )
  }

  // General Layout which is rendered when no layoutType is defined (general site-wide usage)
  else {
      return (
        <>
        <Header />
        {children}
        <Footer />
        </>
      )
    }
}

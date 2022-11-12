import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../../footer';
import Navbar from '../../navbar';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  desc?: string;
  content?: string;
}
export default function MainLayout(props: Partial<LayoutProps>) {
  const {
    children,
    title = 'Simple Blog  Reeyy',
    desc = 'description',
    content = 'My simple Blog',
  } = props;
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 space-y-8 sm:px-6 lg:px-8">
        <Head>
          <title>{title}</title>
          <meta name={desc} content={content} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <div className="mx-auto  max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          {children}
        </div>
      </div>

      <Footer />
    </>
  );
}

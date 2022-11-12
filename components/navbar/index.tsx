import Image from 'next/image';
import Header from '../header';

import Navigation from './navigation';

export default function Navbar() {
  return (
    <div className="relative">
      <div className="relative z-10 bg-white rounded-b-3xl pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        {/* NAVIGATION START */}
        <Navigation />
        {/* NAVIGATION END */}

        {/* Header Starts */}
        <Header />
        {/* Header Ends */}
      </div>
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          priority
          layout="fill"
          alt=""
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        />
      </div>
    </div>
  );
}

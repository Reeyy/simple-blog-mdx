import Link from 'next/link';
import React from 'react';

export default function CopyRight() {
  return (
    <>
      &copy;
      <Link color="inherit" href="/">
        lorem
      </Link>{' '}
      {new Date().getFullYear()}
    </>
  );
}

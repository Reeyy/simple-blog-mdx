import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { blogs } from '../../constant/data';

export default function Blog() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {blogs.map((blog) => (
        <div key={blog.slug} className="group">
          <div className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
            <Link legacyBehavior href={`/blogs/${blog.slug}`}>
              <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
                <Image
                  priority
                  fill
                  style={{ objectFit: 'cover' }}
                  src={blog.coverImage}
                  className="rounded-lg hover:cursor-pointer"
                  alt=""
                />
              </div>
            </Link>
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700 font-bold">
                <span aria-hidden="true" className="inset-0" />
                {blog.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{blog.description}</p>
            </div>
          </div>
          <Link legacyBehavior href={`/blogs/${blog.slug}`}>
            <span className="text-sm  font-bold text-gray-700">Read More</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

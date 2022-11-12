import Link from 'next/link';
import BlogList from '../components/blogs/blogList';

import MainLayout from '../components/layouts/main';

import PortfolioList from '../components/portfolios/portfoliosList';

export default function Home() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Newest Blogs
        <Link legacyBehavior href="/blogs">
          <span className="text-sm ml-1 text-indigo-600">(See All)</span>
        </Link>
      </h2>

      {/* Blog List Starts */}
      <BlogList />
      {/* Blog List Ends */}

      <br />

      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Portfolios
        <Link legacyBehavior href="/portfolios">
          <span className="text-sm ml-1 text-indigo-600">(See All)</span>
        </Link>
      </h2>

      {/* Portfolio List Starts */}
      <PortfolioList />
      {/* Portfolio List Ends */}
    </MainLayout>
  );
}

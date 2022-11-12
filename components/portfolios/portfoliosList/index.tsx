import React from 'react';
import { portfolios } from '../../../constant/data';
import { PortFolioTypes } from '../../../type/types';
import PortFolioItem from './PortFolioItem';

export default function PortfolioList() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {portfolios.map((portfolio: PortFolioTypes) => (
        <PortFolioItem portfolio={portfolio} />
      ))}
    </div>
  );
}

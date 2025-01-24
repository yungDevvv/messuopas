import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const pathMap = {
    'johdanto': 'Johdanto',
    'asiakashankinnan-suunnittelu': 'Asiakashankinnan suunnittelu',
    'myynnin-valmistelu': 'Myynnin valmistelu',
    'asiakaskohtaamisten-toteutus': 'Asiakaskohtaamisten toteutus',
    'visuaalinen-ilme': 'Visuaalinen Ilme',
    'markkinointi': 'Markkinointi',
    'henkilosto': 'Henkilosto',
    'seuranta': 'Seuranta'
  };

  const filteredPathnames = pathnames.filter(name => name !== 'myynnillinen-asiakashankinta');

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 py-6 max-md:hidden">
      <Link
        to="/"
        className="hover:text-gray-700 transition-colors"
      >
        Etusivu
      </Link>
      {filteredPathnames.map((name, index) => {
        const fullPath = name.includes('asiakashankinta')
          ? `/myynnillinen-asiakashankinta/${name}`
          : `/${name}`;
        const isLast = index === filteredPathnames.length - 1;

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4" />
            <Link
              to={fullPath}
              className={`${isLast
                ? 'text-gray-900 font-medium pointer-events-none'
                : 'hover:text-gray-700 transition-colors'
                }`}
            >
              {pathMap[name] || name}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;

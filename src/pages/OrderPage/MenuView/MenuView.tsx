import React from 'react';
import { Loading } from '../../../components';
import { StringUtils } from '../../../utils';
//import { MovieList } from './MovieList';
import { SectionView } from './SectionView';
import { useMenu } from './useMenu';

export const MenuView = () => {
  const { isLoading, isError, error, menues } = useMenu();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <main>
        <h1>{StringUtils.errorToString(error)}</h1>
      </main>
    );
  }

  return (
    <main>
      <h1>Top 10 menues Of All Time</h1>
      <SectionView menues={menues} />
    </main>
  );
};

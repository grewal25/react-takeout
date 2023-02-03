import React from 'react';
import { Menu } from './Menu';
//import { Menu } from './Menu';

export interface SectionViewProps {
  menues: Array<Menu>;
}

export const SectionView = ({ menues }: SectionViewProps) => {
  return (
    <table data-testid="movie-table">
      <thead>
        <tr>
          <th className="text-center">Rank</th>
          <th>Name</th>
          <th className="text-center">Year</th>
          <th className="text-center">Rating</th>
        </tr>
      </thead>
      <tbody>
        {menues.map((menu, index) => (
          <tr key={menu.id}>
            <td className="text-center">{index + 1}</td>
            <td>{menu.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

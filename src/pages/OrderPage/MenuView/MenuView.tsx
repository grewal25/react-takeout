import { Menu } from '../../../models/Menu';
import { SectionView } from './SectionView';

export const MenuView: React.FC<{ menus: Menu }> = ({ menus }) => {
  return (
    <div>
      <h1>Our Menu</h1>
      {menus.sectionIds.map((sectionId, sectionIdx) => {
        const section = menus.sections[sectionId];
        return <SectionView key={`${sectionIdx}-${sectionIdx}`} section={section} items={menus.items} />
})}
    </div>
  );
};

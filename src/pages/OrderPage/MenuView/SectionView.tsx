import { FC } from "react";
import { Menu, MenuSection } from "../../../models/Menu";

export const SectionView: FC<{section: MenuSection, items: Menu['items']}> = ({section, items}) => {
  const {name, itemIds} = section;
  return (
    <div>
      <h2>{name}</h2>
      {/* move inside a new component */}
      <ul>
        {itemIds.map((itemId, itemIdx) => {
          const item = items[itemId];
          return <li key={`${itemId}-${itemIdx}`}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </li>
        })}
        
      </ul>
    </div>
  );
};

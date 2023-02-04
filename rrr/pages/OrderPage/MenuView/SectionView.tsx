import { FC } from "react";
import { Menu, MenuSection } from "../../../models/Menu";
import  './SectionView.css'

export const SectionView: FC<{section: MenuSection, items: Menu['items']}> = ({section, items}) => {
  const {name, itemIds} = section;
  const NumberUtils = {
    formatAsMoney: function(number:number) {
      return number.toFixed(2);
    }
  };
  return (
    <div className="">
    <div >
      <h2>{name}</h2>
      {/* move inside a new component */}
      <div className="section-top">
      <ul>
        {itemIds.map((itemId, itemIdx) => {
          const item = items[itemId];
          return <li key={`${itemId}-${itemIdx}`}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${NumberUtils.formatAsMoney(item.price)}</p>
          </li>
        })}
        
      </ul>
      </div>
      
    </div>
   
    </div>
  );
};

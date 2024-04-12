import React from 'react'
import { useState } from 'react';
import { FaTableTennis } from 'react-icons/fa';

const Content = () => {
   const [items, setitems] = useState(
    [
      {
        id: 1,
        checked : true,
        item: "playing music"
      },
      {
        id: 2,
        checked : false,
        item: "reading"
      },
      {
        id: 3,
        checked : false,
        item: "playing football"
      }
    ]
   );

  return (
   <main>
    <ul> 
      {items.map ((item)=>(
        <li>
          <input
          type="checkbox"
          checked={item.checked}
          />
          <label>{item.item}</label>
          <FaTableTennis 
          role='checkbox'
          tabIndex="0"
           />
        </li>
      )
    )}
    
    </ul>
   </main>
  )
}
export default Content
import React, { useContext, useState } from 'react';
import Context from '../context/Context';

export default function List() {
  const {list, setId} = useContext(Context)

  function itemActive(id) {
    setId(id);
  }

  return (
    <ul className='list'>
      {list.map((item) => <li className={`list__item`} key={item.id} onClick={() => itemActive(item.id)}>{item.name}</li>)}
    </ul>
  )
}

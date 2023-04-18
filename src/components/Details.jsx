import React, { useContext } from 'react';
import Context from '../context/Context';
import Info from './Info/Info';

export default function Details() {

  const {id} = useContext(Context);
  return (
    <div>
      {
        id ? 
        <Info/> :
        <div></div>
      }
    </div>
  )
}

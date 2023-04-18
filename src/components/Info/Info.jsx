import React, { useContext } from 'react';
import Context from '../../context/Context'

export default function Info() {
  const value = useContext(Context);
  return (
    <div>
      {
        value.details ?
        <>
        <div className="card" style={{width: '18rem'}}>
          <img src={value.details.avatar || ''} className="card-img-top" alt="avatar"/>
          <div className="card-body">
            <h5 className="card-title">{value.details.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">city: {value.details.details.city}</li>
            <li className="list-group-item">company: {value.details.details.company}</li>
            <li className="list-group-item">position: {value.details.details.position}</li>
          </ul>
        </div>
        </> :
        <div>load</div>
      }
    </div>
  )
}

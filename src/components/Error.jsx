import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'
import Loading from './Loading';

export default function Error() {
  const { data, error, loading } = useJsonFetch('http://localhost:7070/error', 'GET');
  return (
    <div>
      {
        loading ?
        <Loading /> :
        <div>error</div>
      }
    </div>
  )
}

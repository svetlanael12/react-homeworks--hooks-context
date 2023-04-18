import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'
import Loading from './Loading';

export default function Data() {
  const { data, error, loading } = useJsonFetch('http://localhost:7070/data', 'GET');

  return (
    <div>
      {
        loading ?
        <Loading /> :
        <div>data</div>
      }
    </div>
  )
}

import React from 'react';

export default function Select(props) {
  let {filter} = props

  return (

    <select className='selectH' type='select' onChange={filter}>
          <option value="/">Capacity...</option>
            <option value="order=asc">Low Capacity</option>
            <option value="order=desc">High Capacity</option>
      </select>

  )
}
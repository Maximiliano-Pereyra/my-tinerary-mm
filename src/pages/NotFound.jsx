import React from 'react';
import { Link as Linkeador} from 'react-router-dom'

export default function NotFound() {
  return (
    <Linkeador to='/index'>
    <div className='c404'>
      <h2>Upss....page not found</h2>
      <img src="./img/f404.png" alt="error" />
    </div>
    </Linkeador>
  )
}

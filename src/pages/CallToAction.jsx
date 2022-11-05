import React from 'react'
import { Link as NavLink } from 'react-router-dom'

export default function CallToAction(props) {
  let {page, rute} = props;
  return (
    <NavLink className='navl' to={rute}>
        <button>{page}</button>
    </NavLink>
  )
}
import React from 'react'
import { Link as Tinerary } from 'react-router-dom'

export default function Header() {
  return (
    <div className='heacolor'>
      <div className='flex row spacebet'>
        <img src="imagenes/M&M.gif" alt="" />
        <ul className='navWidth flex row space_evenly list'>
            <Tinerary to='/index'><li>Home</li></Tinerary>
            <li className='despList'>Search
             <ul className='list nomargin nopadding dispNone'>
               <li>Cities</li>
               <li>Hotels</li>
             </ul>
            </li>
            <li className='despList' >Sign
             <ul className='list nomargin nopadding dispNone'>
               <li>Sign In</li>
               <li>Sign Up</li>
             </ul>
            </li>
        </ul>
      </div>
    </div>
  )
}
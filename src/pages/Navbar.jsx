import React from 'react'
import { Link as Tinerary } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='marginauto navWidth'>
        <ul className='flex row space_evenly list'>
            <Tinerary to='/index'><li>Home</li></Tinerary>
            <li>Search
             <ul className='list nomargin nopadding dispNone'>
               <li>Cities</li>
               <li>Hotels</li>
             </ul>
            </li>
            <li>Sign
             <ul className='list nomargin nopadding dispNone'>
               <li>Sign In</li>
               <li>Sign Up</li>
             </ul>
            </li>
        </ul>
    </div>
  )
}
import React from 'react'

import { Link as Linkeador } from 'react-router-dom'
=======
import { Link as Tinerary } from 'react-router-dom'


export default function Header() {
  return (
    <div className='heacolor'>
      <div className='flex row spacebet'>
        <img src="imagenes/M&M.gif" alt="" />
        <ul className='navWidth flex row space_evenly list'>

            <Linkeador to='/index'><li>Home</li></Linkeador>
            <li className='despList'>Search
             <ul className='list nomargin nopadding dispNone'>
             <Linkeador to='/city'><li>Cities</li></Linkeador>
             <Linkeador to='/hotels'><li>Hotels</li></Linkeador>
=======
            <Tinerary to='/index'><li>Home</li></Tinerary>
            <li className='despList'>Search
             <ul className='list nomargin nopadding dispNone'>
               <li>Cities</li>
               <li>Hotels</li>

             </ul>
            </li>
            <li className='despList' >Sign
             <ul className='list nomargin nopadding dispNone'>

             <Linkeador to='/signIn'><li>Sign In</li></Linkeador>
             <Linkeador to='/signUp'><li>Sign Up</li></Linkeador>
=======
               <li>Sign In</li>
               <li>Sign Up</li>

             </ul>
            </li>
        </ul>
      </div>
    </div>
  )
}
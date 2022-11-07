import React from 'react'
import { Link as Linkeador } from 'react-router-dom'


export default function Header() {
  return (
    <div className='heacolor'>
      <div className='flex row spacebet'>
        {/* <img src="imagenes/M&M.gif" alt="" /> */}
        <ul className='navWidth flex row space_evenly list'>

            <Linkeador to='/index'><li>Home</li></Linkeador>
            <li className='despList'>Search
             <ul className='list nomargin nopadding dispNone'>
             <Linkeador to='/city'><li>Cities</li></Linkeador>
             <Linkeador to='/hotels'><li>Hotels</li></Linkeador>
             </ul>
            </li>
            <li className='despList' >Sign
             <ul className='list nomargin nopadding dispNone'>

             <Linkeador to='/signIn'><li>Sign In</li></Linkeador>
             <Linkeador to='/signUp'><li>Sign Up</li></Linkeador>
             </ul>
            </li>
        </ul>
      </div>
    </div>
  )
}
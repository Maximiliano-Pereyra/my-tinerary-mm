import React from 'react'
import { Link as Linkeador } from 'react-router-dom'
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function Header() {

  let [showHide, setShowHide] = useState(false);
  let [show, setShow] = useState(false);
  let user = useSelector((store) => store.user);
  let hide = () => {
    setShowHide(!showHide);
    setShow(false);
  };
  let data = () => {
    setShow(!show);
    setShowHide(false);
  };

  const userPages = [
    {
      name: "My Shows",
      route: "/myshows",
    },
    {
      name: "My Tineraries",
      route: "/mytineraries",
    },
  ];
  const adminPages = [
    {
      name: "New City",
      route: "/newCity",
    },
    {
      name: "New Hotel",
      route: "/newHotel",
    },
    {
      name: "My Cities",
      route: "/mycity",
    },
    {
      name: "My Hotels",
      route: "/myhotels",
    },
  ];
  return (
    <div className='heacolor'>
      <div className='flex row spacebet'>
        {/* <img src="img/logochico.gif" alt="logo" /> */}
        <ul className='navWidth flex row space_evenly list'>
            <Linkeador to=''><li>Home</li></Linkeador>
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
            <li className='despList' >Set New
             <ul className='list nomargin nopadding dispNone'>

             <Linkeador to='/newCity'><li>New City</li></Linkeador>
             <Linkeador to='/newHotel'><li>New Hotel</li></Linkeador>

             </ul>
            </li>
        </ul>
      </div>
    </div>
  )
}
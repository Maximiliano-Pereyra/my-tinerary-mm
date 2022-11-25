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
      <div>
       <Linkeador to='/'>  <h3 onClick={hide}>
            Home{" "}
          </h3></Linkeador> 
          {showHide ? (
            <>
              <div >
              <li className='despList'>Search
             <ul className='list nomargin nopadding dispNone'>
             <Linkeador to='/city'><li>Cities</li></Linkeador>
             <Linkeador to='/hotels'><li>Hotels</li></Linkeador>
             </ul></li>
                {(user.role === "user" || user.role === "admin") &&
                  userPages.map((route) => (
                    <Linkeador
                      to={route.route}
                      key={route.name}
                    >
                      <h3>{route.name}</h3>
                    </Linkeador>
                  ))}
                {(user.role === "user" || user.role === "admin") &&
                  adminPages.map((route) => (
                    <Linkeador
                      to={route.route}
                      key={route.name}
                    >
                      <h3>{route.name}</h3>
                    </Linkeador>
                  ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          <h3 onClick={data}>
            Users{" "}
          </h3>
          {show ? (
            <>
            <li className='despList' >Sign
             <ul className='list nomargin nopadding dispNone'>
             <Linkeador to='/signIn'><li>Sign In</li></Linkeador>
             <Linkeador to='/signUp'><li>Sign Up</li></Linkeador>
             </ul>
            </li>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
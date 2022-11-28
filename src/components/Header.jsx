import React from 'react'
import { Link as Linkeador } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import usersActions from '../redux/actions/userActions';

export default function Header() {

  const { idUser } = useSelector((state) => state.user);
  let id = idUser
  let [showHide, setShowHide] = useState(false);
  let [show, setShow] = useState(false);
  let dispatch = useDispatch()
  const { signout} = usersActions;
  const { photo, name,token } = useSelector((state) => state.user);
  let user = useSelector((store) => store.user);

  let hide = () => {
    setShowHide(!showHide);
    setShow(false);
  };
  let data = () => {
    setShow(!show);
    setShowHide(false);
  };

  function signOut () {
    Swal.fire({
      icon: "question",
      title: "Would do you like close session?",
      showConfirmButton: true,
      iconColor: "#01344f",
      confirmButtonColor: "#01344f",
      confirmButtonText: 'Yes',
      showCancelButton: true,

    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(signout(token))
      } 
    })
  }


  const userPages = [
    {
      name: "My Shows",
      route: "/shows/prueba",
    },
    {
      name: "My Tineraries",
      route: "/mytineraries",
    },
    {
    name: "New Tinerary",
    route: "/useritinerary"
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
      route: "/hotels/prueba",
    },
  ];
  const noLog= [
    {
      name: "Sign Up",
      route: "/signUp",
    },
    {
      name: "Sign In",
      route: "/signIn",
    },
  ];

  return (
    <div className='heacolor'>
      <div className='flex row '>
      <div>
         <Linkeador to='/'> <li onClick={hide}>Home</li></Linkeador> 
          {showHide ? (
            <>
              <div >
              <li className='despList'>Search
             <ul className='list nomargin nopadding dispNone'>
             <Linkeador to='/city'><li>Cities</li></Linkeador>
             <Linkeador to='/hotels'><li>Hotels</li></Linkeador>
             </ul></li>
                {user.role === "user" &&
                  userPages.map((route) => (
                    <Linkeador
                      to={route.route}
                      key={route.name}
                    >
                      <li>{route.name}</li>
                    </Linkeador>
                  ))}
                {user.role === "admin" &&
                  adminPages.map((route) => (
                    <Linkeador
                      to={route.route}
                      key={route.name}
                    >
                      <li>{route.name}</li>
                    </Linkeador>
                  ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          {(user.role === "admin" || user.role === "user") && (
            <li
              onClick={data}
            >
              <img src={photo}  alt="img-user" />
              {name}
            </li>
          )}
          {user.role !== "admin" && user.role !== "user" && (
            <li onClick={data}>
              Users
            </li>
          )}
          {show ? (
            <>
              <div >
                {(user.role === "admin" || user.role === "user") && (
                  <>

                    <Linkeador to="/myprofile" >
                      <li>My Profile</li>
                    </Linkeador>
                    <div to="/signin">
                    <li onClick={signOut} >  Sign Out</li>
                     </div>
                  </>
                )}
                {user.role !== "admin" &&
                  user.role !== "user" &&
                  noLog.map((route) => (
                    <Linkeador
                      to={route.route}
                      key={route.name}
                    >
                      <li >{route.name}</li>
                    </Linkeador>
                  ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
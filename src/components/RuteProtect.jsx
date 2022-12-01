import React from "react";
import { Navigate, Outlet } from "react-router";

export default function RuteProtect({ isAllowed, children, redirect }) { // l aprop redirect me redirecciona
  if (!isAllowed) {//si el usuario no existe va a retornar navigate
    return <Navigate to={redirect} />;
  } else {
    return children || <Outlet />; //si existe retorna oulet, varias subrutas hacen referencia a oulet
  }
}
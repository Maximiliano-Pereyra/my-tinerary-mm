import React from "react";
import { Navigate, Outlet } from "react-router";

export default function RuteProtect({ isAllowed, children, redirect }) {
  if (!isAllowed) {
    return <Navigate to={redirect} />;
  } else {
    return children || <Outlet />;
  }
}
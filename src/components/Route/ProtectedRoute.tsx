import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Fragment } from "react";
const ProtectedRouteAdmin = () => {
  const { auth, isLoading } = useSelector((state: any) => state.auth);
  return (
    <Fragment>
    {isLoading === false &&
      (auth === false ? <Navigate to="/login" /> : <Outlet />)}
  </Fragment>
  );
};
export default ProtectedRouteAdmin;

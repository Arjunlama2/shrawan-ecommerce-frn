import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router";
import useFetch from "../hook/useFetch";
import { setUser } from "../redux/Reducers/userSlice";
import Sidebar from "../components/Sidebar";


function AdminLayout() {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");


  const { data: fetchedUser } = useFetch(token ? "api/v1/user/me" : null);

  // ✅ update store when user is fetched
  useEffect(() => {
    if (fetchedUser) {
      dispatch(
        setUser({
          userName: fetchedUser?.username,
          role: fetchedUser?.role,
          email: fetchedUser?.email,
        })
      );
    }
  }, [fetchedUser, dispatch]);

  // ✅ get user from redux store
  const user = useSelector((state) => state.user);

  // wait until store updates before redirecting
  if (!user.role) {
    return <div>Loading...</div>;
  }

  if (user.role === "seller") {
    return (
      <div className="flex">
        <aside className="w-[20vw] bg-red-400 h-[100vh]">
          <Sidebar />


        </aside>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }

  return <Navigate to={"/"} />;
}

export default AdminLayout;

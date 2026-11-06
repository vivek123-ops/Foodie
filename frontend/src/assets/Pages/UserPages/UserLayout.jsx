import React from "react";
import UserHeader from "../../../Components/User/UserHeader";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <UserHeader />

      <main className="min-w-0 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default UserLayout;

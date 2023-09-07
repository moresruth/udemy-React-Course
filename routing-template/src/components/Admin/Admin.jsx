import React from "react";
import { Link, Outlet, Navigate } from "react-router-dom";

const Admin = () => {
  const user = { role: "user" };

  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/sales">Sale</Link>
        </li>
        <li>
          <Link to="/admin/sellers">Sellers</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Admin;

import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between ">
      <div>Logo</div>
      <div>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <div>
        <span>Name</span>
        <span>Cart</span>
        <button
          onClick={() => {
            localStorage.removeItem("currentUser");
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;

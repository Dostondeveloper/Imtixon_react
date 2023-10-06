import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-lg font-bold">Admin</h1>
      <button className="border px-3 py-1 rounded-md border-black">
        Login
      </button>
    </div>
  );
};

export default Navbar;

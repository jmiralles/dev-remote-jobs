"use client";
import React from "react";
import { Navbar as NextNavbar } from "@nextui-org/react";

const Navbar = () => {
  return (
    <NextNavbar
      isBordered
      className="min-h-[10vh] bg-blue-500 bg-opacity-10 text-black relative"
    >
      Add Logo
    </NextNavbar>
  );
};

export default Navbar;

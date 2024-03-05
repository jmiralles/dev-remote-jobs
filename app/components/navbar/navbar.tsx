"use client";
import React from "react";
import { Navbar as NextNavbar } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

const Navbar = () => {
  return (
    <NextNavbar
      isBordered
      className="min-h-[75px] bg-black text-white relative"
    >
      <Image src="/logo.svg" alt="Remote Dev Jobs" height={75} width={173} />
    </NextNavbar>
  );
};

export default Navbar;

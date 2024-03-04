"use client";

import React from "react";
import { Navbar } from "@/app/components/navbar";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
      <main className="flex flex-col relative">
        <Navbar />
        <section className="h-full flex-1 ">{children}</section>
      </main>
    </div>
  );
}

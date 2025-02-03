"use client"; // 👈 Required for hooks

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import PHeader from "../components/layout/PHeader";
import PFooter from "../components/layout/PFooter";

const UserLayout = ({ children }) => {
  const pathname = usePathname(); // ✅ Works in Next.js App Router

  useEffect(() => {
    if (typeof window !== "undefined") {
      const pageClass = `page-${pathname.replace(/\//g, "") || "home"}`;

      setTimeout(() => {
        // Remove any existing "page-" classes before adding a new one
        document.body.classList.forEach((cls) => {
          if (cls.startsWith("page-")) document.body.classList.remove(cls);
        });
        document.body.classList.add(pageClass);
      }, 100);

      // Cleanup function to remove the class when component unmounts
      return () => {
        document.body.classList.remove(pageClass);
      };
    }
  }, [pathname]); // Runs whenever the route changes

  return (
    <>
      <PHeader />
      {children}
      <PFooter />
    </>
  );
};

export default UserLayout;

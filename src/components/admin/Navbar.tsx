"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const menu = [
  {
    name: "inicio",
    url: "/admin",
  },
  {
    name: "citas",
    url: "/admin/visit",
  },
  {
    name: "consultas",
    url: "/admin/appointment",
  },

  {
    name: "empleados",
    url: "/admin/employee",
  },
  {
    name: "usuarios",
    url: "/admin/user",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 bg-white flex w-full items-center justify-center">
      <nav className="flex items-center justify-center flex-wrap w-full text-center">
        {menu.map((item, index) => (
          <NavItem key={index} url={item.url}>
            {item.name}
          </NavItem>
        ))}
      </nav>
    </header>
  );
};

const NavItem = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) => {
  const router = usePathname();
  const isActive = router === url;
  return (
    <Link
      href={url}
      className={
        isActive
          ? "bg-primary w-20 py-2 text-white"
          : "bg-white w-20 py-2 text-primary"
      }
    >
      {children}
    </Link>
  );
};

export default Navbar;

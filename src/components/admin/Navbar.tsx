"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const menu = [
  {
    name: "Admin",
    url: "/admin",
  },
  {
    name: "consultas",
    url: "/admin/appointment",
  },
  {
    name: "citas",
    url: "/admin/visit",
  },
  {
    name: "Usuarios",
    url: "/admin/user",
  },
];

const Navbar = () => {
  return (
    <header className="flex w-full mx-10 justify-around">
      <div>administración</div>
      <nav className="flex items-center justify-center text-center">
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

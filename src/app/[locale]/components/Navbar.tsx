"use client";
import Link from "next/link";
import { useState } from "react";
import LocalController from "./LocalController";
import { useTranslations } from "next-intl";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <header className="flex items-center z-40  justify-between mx-10 py-5">
      <div>
        <Link href="/">
          <img
            className="w-20 h-20 bg-cover transition-transform hover:rotate-180"
            src="favicon.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="md:hidden block" onClick={handleOpen}>
        <img
          className=" cursor-pointer w-10 h-10 hover:rotate-180 transition-transform"
          src="/icons/menu.svg"
          alt=""
        />
      </div>
      {show && (
        <div className="fixed md:hidden z-40 right-0  top-0 w-[30%] flex flex-col items-center justify-center bg-primary h-[100%]">
          <div
            onClick={handleClose}
            className="fixed cursor-pointer top-10 right-10 z-50"
          >
            <img src="icons/close.svg" alt="" />
          </div>
          <nav>
            <ul className="flex flex-col items-end text-white gap-2">
              <li className="border-b-4 hover:border-primary">
                <Link href="/">inicio</Link>
              </li>
              <li className="relative border-b-4 transition-transform hover:border-primary  ">
                servicios
              </li>
              <ul className="mt-1 p-2 relative  flex-col items-end  right-0">
                <li className="text-end border-b-4 hover:border-primary">
                  <Link href="">radiografias</Link>
                </li>

                <li className="text-start border-b-4 hover:border-primary">
                  <Link href="">examenes</Link>
                </li>

                <li className="text-start border-b-4 hover:border-primary">
                  <Link href="">operaciones</Link>
                </li>
              </ul>

              <li className="border-b-4 hover:border-primary">
                <Link href="/contact">contactar</Link>
              </li>

              <LocalController></LocalController>
            </ul>
          </nav>
        </div>
      )}
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center gap-10">
          <li className="border-b-4 hover:border-primary">
            <Link href="/">inicio</Link>
          </li>

          <li className="relative border-b-4 hover:border-primary group ">
            servicios
            <ul className="mt-1 p-2 absolute group-hover:flex hidden  flex-col items-end  right-0  border border-white">
              <li className="text-start w-max">
                <Link href="">radiografias</Link>
              </li>

              <li className="text-start">
                <Link href="">examenes</Link>
              </li>

              <li className="text-start">
                <Link href="">operaciones</Link>
              </li>
            </ul>
          </li>

          <li className="border-b-4 hover:border-primary">
            <Link href="contact">contactar</Link>
          </li>

          <LocalController></LocalController>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

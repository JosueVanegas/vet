"use client";
import { useState } from "react";

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
        <img className="w-20 h-20 bg-cover" src="favicon.svg" alt="" />
      </div>
      <div className="md:hidden block" onClick={handleOpen}>
        <img
          className=" cursor-pointer w-10 h-10 hover:rotate-180 transition-transform"
          src="/icons/menu.svg"
          alt=""
        />
      </div>
      {show && (
        <div className="fixed z-40 right-0  top-0 w-[30%] flex flex-col items-center justify-center bg-primary h-[100%]">
          <div
            onClick={handleClose}
            className="fixed cursor-pointer top-10 right-10 z-50"
          >
            <img src="icons/close.svg" alt="" />
          </div>
          <nav>
            <ul className="flex flex-col items-end text-white">
              <a href="">
                <li className="border-b-4 hover:border-primary">inicio</li>
              </a>
              <a href="">
                <li className="relative border-b-4 transition-transform hover:border-primary  ">
                  servicios
                </li>
              </a>
              <ul className="mt-1 p-2 relative  flex-col items-end  right-0">
                <a href="">
                  <li className="text-end border-b-4 hover:border-primary">
                    radiografias
                  </li>
                </a>
                <a href="">
                  <li className="text-start border-b-4 hover:border-primary">
                    examenes
                  </li>
                </a>
                <a href="">
                  <li className="text-start border-b-4 hover:border-primary">
                    operaciones
                  </li>
                </a>
              </ul>
              <a href="">
                <li className="border-b-4 hover:border-primary">acerca</li>
              </a>
              <a href="">
                <li className="border-b-4 hover:border-primary">ayuda</li>
              </a>
            </ul>
          </nav>
        </div>
      )}
      <nav className="hidden md:block">
        <ul className="flex items-center justify-center gap-10">
          <a href="">
            <li className="border-b-4 hover:border-primary">inicio</li>
          </a>
          <a href="">
            <li className="relative border-b-4 hover:border-primary group ">
              servicios
              <ul className="mt-1 p-2 absolute group-hover:flex hidden  flex-col items-end  right-0  border border-white">
                <a href="">
                  <li className="text-start w-max">radiografias</li>
                </a>
                <a href="">
                  <li className="text-start">examenes</li>
                </a>
                <a href="">
                  <li className="text-start">operaciones</li>
                </a>
              </ul>
            </li>
          </a>
          <a href="">
            <li className="border-b-4 hover:border-primary">acerca</li>
          </a>
          <a href="">
            <li className="border-b-4 hover:border-primary">ayuda</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

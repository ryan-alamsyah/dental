"use client";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { menu } from "motion/react-client";

const MenuNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openVisible = menuOpen ? "visibleMenu" : "hiddenMenu";
  const iconMenu = menuOpen ?  <X /> : <Menu />;
   const textMenu = menuOpen ?  "openText" : "hidenText";

  const HandleMenu = () => {
   setMenuOpen((prev) => !prev);

  };
  return (
    <>
      <nav className=" fixed w-full z-50 ">
        <div className="h-14 w-full bg-teal-100  flex justify-between items-center md:px-20 px-4 ">
          <h1 className="text-2xl font-bold text-teal-500 ">Nafisha Dental</h1>
          <div className="md:flex gap-8 hidden">
            <Link
              href="#home"
              className="text-sm hover:border-b  border-red-400 tr "
            >
              Home
            </Link>
            <Link href="#price" className="text-sm">
              Layanan
            </Link>
            <Link href="#reason" className="text-sm">
              Pasien
            </Link>
            <Link href="#" className="text-sm">
              Edukasi
            </Link>
          </div>
          <div className="border border-teal-300  md:flex hidden px-4 py-2 rounded-full hover:bg-teal-300 duration-300 cursor-pointer text-sm items-center gap-2 ">
            <p>Hubungi</p>
            <Phone size={14} />
          </div>
          
          <button className="md:hidden" onClick={HandleMenu}>{iconMenu}</button>
        </div>


        <div className={`
   transition-all duration-500 ease-in-out bg-teal-100/90
  ${menuOpen ? "h-full opacity-100" : "grid-rows-[0fr] opacity-0 h-full"}
`}>
  <div className=" z-50">
    <div className="flex flex-col justify-center items-center gap-8 h-[100%]">
      <Link href="#home" className="text-sm  ">Home</Link>
      <Link href="#price" className="text-sm">Layanan</Link>
      <Link href="#reason" className="text-sm">Pasien</Link>
      <Link href="#" className="text-sm">Edukasi</Link>
    </div>
  </div>
</div>
      </nav>
    </>
  );
};

export default MenuNavbar;

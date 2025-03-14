"use client";
import { useState } from "react";
import ArrowRight from "@/assets/arrow_right_icon_128385.svg";
import Logo from "@/assets/space-comet_115202.png";
import Image from "next/image";
import MenuIcon from "@/assets/line_menu.svg";
import CloseIcon from "@/assets/close_icon.svg";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Streamline your workflow and boost your storage</p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5 px-4">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas logo" height={40} width={40} />
            <button onClick={toggleMenu}className="md:hidden text-black focus:outline-none">
              {isMobileMenuOpen ? (<span className="text-xl font-bold">X</span>
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">              
              <a href="#" className="link-hover">About</a>
              <a href="#" className="link-hover">Features</a>
              <a href="#" className="link-hover">Customers</a>
              <a href="#" className="link-hover">Updates</a>
              <a href="#" className="link-hover">Help</a>              
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
          {isMobileMenuOpen && (
            <nav className="flex flex-col gap-4 mt-4 text-black/80 md:hidden bg-white p-4 rounded-lg shadow-md">
              <a href="#" className="link-hover">About</a>
              <a href="#" className="link-hover">Features</a>
              <a href="#" className="link-hover">Customers</a>
              <a href="#" className="link-hover">Updates</a>
              <a href="#" className="link-hover">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
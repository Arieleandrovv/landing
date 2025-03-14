import logo from "@/assets/space-comet_115202.png";
import SocialX from "@/assets/social-x_135.svg";
import SocialInsta from "@/assets/social-insta_1315.svg";
import SocialLinkedin from "@/assets/social-linkedin_648.svg";
import SocialPin from "@/assets/social-pin_4164.svg";
import SocialYoutube from "@/assets/social-youtube_468.svg";
import Image from "next/image";

export const Footer = () => {
  
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="logo" height={40} className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a className="link-hover-white" href="">About</a>
          <a className="link-hover-white" href="">Features</a>
          <a className="link-hover-white" href="">Customers</a>
          <a className="link-hover-white" href="">Pricing</a>
          <a className="link-hover-white" href="">Help</a>
          <a className="link-hover-white" href="">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; {year} Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
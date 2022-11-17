import React from "react";
import ReactDOM from "react-dom";

const MobileMenu = ({ handleOpenMenu }) => {
  return ReactDOM.createPortal(
    <menu className="fixed top-0 z-10 flex min-h-screen min-w-full animate-open-menu flex-col items-center justify-center gap-6 bg-black text-4xl text-white ">
      <a onClick={handleOpenMenu} href="#">
        Home
      </a>
      <a onClick={handleOpenMenu} href="#rockets">
        Our Rockets
      </a>
      <a onClick={handleOpenMenu} href="#testimonials">
        Testimonials
      </a>
      <a onClick={handleOpenMenu} href="#contact">
        Contact us
      </a>
    </menu>,
    document.getElementById("portal")
  );
};

export default MobileMenu;

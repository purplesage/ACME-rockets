import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState(false);
  const handleAnimation = () => {
    setMenuAnimation((prev) => !prev);
  };

  const handleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenu = () => {
    handleAnimation();
    handleOpenMenu();
  };

  return (
    <>
      {isMenuOpen && <MobileMenu handleOpenMenu={handleOpenMenu} />}
      <header className="sticky top-0 z-20 bg-pink-600 text-white">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
          <h1 className="text-3xl font-medium">
            <a href="#hero" className="font-audioWide">
              🚀 ACME Rockets
            </a>
          </h1>
          <div>
            <button
              id="mobile-open-button"
              className={`text-3xl text-white ${
                menuAnimation
                  ? "rotate-180 transition-transform duration-200"
                  : ""
              } focus:outline-none sm:hidden`}
              onClick={handleMenu}
            >
              {!isMenuOpen ? <GiHamburgerMenu /> : <AiOutlineClose />}
            </button>
            <nav
              className="hidden space-x-8 text-xl sm:block "
              aria-label="main"
            >
              <a href="#rockets" className="hover:opacity-90">
                Our Rockets
              </a>
              <a href="#testimonials" className="hover:opacity-90">
                Testimonials
              </a>
              <a href="#contact" className="hover:opacity-90">
                Contact
              </a>
            </nav>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;

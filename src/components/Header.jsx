import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-teal-700 text-white">
      <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
        <h1 className="text-3xl font-medium">
          <a href="#hero">🚀 ACME Rockets</a>
        </h1>
        <div>
          <button
            id="mobile-open-button"
            className="text-3xl text-white focus:outline-none sm:hidden"
          >
            <GiHamburgerMenu />
          </button>
          <nav className="hidden space-x-8 text-xl sm:block " aria-label="main">
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
  );
};

export default Header;

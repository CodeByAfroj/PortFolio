


import { useState, useEffect } from "react";
import { MegaMenu, NavbarBrand, NavbarCollapse } from "flowbite-react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

 
  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <MegaMenu
      className={`sticky  top-0 z-50 transition-shadow duration-300  ${
        scrolled ? "shadow-md" : ""
      } bg-gray-950`}
    >
      {/* Logo / Brand */}
     <Link to="/" className="m-2 flex items-center gap-3">
  <div className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden">
  
  </div>
  <span
    className={`text-2xl font-bold tracking-wide text-gray-100
    }`}
  >
    My<span className="text-violet-400">PortFolio</span>
  </span>
</Link>


      {/* Mobile Toggle */}
      <div className="flex items-center gap-2 md:hidden">
      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navbar Links */}
      <NavbarCollapse
        className={`transition-all duration-500 leading-relaxed text-center ${
          isOpen ? "block" : "hidden"
        } md:flex md:items-center md:gap-6`}
      >
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
        ].map((link, idx) => (
          <Link
            key={idx}
            className={`font-medium py-2   hover:outline-1 hover:rounded-md min-md:text-md transition-colors text-white hover:text-blue-400
               
            }`}
            to={link.to}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}

      
      </NavbarCollapse>
    </MegaMenu>
  );
};

export default Header;

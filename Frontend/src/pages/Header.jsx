
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";

const Header = () => {


  return (
   <>

    <Navbar fluid rounded className="bg-gray-700 max-md:px-10  ">
      <NavbarBrand href="/" >
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white" >PortFolio</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink  href="/about">
          About
        </NavbarLink>
        <NavbarLink href="/projects">Projects</NavbarLink>
         <NavbarLink href="/contact" >   
          Contact 
        </NavbarLink>      
      </NavbarCollapse>
    </Navbar>

    </>
  )
}

export default Header
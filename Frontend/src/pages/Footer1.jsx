import React ,{useEffect} from 'react'
"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsLinkedin, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer1 = () => {
  
    useEffect(() => {
      AOS.init({
        duration: 2000, // animation duration (ms)
        once: true,     // animate only once per element
      });
    }, [])
  return (
   
     
    <Footer bgDark>
      <div  className="w-full   ">
        <div className="grid w-full  grid-cols-2 gap-8 px-6 py-8 min-md:grid-cols-3">
          <div data-aos="fade-up" className='min-md:ml-19 '>
           <h4 className='p-2'>Company</h4>
        
            <FooterLinkGroup col>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
          </div>
          <div data-aos="fade-up">
            <h4 className='p-2'>Help center</h4>
           
            <FooterLinkGroup col>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div data-aos="fade-up">
             <h4 className=' px-6'>Legal</h4>
          
            <FooterLinkGroup col>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>

        </div>
        <div  className="w-full bg-gray-700 px-20 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>


   
  )
}
export default Footer1
import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react';
import "../App.css"
import TiltedCard from '../components/TitleCard';
import Full from "../assets/full.png"
import pc from "../assets/pc.png"
import back from "../assets/back.png"
import api from "../assets/api.png"
import ui from "../assets/ui.png"

import { FaArrowCircleDown } from 'react-icons/fa';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiOutlineArrowDown } from 'react-icons/ai'
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";




import AOS from 'aos';
import 'aos/dist/aos.css';
import { toast } from 'react-toastify';
import FloatingIslandScene from '../components/FloatingIslandScene';
import LaptopScene from '../components/LaptopScene';
import ScrollVelocity from '../components/ScrollVelocity';
import LogoLoop from '../components/LogoLoop';
import {
  SiPostman,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import Contact from './Contact';
import ProfileCircle from '../components/ProfileCircle';



const Body = () => {
  const techLogos = [
    { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
    { node: <SiExpress />, title: "Express.js", href: "https://expressjs.com" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiRedux />, title: "Redux", href: "https://redux.js.org" },
  ];

  const cards = [
    {
      title: "Full Stack Developer",
      image: Full,
      textColor: "text-gray-200",
    },
    {
      title: "Frontend Developer",
      image: back,
      textColor: "text-gray-200",
    },
    {
      title: "Backend Developer",
      image: api,
      textColor: "text-gray-200",
    },
    {
      title: "      ....UI/UX Designer",
      image: ui,
      textColor: "text-gray-200",
    },
  ];



  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  useEffect(() => {
    AOS.init({
      duration: 2000, // animation duration (ms)
      once: true,     // animate only once per element
    });
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      toast.error("All fields are required");
      return; // Stop further execution
    }
    const data = { name, email, msg };
    axios.post("http://localhost:3000/api/add", data)
      .then(() => {
        if (name || !email || !msg) {
          toast.success("Response Submitted..(^_^)");
          setEmail("")
          setName("")
          setMsg("")

          return; // Stop further execution
        }
        //react toast

      })
      .catch((error) => {

        console.log(error);

      })




    // Card data array




  }


  return (
    <>

      <div className='h-full max-md:px-2 min-md:px-20 '>
        <div className="   flex flex-col mt-5">
          <div className='rounded-md ml-2'>
            <div data-aos="zoom-out" className="flex items-center text-center max-sm:text-4xl text-5xl font-bold max-sm:py-4 py-3 h-30 rounded-xl min-md:ml-12">
              Hi,
            </div>
            <div data-aos="zoom-out" className="flex items-center text-center max-sm:text-4xl text-5xl font-bold max-sm:py-4 py-3 h-30 rounded-xl -mt-12 min-md:ml-14">
              I'm <span className='px-2 py-1 text-purple-400'> Afroj</span>
            </div>
            <div className="text-white text-xl min-md:ml-12  flex flex-wrap items-center gap-2">
              <span>I Develop Modern</span>
              <span className="text-purple-400">
                <Typewriter
                  words={["User Interfaces", "Web Apps", "Full Stack Apps"]}
                  loop={0}            // 0 = run once, change to Infinity for looping
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}       // typing speed
                  deleteSpeed={40}     // deletion speed
                  delaySpeed={1200}    // delay before typing next word
                />
              </span>
            </div>
          </div>

          {/* Description with subtle fade */}





          <div data-aos="zoom-in" className='mt-10 h-70 w-full outline-1 outline-blue-400 rounded-xl'>

          </div>
        </div>
        <div className=' w-full flex h-10 mt-10 flex-row gap-4 justify-center rounded-4xl' >
          <div data-aos="fade-right" className='p-2 font-medium h-10 outline  outline-cyan-400 rounded-full hover:outline-3 hover:cursor-pointer text-amber-50 '  ><a href="/about">About Me</a></div>
          <div data-aos="fade-left" className='p-2 font-medium h-10  outline outline-cyan-400  rounded-full hover:outline-3 hover:cursor-pointer text-amber-50 ' ><a href="/projects">Projects</a></div>

        </div>



        <div className="flex justify-center mt-20 ">
          <div className="flex justify-center items-center rounded-full h-16 w-10  text-5xl ">
            <div className="h-13 w-7 outline-2  rounded-xl flex justify-center">
              <div className='dot'>.</div>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-center mt-20 w-88 ">
          <div className="flex justify-center items-center rounded-full h-16  text-5xl ">
            <div className=" h-13 w-78 outline-2  rounded-xl flex justify-center">
              <div className='dot'>.</div>
              <div className='dot1'>.</div>
                 
                <div className=" h-full flex flex-col mt-2  ">
                  <div className=" outline-1 h-10 w-20 rounded-tr-full rounded-tl-full text-center "><div className='dot1'>.</div></div>
                  <div className="dot1 down outline-1 h-10 w-20 rounded-br-full rounded-bl-full text-center">.</div>
                </div>

              </div>   
          </div>
        </div> */}

        <div className='overview mt-10 h-full w-full outline-1 outline-blue-400 rounded-xl p-1'>

          <div className='mt-50 h-full w-full'>
            <div className='flex flex-col justify-center items-center'>
              <h6 data-aos="fade-right" className='font-bold text-gray-300'> INTRODUCTION</h6>
              {/* <ScrollVelocity
  texts={['React Bits', 'Scroll Down  ']} 
  velocity={20} 
  className="custom-scroll-text"
/> */}



              <span data-aos="zoom-in" className=' max-sm:text-3xl text-6xl text-center font-extrabold text-gray-300'>OVERVIEW.</span>
            </div>
            <div className='max-sm:mt-10 mt-15 '>
              <div className='h-full w-full mt-3 ml-2 p-2'>
                <div className='max-sm:hidden flex flex-row justify-center gap-10 items-center  p-10 '>
                  <div data-aos="fade-up" className='flex-row justify-center items-center '>
                    <div data-aos="fade-up" className='h-10 w-10 rounded-full outline-4 outline-gray-300 -ml-5'></div>
                    <div data-aos="fade-up" className='h-60 w-0 outline-4 outline-gray-300 mt-1 '></div>
                  </div>
                  <div data-aos="fade-left" className='max-md:h-auto h-70  min-md:h-auto w-150  outline-2 outline-gray-300 rounded-md p-3 text-xl leading-relaxed tracking-wide text-gray-300 '>I am a skilled Full Stack Developer with extensive experience in both frontend and backend technologies. I have a strong track record of delivering high-quality applications, from simple to complex, with a focus on user-centric design and scalable architecture.</div>
                </div>

                <div data-aos="fade-left" className='min-sm:hidden text-lg min-md:p-2  max-sm:text-md  p-4  leading-relaxed tracking-wide text-gray-300 '>I am a skilled Full Stack Developer with extensive experience in both frontend and backend technologies.</div>
              </div>
            </div>
          </div>
          {/* cards */}
          <div
            data-aos="fade-up"
            className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 p-6 mt-10 place-items-center"
          >
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                className="flex justify-center bg-gray-800 items-center text-center p-3  rounded-3xl"
              >
                <TiltedCard
                  imageSrc={card.image}
                  altText={card.title}
                  captionText=""
                  containerHeight="250px"
                  containerWidth="210px"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="flex mt-58 ml-4 py-3 px-2">

                      <p
                        className={`text-sm font-semibold  text-center ${card.textColor}`}
                      >
                        {card.title}
                      </p>
                    </div>

                  }
                />
              </div>
            ))}
          </div>


          <div className='work flex flex-col justify-center items-center '>
            <div className='mt-50 h-full w-full'>
              <div className='flex flex-col justify-center items-center'>
                <h6 data-aos="fade-right" className='font-bold text-gray-300 max-sm:text-sm '> WHAT I HAVE DONE SO FAR</h6>
                <span data-aos="zoom-in" className=' max-sm:text-3xl text-6xl text-center font-extrabold text-gray-300'>WORK EXPERIENCE.</span>
              </div>

              <div className='max-sm:mt-10 mt-15'>
                <div className='h-full w-full mt-3 ml-2 p-2'>
                  <div className='max-sm:hidden flex flex-row justify-center gap-10 items-center  p-10 '>
                    <div data-aos="fade-up" className='flex-row justify-center items-center '>
                      <div data-aos="fade-up" className='h-10 w-10 rounded-full outline-4 outline-gray-300  -ml-5'></div>
                      <div data-aos="fade-up" className='h-60 w-0 outline-4 outline-gray-300 mt-1 '></div>
                    </div>
                    <div data-aos="fade-left" className='max-md:h-auto h-70  min-md:h-auto w-150 outline-2 outline-gray-300 rounded-md p-4 text-xl leading-relaxed tracking-wide text-gray-300'>I’ve successfully worked on a variety of projects, including a comprehensive recipe book application, demonstrating my ability to bring creative ideas to life while ensuring performance and functionality. Whether developing intuitive UIs or robust backend systems, I thrive in building end-to-end solutions that meet both client needs and business goals.</div>
                  </div>

                  <div data-aos="fade-left" className='min-sm:hidden text-lg min-md:p-2  max-sm:text-md  p-2 leading-relaxed tracking-wide text-gray-300'>I’ve successfully worked on a variety of projects, including a comprehensive recipe book application, demonstrating my ability to bring creative ideas to life while ensuring performance and functionality.</div>
                </div>
              </div>

            </div>
            {/* <div className='mx-20'>
              <div data-aos="fade-up" className="work flex flex-wrap justify-center gap-9 mt-15 p-2">
                <div className="flex justify-center items-center m-2 h-32 w-32 sm:h-26 sm:w-26 rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512" />
                    <path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
                    <path fill="#ebebeb" d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26" />
                    <path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" />
                  </svg>
                </div>

                <div className="flex justify-center items-center m-2 h-32 w-32 sm:h-26 sm:w-26 rounded-xl">
                  <img className="h-30 w-auto" src="./src/assets/CSS.png" alt="CSS3" />
                </div>

                <div className="flex justify-center items-center m-2 h-32 w-32 sm:h-26 sm:w-26 rounded-xl">
                  <img className="h-26 w-auto rounded-xl" src="./src/assets/js.png" alt="JavaScript" />
                </div>

                <div className="flex justify-center items-center m-2 h-32 w-32 sm:h-26 sm:w-26 rounded-xl">
                  <img className="h-24 w-auto" src="./src/assets/React.png" alt="React" />
                </div>
                <div className="flex justify-center items-center m-2 h-32 w-32 sm:h-26 sm:w-26 rounded-full bg-amber-50">
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" className="text-white"><path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z" /></svg>
                </div>

                <div className="flex justify-center items-center m-2 h-30 w-32 sm:h-26 sm:w-26 rounded-xl bg-white">
                  <img className="h-19 mt-2 px-1" src="./src/assets/Node.png" alt="Node.js" />
                </div>

                <div className="flex justify-center items-center m-2 h-32 w-32 sm:h-26 sm:w-26 rounded-xl">
                  <img className=' mt-4 px-1' src='./src/assets/1.png' />
                </div>

                <div className="flex justify-center items-center m-2 h-32 w-32 sm:h-26 sm:w-26 rounded-full outline-1">
                  <svg className='' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" ><path d="m18.0379.13033c-3.1388-.403077-6.3266.133689-9.16038 1.54242-2.83373 1.40873-5.18608 3.62614-6.75956 6.37182-1.573474 2.74573-2.297402 5.89633-2.0802323 9.05343.2171693 3.1571 1.3656823 6.179 3.3002923 8.6833 1.93461 2.5044 4.56843 4.3788 7.56838 5.3863 2.9999 1.0074 6.2312 1.1026 9.2853.2736 3.054-.8291 5.7937-2.5452 7.8724-4.9313 2.0787-2.3862 3.4031-5.3351 3.8058-8.474.5399-4.2086-.614-8.45933-3.208-11.81721-2.5939-3.35789-6.4154-5.547909-10.624-6.08836z" fill="#ff6c37" /><g fill="#fff"><path d="m11.5675 17.0112c.0062.0127.0167.0228.0295.0286.0128.0059.0273.0071.0409.0034l2.56-.552-1.0768-1.0912-1.5344 1.5344c-.0121.0082-.0207.0205-.0243.0347-.0035.0142-.0017.0292.0051.0421z" /><path d="m23.5547 6.01921c-.3567.00036-.7089.08074-1.0305.23521-.3215.15447-.6044.3791-.8277.65736-.2232.27825-.3813.60304-.4624.95045s-.0833.70859-.0064 1.05696.231.67505.4509.95599c.2199.28092.5.50902.8197.66732.3197.1584.6708.243 1.0275.2477s.71-.0707 1.0337-.2206l-1.6224-1.62239c-.0186-.01858-.0334-.04065-.0435-.06495-.01-.0243-.0152-.05035-.0152-.07665 0-.02631.0052-.05236.0152-.07666.0101-.0243.0249-.04637.0435-.06494l2.12-2.1184c-.4257-.34232-.9561-.52814-1.5024-.5264z" /><path d="m25.3483 6.8208-1.9872 1.9792 1.5584 1.5584c.1148-.0806.2219-.1717.32-.272.4271-.43.6757-1.00568.6959-1.61142.0202-.60575-.1896-1.1967-.5871-1.65418z" /><path d="m21.3723 10.4736h-.0352c-.0413-.0003-.0826.0034-.1232.0112h-.0144c-.0446.0096-.0884.0224-.1312.0384l-.0336.016c-.0322.0134-.0632.0295-.0928.048l-.0352.0224c-.0387.0267-.0751.0567-.1088.0896l-5.8928 5.8944.7296.7296 6.24-5.4768c.0353-.0309.0674-.0652.096-.1024l.0272-.0352c.0213-.0312.0406-.0638.0576-.0976.0096-.0192.0176-.0384.0256-.0576.0108-.0255.0198-.0517.0272-.0784 0-.0192.0112-.0384.016-.0576.0079-.0396.0132-.0797.016-.12v-.0528c0-.0288 0-.0576 0-.0864s0-.0384-.008-.0576c-.0296-.151-.1033-.2898-.2118-.3989s-.247-.1835-.3978-.2139h-.0304c-.0396-.0076-.0797-.0124-.12-.0144z" /><path d="m13.3963 15.1168 1.2096 1.2032 5.9088-5.9088c.1923-.188.4428-.3048.7104-.3312-1.0448-.8-2.184-.5904-7.8288 5.0368z" /><path d="m22.2075 12.0768-.072.0704-6.24 5.4752 1.0608 1.0592c2.6304-2.488 4.9648-4.8576 5.2512-6.6048z" /><path d="m6.64277 24.904c.00324.0113.0099.0214.01905.0288.00916.0075.02038.0119.03215.0128l2.71999.1872-1.5248-1.5248-1.23359 1.232c-.008.0083-.01345.0188-.01572.0301-.00226.0114-.00125.0231.00292.0339z" /><path d="m8.17394 23.3248 1.60799 1.608c.01909.0204.04463.0336.07231.0374s.05582-.0021.07969-.0166c.02493-.0124.04478-.033.05617-.0584.0114-.0254.0136-.054.00623-.0808l-.2704-1.1552c-.01751-.0749-.00955-.1535.02262-.2233.03216-.0698.0867-.1269.15498-.1623 2.81917-1.4128 5.09277-2.8672 6.76157-4.32l-1.12-1.12-2.4.5168z" /><path d="m15.2011 17.4944-.6016-.6016-.832.8304c-.006.0072-.0093.0163-.0093.0256 0 .0094.0033.0184.0093.0256.0039.0085.0107.0154.0193.0192.0085.0038.0181.0044.0271.0016z" /></g><path d="m25.4043 8.1104c-.0082-.02518-.0217-.04831-.0396-.06784-.0178-.01953-.0397-.03501-.0641-.04539-.0243-.01039-.0506-.01544-.0771-.01481-.0265.00062-.0525.00691-.0764.01843-.0238.01152-.0449.02801-.0619.04836-.0169.02035-.0293.04409-.0363.06963s-.0085.05229-.0043.07844.0139.0511.0285.07318c.0478.09622.0668.20422.0546.31097s-.0551.20768-.1234.29063c-.0224.0271-.0367.06001-.0411.09492-.0045.0349.0011.07035.016.10221s.0386.05883.0683.07775c.0296.01892.0641.02902.0992.02912.0272-.00029.054-.00645.0786-.01805.0246-.01159.0463-.02836.0638-.04915.1133-.13769.1844-.30513.2048-.48222s-.0107-.35632-.0896-.51618z" fill="#ff6c37" /></svg>
                </div>

                <div className="flex justify-center items-center m-2 h-32 w-32 sm:h-26 sm:w-26 rounded-full bg-white">
                  <svg viewBox="0 -5 36 32" fill="none"  ><path className="fill-sky-400 " d="M17.183 0C12.6 0 9.737 2.291 8.59 6.873c1.719-2.29 3.723-3.15 6.014-2.577 1.307.326 2.242 1.274 3.275 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.291 8.591-6.872-1.718 2.29-3.723 3.15-6.013 2.576-1.308-.326-2.243-1.274-3.276-2.324C23.39 1.98 21.44 0 17.183 0ZM8.59 10.309C4.01 10.309 1.145 12.6 0 17.182c1.718-2.291 3.723-3.15 6.013-2.577 1.308.326 2.243 1.274 3.276 2.324 1.685 1.71 3.635 3.689 7.894 3.689 4.582 0 7.445-2.29 8.59-6.872-1.718 2.29-3.722 3.15-6.013 2.577-1.307-.327-2.242-1.276-3.276-2.325-1.684-1.71-3.634-3.689-7.893-3.689Z"></path></svg>
                </div>

                <div className="flex justify-center items-center m-2 h-32 w-32 sm:h-26 sm:w-26 rounded-full">
                  <img className="rounded-full" src="./src/assets/mongo.png" alt="MongoDB" />
                </div>
              </div>

            </div> */}
            <div className="flex flex-col items-center justify-center mt-8">
              <span data-aos="zoom-in" className=' max-sm:text-3xl text-5xl text-center font-extrabold text-gray-300'>MY TECH STACK</span>

              <div className="w-full max-w-6xl mt-18 h-[120px]">
                <LogoLoop
                  logos={techLogos}
                  speed={100}
                  direction="left"
                  logoHeight={60}
                  gap={50}
                  pauseOnHover
                  scaleOnHover
                  fadeOut
                  fadeOutColor="#ffffff"
                />

              </div>
            </div>

            <div className='mt-25 h-full w-full'>
              <div className='flex flex-col justify-center items-center '>
                <h6 data-aos="fade-right" className='font-bold text-gray-300 max-sm:text-sm '> MY WORK</h6>
                <span data-aos="zoom-in" className=' max-sm:text-3xl text-6xl text-center font-extrabold text-gray-300'>PROJECTS.</span>
              </div>

              <div className='max-sm:mt-10 mt-15'>
                <div className='h-full w-full mt-3 ml-2 p-2'>
                  <div className='max-sm:hidden flex flex-row justify-center gap-10 items-center  p-10 '>
                    <div data-aos="fade-up" className='flex-row justify-center items-center '>
                      <div data-aos="fade-up" className='h-10 w-10 rounded-full outline-4 outline-gray-300  -ml-5'></div>
                      <div data-aos="fade-up" className='h-60 w-0 outline-4 outline-gray-300 mt-1 '></div>
                    </div>
                    <div data-aos="fade-left" className='max-md:h-auto h-50  min-md:h-auto w-150  outline-2 outline-gray-300 rounded-md p-4 text-xl leading-relaxed tracking-wide text-gray-300'>I’ve collaborated on real-world projects that blend innovation with functionality. From crafting seamless UIs to building efficient backend systems, I deliver full-stack solutions. My work includes dynamic applications like a recipe book platform tailored for user engagement. Each project reflects problem-solving, technical skill, and a passion for user-centered design.</div>
                  </div>

                  <div data-aos="fade-left" className='min-sm:hidden text-lg min-md:p-2  max-sm:text-md  p-2 leading-relaxed tracking-wide text-gray-300'>I’ve collaborated on real-world projects that blend innovation with functionality. From crafting seamless UIs to building efficient backend systems, I deliver full-stack solutions.</div>
                </div>
              </div>

            </div>



            <div
              data-aos="fade-up"
              className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 p-6 mt-10 place-items-center"
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="flex justify-center bg-gray-800 items-center text-center p-3  rounded-3xl"
                >
                  <TiltedCard
                    imageSrc={card.image}
                    altText={card.title}
                    captionText=""
                    containerHeight="250px"
                    containerWidth="210px"
                    imageHeight="100%"
                    imageWidth="100%"
                    rotateAmplitude={12}
                    scaleOnHover={1.1}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="flex mt-58 ml-4 py-3 px-2">

                        <p
                          className={`text-sm font-semibold  text-center ${card.textColor}`}
                        >
                          {card.title}
                        </p>
                      </div>

                    }
                  />
                </div>
              ))}
            </div>





          </div>
          <Contact />

        </div>

      </div>

    </>





  )
}

export default Body





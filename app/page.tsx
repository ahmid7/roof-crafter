"use client"

import React from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import RecentProject from "./components/RecentProject";
import CustomerReview from "./components/CustomerReview";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import { Logo } from "./components/svgs"
import SplashScreen from "./components/SplashScreen"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {

  const Home = React.useRef(null)

  const [isPageReady, setIsPageReady] = React.useState(false)
  

  useGSAP(() => {
    const HeaderWithParagraphs = gsap.utils.toArray(".Header-Paragraph-Section")

    // nav-bar top section animation
    gsap.to(".header-container", {
      backdropFilter:"blur(12px)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      scrollTrigger: {
        trigger: Home.current,
        start: "0.3%",
        toggleActions: "play reset resume reset"
      }
    })
    
    gsap.to(".header-container", {
      // backdropFilter:"blur(12px)",
      backgroundColor: "#FFF",
      ease: "power1.out",
      scrollTrigger: {
        trigger: '.footer-section2',
        start: "top 5%",
        toggleActions: "play reverse resume reverse",
      }
    })

    // headers and paragraphs text animation
    HeaderWithParagraphs.forEach((section, index) => {
      const headerWithParagraph = gsap.utils.selector(section!)
      
      gsap.fromTo(headerWithParagraph("h2 span"), { yPercent: 100 }, {
        yPercent: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headerWithParagraph('h2'),
          start: "top 80%",
        }
      })

      gsap.fromTo(headerWithParagraph("p span"), { yPercent: 100 }, {
        yPercent: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headerWithParagraph('h2'),
          start: "top 80%"
        }
      })
    })

    // hamburger-menu
    const menuButton = document.querySelector(".menu-button")

    // overlay-menu and close buttons
    const closeMenu = gsap.utils.toArray([".menu-close", ".menu-overlay"])

    // overlay menu 
    const menuOverlay = document.querySelector(".menu-overlay")

    // menu open animation
    menuButton?.addEventListener("click", () => {

      menuOverlay?.classList.add("toggleShow")

      gsap.fromTo(".menu-inner", { yPercent: -100 } , {
        yPercent: 0,
        duration: 0.6,
        ease: "back.out"
      })
    })

    // menu close animation
    closeMenu.map((close:any, _) => {
      close.addEventListener("click", () => {
  
        gsap.fromTo(".menu-inner", { yPercent: 0 } , {
          yPercent: -100,
          duration: 0.6,
          ease: "back.in",
          onComplete: () => {
            menuOverlay?.classList.remove("toggleShow")
          }
        })
      })
    })
  }, { scope: Home })

  React.useEffect(() => {
    setIsPageReady(true)
  }, [isPageReady])

  return (
    <main className="font-bold text-3xl space-y-10 md:space-y-10 lg:space-y-[60px] 2xl:container 2xl:mx-auto" ref ={ Home }>
      <HeroSection />
      <Services />
      <RecentProject />
      <CustomerReview />
      <Faqs />
      <Footer />

      <div className="menu-overlay backdrop-blur-[8px] hidden md:hidden fixed z-50 -top-10 right-0 h-full w-full ">
        <nav className="menu-inner top-0  m-3 p-5 bg-[#070A0E] space-y-7 w-4/5 rounded-2xl relative ">
          <div className="between">
            <div className="w-32 h-7">
              <Logo />
            </div>

            <button className="text-sm text-white border-white border border-solid py-1 px-4 rounded-[24px] menu-close form-button hover:text-mirage-black after:bg-white">
              Close
            </button>
          </div>

          <ul className="gap-x-4 space-y-7 text-white nav-list-wrapper mobile-nav-list leading-6 text-xl -tracking-[0.08px] [&_li]:text-center [&_li]:py-1">
            <li >
              <a  href="#">Home</a>
            </li>
            
            <li>
              <a href="#About">About</a>
            </li>

            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>

          <div>
            <div className="w-full h-[1px] bg-gray-1"/>

            <span className="text-sm text-white">
              All right reserved 2023
            </span>
          </div>
        </nav>
      </div>

      <SplashScreen />
    </main>
  );
}

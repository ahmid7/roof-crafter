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
import Header from "./components/Header"

gsap.registerPlugin(ScrollTrigger)
export default function Home() {

  const Home = React.useRef(null)

  
  useGSAP(() => {
    const HeaderWithParagraphs = gsap.utils.toArray(".Header-Paragraph-Section")

    // nav-bar animation
    gsap.to(".header-container", {
      backdropFilter:"blur(16px)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      scrollTrigger: {
        trigger: Home.current,
        start: "1%",
        markers: true,
        toggleActions: "play reset resume reset"
      }
    })

    // headers and paragraphs text animation

    // HeaderWithParagraphs.forEach((section, index) => {
    //   const headerWithParagraph = gsap.utils.selector(section)
      
    //   gsap.to(headerWithParagraph("h2"), {
    //     border: '2px solid red'
    //   })

    //   gsap.to(headerWithParagraph("p"), {

    //   })
    // })


  
  }, { scope: Home })

  return (
    <main className="font-bold text-3xl space-y-10 md:space-y-10 lg:space-y-[60px] 2xl:container 2xl:mx-auto" ref ={ Home }>
      <HeroSection />
      <Services />
      <RecentProject />
      <CustomerReview />
      <Faqs />
      <Footer />
    </main>
  );
}

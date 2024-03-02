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

gsap.registerPlugin(ScrollTrigger)
export default function Home() {

  const Home = React.useRef(null)

  
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

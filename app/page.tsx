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
    gsap.to(".header-container", {
      scrollTrigger: {
        trigger: Home.current,
        start: "top top",
        markers: true,
      }
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

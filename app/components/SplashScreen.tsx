import React from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import { RemoveScroll } from "react-remove-scroll";
import { fullWidthClassName } from "react-remove-scroll-bar";

function SplashScreen({ isScrollEnabled }: { isScrollEnabled: boolean }) {
  useGSAP(() => {
    gsap.fromTo(".splash-screen-text", { y: "100%", rotateX: "15deg" }, { y: "0%", rotateX: 0, duration: 1.3, ease: "linear" })
  }, { scope: '.splash-screen' })
  return (
    <section className="splash-screen h-[120vh] font-neue w-full overflow-hidden bg-[#070A0E] fixed -top-20 left-0 z-50">
      <RemoveScroll className={fullWidthClassName} enabled={isScrollEnabled}>
        <div className="h-dvh w-full text-gray-1 grid place-content-center">
          <div className="flex items-center justify-center gap-x-3 md:gap-x-5 lg:gap-x-7 text-5xl md:text-7xl lg:text-8xl xl:text-9xl overflow-hidden">
            <span className="splash-screen-text translate-y-full ">
              Roof{" "}
            </span>
            <span className="splash-screen-text translate-y-full ">
              Crafter
            </span>
          </div>
        </div>
      </RemoveScroll>
    </section>
  );
}

export default SplashScreen;

import { gsap, Power2 } from "gsap"

export const parallax = (
  e:MouseEvent,
  containerRef:HTMLDivElement,
  targetRef:HTMLDivElement,
  movement: number
  ) => {
    const locationX = e.pageX;
    const locationY = e.pageY;
    const x = ((locationX - containerRef.offsetWidth / 2 ) / containerRef?.offsetWidth) * movement;
    const y = ((locationY - containerRef.offsetHeight / 2 ) / containerRef?.offsetHeight) * movement;

    gsap.to(targetRef, {
      x: x,
      y: y,
      ease: Power2.easeOut
    })
}
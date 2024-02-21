"use client"

import React from "react";
import Image from "next/image";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'

const FAQsData = [
  {
    image: "information.png",
    question: "Is the installation process disruptive?",
    answer:
      "Our skilled team ensures a smooth and efficient installation, minimizing disruptions to your daily routine. We prioritize a hassle-free experience.",
  },
  {
    image: "drop.png",
    question: "How do you address potential leaks?",
    answer:
      "Our proactive approach includes thorough inspections and top-quality materials, virtually eliminating the risk of leaks. Your peace of mind is our priority.",
  },
  {
    image: "electricity.png",
    question: "Will the new roof  increase energy bills?",
    answer:
      " Quite the opposite! Our energy-efficient solutions often lead to reduced utility costs, providing long-term savings and environmental benefits..",
  },
  {
    image: "percentage-square.png",
    question: "What if I'm on a tight budget?",
    answer:
      "We offer flexible financing options to accommodate various budgets. Our team works closely with you to find a solution that fits your financial needs.",
  },
  {
    image: "home-wifi.png",
    question: "How do I know which roofing material is best for my property?",
    answer:
      "Our experts conduct a thorough assessment of your property and guide you in choosing the optimal roofing material based on durability, aesthetics, and budget.",
  },
  {
    image: "global-refresh.png",
    question: "Are your roofing solutions environmentally friendly?",
    answer:
      "Absolutely. We prioritize eco-friendly materials and practices, striving to reduce the environmental impact of our projects while maintaining top-tier quality.",
  },
];

type QuestionProps = {
  image: string;
  question: string;
  answer: string;
};

gsap.registerPlugin(ScrollTrigger)

const Question = ({ image, question, answer }: QuestionProps) => {
  return (
    <div className="card">
      <div className="relative z-30 size-10 xl:size-12 rounded-full p-7 xl:p-8 grid place-content-center ">
        <div className="w-fit relative z-40 h-fit p-2 rounded-full bg-[#E2EAFE]">
          <div className="size-5 xl:size-6  relative grid place-content-center">
            <Image
              src={`/assets/images/faqs/${image}`}
              alt="faq-icon"
              quality={100}
              priority
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-0 bg-[#eef0f7]  rounded-full animate-pulseWidth"  />
      </div>

      <div className="space-y-2 pt-2 md:pt-0">
        <h5 className="text-[#101828] paragraph-style3 ">
          {question}
        </h5>
        <p className="font-normal text-base md:text-sm xl:text-base leading-6 md:leading-5 xl:leading-6 -tracking-[0.5%] text-[#475467]">
          {answer}
        </p>
      </div>
    </div>
  );
};



function Faqs() {

  const FAQsRef = React.useRef(null)

  useGSAP(() => {
    gsap.from(".card", {
      yPercent: 50,
      opacity: 0.4,
      stagger: 0.2,
      ease: "power3",
      duration:0.6,
      scrollTrigger: {
        trigger: ".QA-Container",
        markers: true,
        start: "top 70%",
      }
    })
  }, { scope: FAQsRef })
  
  return (
    <section className="container-spacing" ref={ FAQsRef }>
      <div className="max-w-[768px] space-y-3 lg:space-y-4 xl:space-y-5">
        <h3 className="header-style2 -tracking-[1.5%] text-[#101828]">
          FAQs
        </h3>

        <p className="paragraph-style2">
          Everything you need to know about the product and billing. Need more
          help? Contact our team.
        </p>
      </div>

      <div className="QA-Container grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:gap-x-5 xl:gap-x-8 gap-y-8 lg:gap-y-12 xl:gap-y-16 pt-8 lg:pt-12 xl:pt-16">
        {FAQsData.map((data, index) => (
          <Question
            key={ data.question + index }
            image={data.image}
            question={data.question}
            answer={data.answer}
          />
        ))}
      </div>
    </section>
  );
}

export default Faqs;

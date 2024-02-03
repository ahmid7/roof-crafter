import React from "react";
import Image from "next/image";

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

const Question = ({ image, question, answer }: QuestionProps) => {
  return (
    <div>
      <div className="bg-[#F4F6FD] h-10 w-10 xl:h-12 xl:w-12 rounded-full p-7 xl:p-8 grid place-content-center">
        <div className="w-fit h-fit p-2 rounded-full bg-[#E2EAFE]">
          <div className="w-5 h-5 xl:w-6 xl:h-6  relative grid place-content-center">
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
      </div>

      <div className="space-y-2">
        <h5 className="text-[#101828] paragraph-style2">
          {question}
        </h5>
        <p className="font-normal text-sm xl:text-base leading-5 xl:leading-6 -tracking-[0.5%] text-[#475467]">
          {answer}
        </p>
      </div>
    </div>
  );
};

function Faqs() {
  return (
    <section className="px-8 xl:px-10">
      <div className="max-w-[768px] space-y-4 xl:space-y-5">
        <h3 className="header-style2 -tracking-[1.5%] text-[#101828]">
          FAQs
        </h3>

        <p className="paragraph-style2">
          Everything you need to know about the product and billing. Need more
          help? Contact our team.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-5 xl:gap-x-8 gap-y-12 xl:gap-y-16 pt-12 xl:pt-16">
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

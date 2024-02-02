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
      <div className="bg-[#F4F6FD] h-12 w-12 rounded-full p-8 grid place-content-center">
        <div className="w-fit h-fit p-2 rounded-full bg-[#E2EAFE]">
          <div className="w-6 h-6  relative grid place-content-center">
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
        <h5 className="text-[#101828] font-medium text-lg leading-[30px] -tracking-[0.5%]">
          {question}
        </h5>
        <p className="font-normal text-base leading-6 -tracking-[0.5%] text-[#475467]">
          {answer}
        </p>
      </div>
    </div>
  );
};

function Faqs() {
  return (
    <section className="py-[60px] px-10">
      <div className="max-w-[768px] space-y-5">
        <h3 className="font-bold text-[40px] leading-[48px] -tracking-[1.5%] text-[#101828]">
          FAQs
        </h3>

        <p className="font-normal text-xl leading-[30px] -tracking-[0.5%]">
          Everything you need to know about the product and billing. Need more
          help? Contact our team.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-8 gap-y-16 pt-16">
        {FAQsData.map((data, index) => (
          <Question
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

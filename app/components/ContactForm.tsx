import React from "react";
import Image from "next/image";


function ContactForm({ extraInfo}: { extraInfo?: boolean}) {
  return (
    <section className="w-11/12">
      <input name="FullName" type="text" placeholder="Full name"/>
      <input name="Email" type="email" placeholder="Email address"/>
      <div>
        <input type="text" placeholder="How can we help you ?"/>
        {
          extraInfo && (
            <span>We will promise to not share your email to anyone else</span>
          )
        }
      </div>
      <button>
        <span>Get a free inspection</span>

        <Image 
          src="/arrow-right.svg"
          width={27.5}
          height={20}
          alt='phone-icon'
        />
      </button>
    </section>
  );
}

export default ContactForm;

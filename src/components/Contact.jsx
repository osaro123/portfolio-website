import { BsArrowUpRight, BsChat, BsPhone} from "react-icons/bs"
import { styles } from "../style"
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwkjdpyq");

  if (state.succeeded) {
      
      return <section id="contact" className={`flex py-8 flex-col md:flex-row md:items-center justify-evenly leading-10 ${styles.paddingX}`}>
      <aside className="flex items-start justify-start flex-col">
        <h2 className="font-bold mb-4 font-roboto-slab text-[36px]">Get in touch</h2>
        <div>
          <h3 className="flex gap-2 items-center font-semibold"><BsChat/>Chat with us</h3>
          <p>Send us an email and i'll respond shortly</p>
          <p>osarolawani983@gmail.com</p>
        </div>
        <div>
          <h3 className="flex gap-2 items-center font-semibold"><BsPhone/>Phone</h3>
          <p>Call to get my attention instantly</p>
          <p>+2348069999680</p>
        </div>
      </aside>
      <form onSubmit={handleSubmit} className="text-black flex flex-col gap-4 sm:w-[30%] w-full">
        <h2 className="font-bold text-white mb-4 font-roboto-slab text-[24px]">Send a message</h2>
        <input name="name" id="name" type="text" placeholder="Enter your name" className="p-2 w-full"/>
        <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
        />
        <input name="email" id="email" type="email" placeholder="Enter your email" className="p-2"/>
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
        <input name="phone" id="phone" type="tel" placeholder="Phone Number" className="p-2"/>
        <ValidationError 
        prefix="phone" 
        field="phone"
        errors={state.errors}
      />
        <textarea name="message" id="message" cols="30" placeholder="Message" className="p-2"/>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <button type="submit" disabled={state.submitting} className="text-white border-2 flex gap-2 items-center justify-center border-white">Send Message<BsArrowUpRight/></button>
      </form>
    </section>;
    
  }

  return (
    <section id="contact" className={`flex py-8 flex-col md:flex-row md:items-center justify-evenly leading-10 ${styles.paddingX}`}>
      <aside className="flex items-start justify-start flex-col">
        <h2 className="font-bold mb-4 font-roboto-slab text-[36px]">Get in touch</h2>
        <div>
          <h3 className="flex gap-2 items-center font-semibold"><BsChat/>Chat with us</h3>
          <p>Send us an email and i'll respond shortly</p>
          <p>osarolawani983@gmail.com</p>
        </div>
        <div>
          <h3 className="flex gap-2 items-center font-semibold"><BsPhone/>Phone</h3>
          <p>Call to get my attention instantly</p>
          <p>+2348069999680</p>
        </div>
      </aside>
      <form onSubmit={handleSubmit} className="text-black flex flex-col gap-4 sm:w-[30%] w-full">
        <h2 className="font-bold text-white mb-4 font-roboto-slab text-[24px]">Send a message</h2>
        <input name="name" id="name" type="text" placeholder="Enter your name" className="p-2 w-full"/>
        <ValidationError 
        prefix="name" 
        field="name"
        errors={state.errors}
        />
        <input name="email" id="email" type="email" placeholder="Enter your email" className="p-2"/>
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />
        <input name="phone" id="phone" type="tel" placeholder="Phone Number" className="p-2"/>
        <ValidationError 
        prefix="phone" 
        field="phone"
        errors={state.errors}
      />
        <textarea name="message" id="message" cols="30" placeholder="Message" className="p-2"/>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <button disabled={state.submitting} className="text-white border-2 flex gap-2 items-center justify-center border-white">Send Message<BsArrowUpRight/></button>
      </form>
    </section>
  )
}

export default Contact

"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const info = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tejasviraj2912@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Working Address",
    description: "Vadodara, Gujrat",
  },
];

const Contact = () => {
  const formRef = useRef(); // ⭐ To capture form data

  // ⭐ Function to send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hmmrbbq",     // Replace from EmailJS dashboard
        "template_tx0uvv8",    // Replace from EmailJS dashboard
        formRef.current,
        "woPiRsJRKzg3Mq_-M"      // Replace from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset(); // Clear form after success
        },
        (error) => {
          alert("Error sending message. Try again.");
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="max-w-[1100px] w-full px-4 mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* LEFT SIDE — Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              ref={formRef} // ⭐ Connect form to EmailJS
              onSubmit={sendEmail} // ⭐ Handle submit
              className="flex flex-col gap-6 p-6 bg-[#032753] rounded-xl"
            >
              <h3 className="text-3xl sm:text-4xl text-red-500">Let's work together</h3>
              <p className="text-white/60 text-sm sm:text-base">
                Let’s work together to share ideas, combine strengths,
                and achieve something greater.
              </p>

              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="first_name" placeholder="First Name" required />
                <Input type="text" name="last_name" placeholder="Last Name" required />
                <Input type="email" name="email" placeholder="Email Address" required />
                <Input type="text" name="phone" placeholder="Phone Number" required />
              </div>

              <Textarea
                name="message"
                className="h-[150px]"
                placeholder="Type your message here."
                required
              />

              <Button size="md" className="px-1 py-2" type="submit">
                Send message!
              </Button>
            </form>
          </div>

          {/* RIGHT SIDE — Contact Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] bg-[#032753] text-red-500 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>

                  <div>
                    <p className="text-white/70">{item.title}</p>
                    <h3 className="text-white">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "tejasvirajsingh2003@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Working Address",
        description: "Vadodara, Gujrat",
    },
];
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="max-w-[1100px] w-full px-4 sm:px-6 md:px-8 lg:px-0 mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            className="flex flex-col gap-6 p-5 sm:p-8 md:p-10 bg-[#032753] rounded-xl"
                            action=""
                        >
                            <h3 className="text-3xl sm:text-4xl text-red-500">
                                Let's work together
                            </h3>
                            <p className="text-white/60 text-sm sm:text-base">
                                 Let’s work Together
                                together to share ideas, combine strengths, and
                                achieve something greater.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    type="firstname"
                                    placeholder="First Name"
                                />
                                <Input
                                    type="lastname"
                                    placeholder="Last Name"
                                />
                                <Input
                                    type="email"
                                    placeholder="Email Address"
                                />
                                <Input
                                    type="phone"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <Textarea
                                className="h-[150px] sm:h-[200px]"
                                placeholder="Type your message here."
                            />
                            <Button size="md" className=" px-1 py-2">
                                Send message!
                            </Button>
                        </form>
                    </div>

                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-6 sm:mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className="flex items-center gap-6"
                                    >
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#032753] text-red-500 rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div>
                                            <p>{item.title}</p>
                                            <h3>{item.description}</h3>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;

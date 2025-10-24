"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaGithub } from "react-icons/fa";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        category: "Front-end",
        title: "Sneaker eCommerce",
        description:
            "A sleek and responsive sneaker e-commerce website built with front-end technologies, featuring dynamic product displays, intuitive navigation, and a modern UI for a smooth and engaging shopping experience.",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
        image: "/assets/assets/work/sneakers.png",
        live: "",
         github: "https://github.com/tejasvirajsiingh",
        
    },
    {
        num: "02",
        category: "Front-end",
        title: "Floating-mini-docs",
        description:
            "A lightweight front-end mini docs application with a floating-style manager UI, designed for quick access, seamless navigation, and an elegant, distraction-free reading experience.",
        stack: [
            { name: "React" },
            { name: "Tailwind.css" },
            { name: "framer-motion" },
        ],
        image: "/assets/assets/work/docs.png",
        live: "",
         github: "https://github.com/tejasvirajsiingh",
       
    },
    {
        num: "03",
        category: "full-stack",
        title: "Linktree clone",
        description:
            "A modern front-end Linktree clone that provides a clean, responsive interface for managing and showcasing multiple links in one place, with customizable styling for a personalized touch.",
        stack: [
            { name: "Next" },
            { name: "Tailwind.css" },
            { name: "react-toastify" },
            { name: "mongoDB" },
        ],
        image: "/assets/assets/work/linktree.png",
        live: "",
       github: "https://github.com/tejasvirajsiingh",
    },
    {
        num: "04",
        category: "Front-end",
        title: "Codeclarify",
        description:
            "A front-end AI Code Reviewer web app with a clean, developer-friendly UI that analyzes code snippets, provides intelligent feedback, and enhances productivity through an interactive review experience..",
        stack: [
            { name: "React" },
            { name: "monaco-editor" },
            { name: "Tailwind.css" },
        ],
        image: "/assets/assets/work/codereview.png",
        live: "",
        github: "https://github.com/tejasvirajsiingh",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-[1200px] mx-auto w-full">
                <div className="flex flex-col xl:flex-row xl:gap-[30px] gap-8">
                    {/* LEFT SIDE */}
                    <div className="w-full xl:w-[50%] flex flex-col gap-6 order-2 xl:order-none">
                        <div
                            className="text-6xl sm:text-7xl xl:text-8xl leading-none font-extrabold text-transparent"
                            style={{ WebkitTextStroke: "2px white" }}
                        >
                            {project.num}
                        </div>
                        <h2 className="text-2xl sm:text-3xl xl:text-[42px] font-bold leading-none text-white group-hover:text-red-500 transition-all duration-500 capitalize">
                            {project.category}
                        </h2>
                        <p className="text-white/60 text-sm sm:text-base">
                            {project.description}
                        </p>

                        <ul className="flex flex-wrap gap-2 sm:gap-4">
                            {project.stack.map((item, index) => (
                                <li
                                    key={index}
                                    className="text-lg sm:text-xl text-red-500"
                                >
                                    {item.name}
                                    {index !== project.stack.length - 1 && ","}
                                </li>
                            ))}
                        </ul>

                        <div className="border border-blue-400/20"></div>

                        {/* GITHUB ICON */}
                        <div>
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[55px] h-[55px] sm:w-[70px] sm:h-[70px] rounded-full cursor-pointer bg-white/5 flex justify-center items-center group">
                                            <FaGithub className="text-white text-2xl sm:text-3xl group-hover:text-red-500" />
                                        </TooltipTrigger>
                                        <TooltipContent
                                            className="bg-black w-20 text-sm text-white"
                                            side="top"
                                            sideOffset={8}
                                        >
                                            <p>GitHub</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={1}
                            className="mb-8 sm:mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] xl:h-[460px] group rounded-xl flex justify-center items-center bg-pink-50/20">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover rounded-xl shadow-lg"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] w-full justify-between z-20 xl:static xl:mt-4 xl:ml-auto xl:w-max xl:justify-end"
                                btnStyles="bg-red-500 hover:bg-red-700 text-black  rounded text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;

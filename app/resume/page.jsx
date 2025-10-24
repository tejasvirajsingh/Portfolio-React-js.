"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaLinux,
    FaPython,
    FaGit,
    FaGithub,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiPostman,
    SiC,
    SiCplusplus,
    SiMysql,
    SiMongodb,
    SiJupyter,
} from "react-icons/si";

const about = {
    title: "About me",
    description:
        "I am a Computer Science Engineer passionate about technology, problem-solving, and innovation, focused on building efficient solutions and exploring the latest in software and technology.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Tejasvi Raj Singh",
        },

        {
            fieldName: "Experience",
            fieldValue: "2+ years",
        },
        {
            fieldName: "Nationality",
            fieldValue: "Indian",
        },
        {
            fieldName: "Email",
            fieldValue: "tejasvirajsingh2003@gmail.com",
        },
        {
            fieldName: "Freelancer",
            fieldValue: "Available",
        },
        {
            fieldName: "Language",
            fieldValue: "English, Hindi",
        },
    ],
};

const experience = {
    icons: "/public/assets/assets/resume/badge.svg",
    title: "My experience",
    description:
        "Passionate Computer Science Engineer with 2 years of hands-on experience building efficient solutions and exploring emerging technologies.",
    items: [
        {
            Title: "Front-End Development",
            duration: "2022-present",
        },
        {
            Title: "Back-End Development",
            duration: "2025-present",
        },
        {
            Title: "Data Science",
            duration: "2024-present",
        },
        {
            Title: "Machine Learning",
            duration: "2025-present",
        },
    ],
};
const education = {
    icons: "/public/assets/assets/resume/cap.svg",
    title: "My Education",
    description:
        "I am a third-year Computer Science Engineering undergraduate with a passion for technology and problem-solving.",
    items: [
        {
            Institution: "Parul institute of technology",
            degree: "B-Tech CSE",
            duration: "2023-2027",
        },
        {
            Institution: "College Wallah ",
            degree: "Certified Web Developer",

            duration: "2024-2025",
        },
        {
            Institution: "Data Science by codewithharry",
            degree: "Certified Data Scientist",

            duration: "2025-2025",
        },

        {
            Institution: "youtube-Sheryians AI School",
            degree: "Course completion on youtube",
            duration: "2025-present",
        },
    ],
};
const skills = {
    title: "My experience",
    description:
        "I am a third-year Computer Science Engineering undergraduate with a passion for technology and problem-solving.",
    skillsList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaJs />,
            name: "Java Script",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiPostman />,
            name: "postman",
        },
        {
            icon: <FaLinux />,
            name: "linux",
        },
        {
            icon: <SiC />,
            name: "c",
        },
        {
            icon: <SiCplusplus />,
            name: "c++",
        },
        {
            icon: <FaPython />,
            name: "python",
        },
        {
            icon: <FaGit />,
            name: "git",
        },
        {
            icon: <FaGithub />,
            name: "github",
        },
        {
            icon: <SiMysql />,
            name: "mysql",
        },
        {
            icon: <SiMongodb />,
            name: "mongoDB",
        },
        {
            icon: <SiJupyter />,
            name: "jupyter notebook",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] xl:mx-36 mx-16 flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:m-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-2xl text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#0f213b] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px]  text-red-500 lg-text-left">
                                                        {item.duration}
                                                    </h3>
                                                    <div className="flex items-center gap-3 text-white/80">
                                                        <span className="w-[6px] h-[6px] rounded-full bg-red-500"></span>
                                                        {item.Title}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-2xl text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px] overflow-x-hidden">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] w-full">
                                        {education.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#0f213b]  h-[200px] py-6 px-6 lg:px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 w-full"
                                            >
                                                <h3 className="text-xl max-w-full min-h-[60px] text-red-500 lg:text-left">
                                                    {item.duration}
                                                </h3>
                                                <div className="flex items-center gap-3 text-white/80">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-red-500"></span>
                                                    {item.Institution}
                                                </div>
                                                <div className="flex items-center gap-3 text-white/80">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-red-500"></span>
                                                    {item.degree}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col text-center gap-[30px] xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                                    {skills.skillsList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="  mx-auto mb-5  w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] lg:w-[120px] lg:h-[120px] xl:w-[150px] xl:h-[150px] bg-[#0f213b] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl hover:text-red-500 transition-colors duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent
                                                            className="text-xs bg-white w-20 text-center rounded text-black"
                                                            sideOffset={5}
                                                        >
                                                            <p className="capitalize ">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="about"
                            className="w-full text-center xl:text-left"
                        >
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className="text-white/60">
                                                    {item.fieldName}
                                                </span>
                                                <span className="text-red-500">
                                                    -
                                                </span>
                                                <span className="text-xl">
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;

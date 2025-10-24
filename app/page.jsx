import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Social from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-center-safe xl:pt-8 xl:pb-24">
                    {/* Text & Socials */}
                    <div className="w-full xl:w-1/2 text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br />{" "}
                            <span className="text-red-500">Tejasvi Raj Singh</span>
                        </h1>
                        <p className="max-w-[500px] text-white/80 mx-auto xl:mx-0">
                            I excel at crafting elegant digital experience and I
                            am proficient in various programming language and
                            technologies.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center xl:items-start gap-8 mt-6">
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2 rounded-3xl"
                            >
                                  <a href="/CV.pdf" download className="flex items-center gap-2">
                                <span>Download CV</span>
                                <FiDownload className="text-xl" />
                                </a>
                            </Button>
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconsStyles="w-9 h-9 border border-red-500 rounded-full flex justify-center items-center text-red-500 hover:bg-red-500 hover:text-black hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>
            <Stats />    
        </section>
    );
}

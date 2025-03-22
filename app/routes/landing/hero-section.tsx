import { motion } from "framer-motion";
import logo from "../../assets/landing/mobile-hero.png";
import picture1 from "../../assets/landing/mobile-hero-lg-r.png";
import picture2 from "../../assets/landing/mobile-hero-lg-l.png";

import {useEffect, useState} from "react";
import {Button, Input} from "@heroui/react";

const HeroSection = () => {

    const textList = [
        `" Empowering You "`,
        "Your Success",
        "Simplify Your ",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [textList.length]);


    return (
        <section className={"h-fit w-full bg-bg flex justify-center items-center md:pt-5 lg:pt-8"}>
            <div className="p-6 flex-col bg-[#fcfcfc] flex md:flex-row md:w-[45rem] md:h-[25rem] md:shadow-md md:rounded-2xl md:gap-8 lg:w-[80rem] lg:h-[35rem]">
                <img src={logo} alt="hero-image" className="object-contain mb-12 md:hidden"/>
                <img src={picture1} alt="hero-image" className="object-contain hidden md:block rounded-3xl"/>

                <div className="flex flex-col gap-4 h-fit">
                    <p className="font-noto font-semibold text-4xl md:text-4xl lg:text-6xl">
                        Empowering You to Streamline Your Business Journey
                    </p>

                    <p className="text-gray-600 font-noto font-light text-sm md:text-base lg:text-lg">
                        We are a team of passionate and dedicated professionals who are dedicated to helping you stay legally compliant.
                    </p>

                    {/* Animated Text Box */}
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1 }}
                        className="mt-5 font-noto font-light text-sm bg-gray-100 rounded-2xl shadow-md px-6 py-2 w-fit"
                    >
                        {textList[currentIndex]}
                    </motion.div>


                    {/*<Button className={"border-3 mt-10 border-black rounded-full bg-white px-10 py-5 w-fit font-roboto font-light text-lg"}>*/}
                    {/*    Choose Your Service*/}
                    {/*</Button>*/}

                </div>
                <img src={picture2} alt="hero-image" className="object-contain hidden lg:block rounded-3xl"/>
            </div>
        </section>
    )
}

export default HeroSection;
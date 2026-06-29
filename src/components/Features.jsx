import React from "react";

import chooseUs from "../assets/chooseUs.png";

import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const features = [
    {
        icon: icon1,
        title: "High Experience",
        desc: "We have experienced experts who help businesses grow online.",
    },
    {
        icon: icon2,
        title: "Best Marketing",
        desc: "Our marketing strategy brings better reach and higher conversions.",
    },
    {
        icon: icon3,
        title: "Professional Team",
        desc: "Dedicated professionals committed to delivering quality results.",
    },
    {
        icon: icon4,
        title: "Creative Ideas",
        desc: "Innovative ideas to make your business stand out from competitors.",
    },
];

export default function Features() {
    return (
        <section
            id="choose"
            className="bg-white dark:bg-[#161E2E] py-20 transition-colors duration-300"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2
                    className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-12">
                    Why top Ecommerce and <br />
                    startup companies choose us
                </h2>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side */}
                    <div>

                        <div className="grid sm:grid-cols-2 gap-6">

                            {features.map((item, index) => (

                                <div
                                    key={index}
                                    className={`bg-white dark:bg-[#1D2638] border border-gray-200 dark:border-transparent
                                         rounded-2xl p-6 transition-all duration-300 shadow-md dark:shadow-none
                                          ${index === 0
                                            ? "shadow-[0_0_35px_rgba(34,197,94,0.45)]"
                                            : ""
                                        }`}>

                                    <div className="mb-5">
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>

                                    <h3 className="text-gray-900 dark:text-white text-xl font-semibold mb-3"
                                    >
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-7">
                                        {item.desc}
                                    </p>

                                </div>

                            ))}

                        </div>

                        <button
                            className="mt-10 bg-green-500 hover:bg-green-600 transition duration-300 px-8 py-4 rounded-md text-white font-medium">                            Let's Chat →

                        </button>

                    </div>

                    {/* Right Side */}

                    <div className="flex justify-center">

                        <img
                            src={chooseUs}
                            alt="Choose Us"
                            className="w-full max-w-md lg:max-w-lg object-contain"
                        />

                    </div>

                </div>

            </div>
        </section >
    );
}   
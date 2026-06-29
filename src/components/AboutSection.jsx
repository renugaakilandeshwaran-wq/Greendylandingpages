
import React from "react";
import whoPerson from "../assets/whoPerson.png";
import whoPerson1 from "../assets/whoPerson1.png";
export default function AboutSection({ theme }) {
    return (
        <section
            id="who-we-are"
            className="bg-white dark:bg-[#161E2E] py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <h3 className="text-green-500 font-semibold text-lg">
                            Who we are
                        </h3>

                        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                            Top #1 marketing <br />
                            agency in the world
                        </h1>

                        <p className="mt-6 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris imperdiet felis egestas augue. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Mauris imperdiet felis egestas augue.
                        </p>

                        <button className="mt-8 bg-black text-white hover:bg-gray-800 dark:bg-green-500 dark:hover:bg-green-600 dark:text-white px-8 py-4 rounded-md font-medium transition-all duration-300">
                            Get In Touch
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={theme === "dark" ? whoPerson1 : whoPerson}
                            alt="Who We Are"
                            className="
    w-[260px]
    sm:w-[320px]
    md:w-[400px]
    lg:w-[470px]
    xl:w-[520px]
    object-contain
  "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
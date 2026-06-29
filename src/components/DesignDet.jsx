
import React from "react";
import designDet from "../assets/designdet.png";
import tick from "../assets/tick.png";



const types = [
    {
        title: "Strategy and Research",
        desc: "Based on deep researching we create the best strategy due to your needs."
    },
    {
        title: "Development",
        desc: "We create the best solution relying on own platforms, the experience of our partners and modern tendency.."
    },
    {
        title: "Strategy & visual design",
        desc: "It is possible to see the future result with the prognosticate ground plan."
    },
    {
        title: "Conversion optimization",
        desc: "We teach your call-center team how to talk efficiently to your clients."

    }


];

export default function DesignDet() {


    return (




        <section
            id="what-we-do"
            className="bg-white dark:bg-[#161E2E] py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <p className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-10">
                        What We Do
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-base leading-7 max-w-2xl mx-auto">
                        We are flexible and cope with multiple tasks to make you a leader in the market.
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side - Image */}
                    <div className="flex justify-center">
                        <img
                            src={designDet}
                            alt="Good Design"
                            className="w-full max-w-md lg:max-w-lg object-contain"
                        />
                    </div>

                    {/* Right Side */}
                    <div>

                        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-10">
                            Good Design <br />
                            Increases Sales
                        </h2>

                        {/* Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            {types.map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-white dark:bg-[#1D2638] border border-gray-200 dark:border-transparent rounded-2xl p-12 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.15)] dark:shadow-none ${index === 1
                                        ? "shadow-[0_0_35px_rgba(34,197,94,0.45)]"
                                        : ""
                                        }`}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <img
                                            src={tick}
                                            alt="tick"
                                            className="w-10 h-10 object-contain"
                                        />

                                        <h3 className="text-gray-900 dark:text-white text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-7">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}


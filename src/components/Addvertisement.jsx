import React from 'react';
import advertise from "../assets/advertise.png";
import tick from "../assets/tick.png";

const adds = [
    {
        title: "Authentic storytelling",
        desc: "Tell your clients which were your first steps and failures in this business."
    },
    {
        title: "Optimized ads",
        desc: "Optimize every word on your page for increasing the sales and reach the top of Google searching."
    }, {
        title: "Community Engagement",
        desc: "Develop business with similar companies or partners."
    }, {
        title: "Fostering Growth",
        desc: "The accent on social media activities increases the number of your clients.  "
    },

]

export default function Addvertisement() {
    return (
        <section className="bg-white dark:bg-[#161E2E] py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bold -mt-20">


                <div className="grid lg:grid-cols-2 gap-16 items-center ">

                    {/* Left Side */}
                    <div>
                        <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-10">
                            Grow Your Business with Social Media
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6">

                            {adds.map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-white dark:bg-[#1D2638] border border-gray-200 dark:border-transparent rounded-2xl p-12 transition-all duration-300 ${index === 3
                                        ? "shadow-[0_0_35px_rgba(34,197,94,0.45)]"
                                        : "shadow-md dark:shadow-none"
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

                    {/* Right Side */}
                    <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
                        <img
                            src={advertise}
                            alt="Details"
                            className="w-full max-w-md lg:max-w-lg object-contain "
                        />
                    </div>

                </div>

            </div>
        </section >

    )
}

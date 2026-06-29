import React from "react";
import detailsImg from "../assets/details.png";
import tick from "../assets/tick.png";

const services = [
    {
        title: "Campaign Development",
        desc: "Create your unique advertisement easily without extra time or money."
    },
    {
        title: "Campaign Launch",
        desc: "Start your commerce with the social media announcement. Get more client without much effort."
    },
    {
        title: "Optimization",
        desc: "Save your money with the simple upgrades and enjoy your profit instantly."
    },
    {
        title: "Measurement",
        desc: "Discover the website activity with the analytics tools simply and unmistakably."
    }
];

export default function Details() {
    return (
        <section className="bg-white dark:bg-[#161E2E] py-20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-bold -mt-20">


                <div className="grid lg:grid-cols-2 gap-16 items-center ">

                    {/* Left Side */}
                    <div>

                        <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-sans leading-tight mb-10">
                            Get More Customers with Google Ads
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-6">

                            {services.map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-white dark:bg-[#1D2638] border border-gray-200 dark:border-transparent rounded-2xl p-12 transition-all duration-300 ${index === 2
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

                                        <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-600 dark: text-gray-400 text-sm leading-7">
                                        {item.desc}
                                    </p>

                                </div>
                            ))}

                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
                        <img
                            src={detailsImg}
                            alt="Details"
                            className="w-full max-w-md lg:max-w-lg object-contain "
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
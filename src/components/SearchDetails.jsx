import React from 'react'
import google from "../assets/google.png"
import tick from "../assets/tick.png";


const detailss = [
    {
        title: "SEO audit",
        desc: "Analyze your next steps and in which way it will have impact on the selling results."
    },
    {
        title: "On-page SEO",
        desc: "Optimize every word on your page for increasing the sales and reach the top of Google searching."
    },
    {

        title: "Targeted content",
        desc: "The targeting content helps you to push ahead less popular categories of goods."
    },
    {

        title: "Off-page SEO",
        desc: "This strategy helps you to increase the trust level to your online store."
    }
];





export default function SearchDetails() {
    return (

        <section className="bg-white dark:bg-[#161E2E] py-20 transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Side - Image */}
                    <div className="flex justify-center">
                        <img
                            src={google}
                            alt="Good Design"
                            className="w-full max-w-md lg:max-w-lg object-contain"
                        />
                    </div>

                    {/* Right Side */}
                    <div>

                        <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-10">
                            Show Up when People Search for What You Sell
                        </h2>

                        {/* Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            {detailss.map((item, index) => (
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

                                        <h3 className="text--gray-900 dark:text-white text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="text-gray-900 dark:text-gray-400 text-sm leading-7">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>



    )
}

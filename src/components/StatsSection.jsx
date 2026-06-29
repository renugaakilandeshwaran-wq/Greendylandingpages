import React from "react";
import arrow from "../assets/arrow.png";
export default function StatsSection() {
    const stats = [
        {
            number: "+534%",
            title: "People Reached",
        },
        {
            number: "+215%",
            title: "Client Boost",
        },
        {
            number: "+801%",
            title: "Company Expansion",
        },
        {
            number: "+379",
            title: "Website Launch",
        },
    ];

    return (
        <section className="bg-[#161E2E] px-4 sm:px-6 lg:px-20 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2 className="text-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-12 lg:mb-16">
                    The proofs is in the numbers
                </h2>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >

                            <div className="flex items-center gap-5">

                                <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
                                    {item.number}
                                </h3>

                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 " />
                            </div>





                            <p className="mt-3 text-gray-300 text-sm sm:text-base lg:text-lg">
                                {item.title}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
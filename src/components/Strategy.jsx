import React from "react";
import formalities from "../assets/formalities.png";

export default function Strategy() {
    return (
        <section className="bg-white dark:bg-[#161E2E] py-20 transition-colors duration-300">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Image */}
                    <div className="flex justify-center">
                        <img
                            src={formalities}
                            alt="Strategy"
                            className="w-full max-w-xl rounded-lg object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="max-w-md">
                        <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-10">

                            Our Proven Strategy for
                            <br />
                            Growing Your Sales
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-7">

                            We are carrying your business based on the adapted
                            business plan with the main market trends. Be always
                            relevant and competitive.
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}
import React from "react";

export default function Newsletter() {
    return (
        <section className="
bg-white
dark:bg-[#161E2E]
py-20
transition-colors
duration-300
">            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="
text-gray-900
dark:text-white
text-4xl
font-bold
mb-5
">                        Stay update
                    </h2>

                    <p className="
text-gray-600
dark:text-gray-300
text-lg
">                        Subscribe to our newsletter to receive our best daily, week and month offer.
                    </p>
                </div>

                {/* Subscribe Box */}
                <div className="bg-[#161E2E] rounded-2xl  shadow-[0_0_25px_rgba(34,197,94,0.35)]">

                    <div className="bg-white rounded-sm flex flex-col sm:flex-row items-center p-4 gap-4">

                        <input
                            type="email"
                            placeholder="email adress"
                            className="flex-1 w-full outline-none text-lg text-gray-700 placeholder:text-gray-400 px-4 py-4"
                        />

                        <button className="bg-green-500 hover:bg-green-600 transition text-white text-2xl font-medium px-10 py-4 rounded-lg w-full sm:w-auto">
                            Subscribe
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}
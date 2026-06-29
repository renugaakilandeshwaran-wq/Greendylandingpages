import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const blogs = [
    {
        image: img1,
        category: "Marketing",
        title: "Online marketing step by step",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
    },
    {
        image: img2,
        category: "Marketing",
        title: "Online marketing step by step",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
    },
    {
        image: img3,
        category: "Marketing",
        title: "Online marketing step by step",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing pellentesque proin vitae, massa pulvinar.",
    },
];

export default function Ecom() {
    return (
        <section
            id="ecom"
            className="bg-white dark:bg-[#161E2E] py-20 transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight mb-10">

                        Why you need multiple
                        <br />
                        marketing strategies
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-7">

                        Choose your best ecommerce store
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((item, index) => (

                        <div
                            key={index}
                            className={`
                             transition-all duration-300
                             bg-white dark:bg-[#161E2E]
                             ${index === 0, 1, 2
                                    ? "shadow-[0_0_25px_rgba(34,197,94,0.35)]"
                                    : "shadow-md dark:shadow-[0_0_25px_rgba(34,197,94,0.35)]"
                                }

 `}
                        >



                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-64 object-cover"
                            />

                            <div className="p-6">
                                <p className="
                                 text-green-500 
                                 dark:text-green-400 
                                 font-semibold 
                                 mb-4
                                 ">
                                    {item.category}
                                </p>


                                <h3 className="
                               text-gray-900
                                dark:text-white
                               text-2xl
                              font-semibold
                              leading-snug
                             mb-5
                            ">
                                    {item.title}
                                </h3>
                                <p className="
                                   text-gray-600
                                   dark:text-gray-400
                                 leading-8
                                 mb-8
                                 ">
                                    {item.desc}
                                </p>

                                <button className="bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-md text-white font-medium">
                                    Read More →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
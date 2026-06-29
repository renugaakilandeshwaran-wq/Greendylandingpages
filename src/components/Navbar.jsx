import React, { useState } from "react";
import designIcon from "../assets/design.png";

import digitalIcon from "../assets/digital.png";
import seoIcon from "../assets/seo.png";
import socialIcon from "../assets/social.png";
export default function Navbar({ theme, setTheme }) {
    const [showModel, setShowModel] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const services = [
        {

            title: "Design",
            desc: "Create & develop your brand",
            icon: designIcon,
        },
        {
            title: "Digital Advertising",
            desc: "We grow your online visibility",
            icon: digitalIcon,

        },
        {
            title: "SEO",
            desc: "We grow your website position",
            icon: seoIcon,

        },
        {
            title: "Social Media",
            desc: "We manage your social media",
            icon: socialIcon,

        },
    ];

    return (

        <nav className="sticky top-0 z-50 bg-white dark:bg-[#161E2E] transition-colors duration-300 shadow-sm dark:shadow-none">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between text-gray-900 dark:text-white">

                <div className="flex items-center">
                    <div className="bg-green-500 h-9 px- flex items-center pl-7 rounded-sm">
                        <span className="font-bold text-lg leading-none -ml-[2px] text-gray-900 dark:text-white">                            LOG
                        </span>
                    </div>

                    <span className="font-bold text-lg leading-none -ml-[2px] text-gray-900 dark:text-white">
                        O
                    </span>
                </div>


                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8 font-medium">

                    <li

                        onClick={() => document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" })}
                        className="cursor-pointer hover:text-green-500 transition">
                        Who we are
                    </li>
                    <li className="relative cursor-pointer">
                        <div className="flex items-center gap-2 text-gray-900 dark:text-white">

                            <span
                                className="cursor-pointer"
                                onClick={() =>
                                    document
                                        .getElementById("what-we-do")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >
                                What we do
                            </span>

                            <span
                                className="cursor-pointer"
                                onClick={() => setShowMenu(!showMenu)}
                            >
                                {showMenu ? "▲" : "▼"}
                            </span>

                        </div>



                        {showMenu && (
                            <div className="absolute top-12 left-[-120px] w-[400px] bg-white rounded-2xl shadow-2xl p-5">
                                <div className="space-y-3">
                                    {services.map((item, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-center gap-4 p-4 rounded-xl border border-transparent 
                                                hover:bg-green-100 hover:border-green-400 cursor-pointer transition-all duration-300"                                    >
                                            <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
                                                <img
                                                    src={item.icon}
                                                    alt={item.title}
                                                    className="w-5 h-5 object-contain"
                                                />
                                            </div>
                                            <div className="flex items-center justify-between w-full">
                                                <div>


                                                    <h3 className="font-semibold text-gray-900">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm text-gray-500">
                                                        {item.desc}
                                                    </p>
                                                </div>

                                                <span className="text-green-500 text-xl opacity-0
                                                    group-hover:opacity-100 transition duration-300">

                                                    →
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        )}
                    </li>

                    <li

                        className="cursor-pointer hover:text-green-500 transition"

                        className="cursor-pointer"
                        onClick={() =>
                            document
                                .getElementById("testimonials")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }

                    >
                        Reviews
                    </li>

                    <li className="cursor-pointer hover:text-green-500 transition"
                        className="cursor-pointer"
                        onClick={() =>
                            document
                                .getElementById("ecom")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Blog
                    </li>

                </ul>

                <div>

                    <button
                        onClick={() => setShowModel(true)}

                        className="hidden lg:block bg-green-500 px-6 py-3 rounded-md hover:bg-green-600 transition">
                        Get your free website review →
                    </button>




                </div>
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="lg:hidden text-3xl"

                >
                    {mobileMenu ? "" : "☰"}
                </button>


                <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className=" mr-3 text-2xl"
                >
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>



                {/* Mobile Menu */}
                {mobileMenu && (



                    <div className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-[#10C26E] lg:hidden px-6 py-8 z-50 overflow-y-auto">
                        <button
                            onClick={() => setMobileMenu(false)}
                            className="absolute top-5 right-5 text-white text-3xl font-bold"
                        >
                            ✕
                        </button>
                        <ul className="flex flex-col items-start gap-8">
                            <li

                                className="text-white text-3xl font-bold cursor-pointer"


                                onClick={() => document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" })}

                            >Who we are</li>

                            <li
                                className="text-white text-3xl font-bold cursor-pointer flex items-center gap-3"
                                onClick={() => {
                                    setShowMenu(!showMenu);

                                    document
                                        .getElementById("what-we-do")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                <span>What we do</span>

                                <span className="text-xl">
                                    {showMenu ? "▲" : "▼"}
                                </span>
                            </li>

                            {showMenu && (
                                <div className="w-full bg-white rounded-2xl p-5">
                                    {services.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-green-100"
                                        >

                                            <div className="w-10 h-10 rounded-md bg-green-100 flex items-center justify-center">
                                                <img
                                                    src={item.icon}
                                                    alt={item.title}
                                                    className="w-5 h-5 object-contain"
                                                />
                                            </div>


                                            <div>  <h3 className="font-semibold text-black">{item.title}</h3>


                                                <p className="text-sm text-gray-500">{item.desc}

                                                </p>
                                            </div>

                                            <span className="ml-auto text-green-500 text-xl">→</span>

                                        </div>

                                    ))}

                                </div>
                            )}

                            <li
                                className="text-white text-3xl font-bold cursor-pointer"

                                onClick={() =>
                                    document
                                        .getElementById("testimonials")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                            >Reviews</li>

                            <li
                                className="text-white text-3xl font-bold cursor-pointer"

                                onClick={() =>
                                    document
                                        .getElementById("ecom")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }

                            >Blog</li>

                            <button
                                onClick={() => setShowModel(true)}
                                className="mt-10 w-full bg-[#2ED573] text-white py-4 rounded-lg font-semibold"
                            >
                                Get your free website review  →
                            </button>

                        </ul>

                    </div>
                )}
            </div>
            {
                showModel && (
                    <div className="fixed inset-0 z-50 bg-[#DFF8EE]/80 backdrop-blur-sm flex items-center justify-center px-4">

                        {/* Modal */}
                        <div className="relative bg-white rounded-2xl w-full max-w-4xl p-8 md:p-12 shadow-2xl">


                            {/* Close Button */}
                            <button
                                onClick={() => setShowModel(false)}
                                className="absolute -top-6 -right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg text-2xl text-gray-700 z-50"
                            >
                                ✕
                            </button>
                            <h2 className="text-5xl font-bold text-gray-900">
                                Get Your Free Website Checkup
                            </h2>

                            <p className="mt-5 text-xl text-gray-600 max-w-2xl">
                                Discover main benefits and issues of your website and how to fix them.
                            </p>

                            <form className="mt-10">

                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        type="text"
                                        placeholder="Full Name*"
                                        className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500" />

                                    <input
                                        type="email"
                                        placeholder="Email Address*"
                                        className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500" />

                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500" />

                                    <input
                                        type="text"
                                        placeholder="Website Url"
                                        className="w-full border border-gray-300 rounded-xl p-4 text-black placeholder:text-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500" />

                                </div>

                                <textarea
                                    rows="6"
                                    placeholder="Message..."
                                    className="mt-6 w-full border rounded-xl p-4 text-black outline-none focus:border-green-500"
                                ></textarea>

                                <button
                                    className="mt-8 bg-green-500 text-white px-8 py-4 rounded-md hover:bg-green-600"
                                >
                                    Get My Free Checkup
                                </button>

                            </form>

                        </div>

                    </div>
                )
            }
        </nav >

    );
}
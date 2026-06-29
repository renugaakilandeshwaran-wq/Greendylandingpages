import React, { useState } from "react";
import fitt from "../assets/fitt.png"


import designIcon from "../assets/design.png";
import digitalIcon from "../assets/digital.png";
import seoIcon from "../assets/seo.png";
import socialIcon from "../assets/social.png";



const Footer = () => {


    const [showMenu, setShowMenu] = useState(false);

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
        <footer


            className="bg-[#141b2d] text-white  py-16">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                    {/* Logo + Description */}
                    <div>


                        <div className="flex items-center">
                            <div className="bg-green-500 h-9 px- flex items-center pl-7 rounded-sm">
                                <span className="text-white font-bold text-lg leading-none">
                                    LOG
                                </span>
                            </div>

                            <span className="text-white font-bold text-lg leading-none -ml-[2px]">
                                O
                            </span>
                        </div>


                        <p className="mt-4 text-gray-300 text-sm leading-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan,
                            pellentesque aenean sed vel non suspendisse.
                        </p>
                    </div>

                    {/* Menu */}
                    <div>
                        <h2 className="font-semibold mb-4">Menu</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li className="hover:text-green-400 cursor-pointer"

                                onClick={() => document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" })}


                            >Who we are</li>


                            <li className="relative">
                                <div
                                    onClick={() => setShowMenu(!showMenu)}
                                    className="flex items-center gap-2 cursor-pointer hover:text-green-400"

                                    onClick={() =>
                                        document
                                            .getElementById("what-we-do")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }

                                >
                                    What we do
                                    <span>{showMenu ? "▲" : "▼"}</span>
                                </div>

                                {showMenu && (
                                    <div className="mt-4 bg-white rounded-xl shadow-xl p-4 w-72">

                                        {services.map((item, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-100 cursor-pointer"
                                            >
                                                <img
                                                    src={item.icon}
                                                    alt={item.title}
                                                    className="w-8 h-8"
                                                />

                                                <div>
                                                    <h3 className="text-gray-900 font-semibold">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-sm text-gray-500">
                                                        {item.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                )}
                            </li>

                            <li
                                id="testimonials"
                                className="hover:text-green-400 cursor-pointer"


                                onClick={() =>
                                    document.getElementById("testimonials")?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }

                            >Reviews</li>
                            <li className="hover:text-green-400 cursor-pointer"
                                onClick={() =>
                                    document
                                        .getElementById("ecom")
                                        ?.scrollIntoView({
                                            behavior: "smooth",

                                        })
                                }
                            >Blog</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    < div >
                        <h2 className="font-semibold mb-4">Contact</h2>
                        <p className="text-green-400">+1 (875) 40 1027</p>
                        <p className="text-green-400 mt-2">Support@company.com</p>
                    </div>

                    {/* Social */}

                    <div className="flex gap-5 text-green-400 text-2xl">

                        <img
                            src={fitt}
                            alt="iconss"
                            className="w-32 h-auto object-contain"

                        />

                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-green-600 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-400">
                    <p>Copyright 2021 Greendy All Right Reserve</p>

                    <div className="flex gap-6 mt-3 md:mt-0">
                        <span className="hover:text-white cursor-pointer">Term of use</span>
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
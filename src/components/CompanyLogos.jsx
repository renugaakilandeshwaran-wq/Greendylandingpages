import React from "react";
import logoss from "../assets/logoss.png";
import logoss1 from "../assets/logoss1.png";

export default function CompanyLogos({ theme }) {
    return (
        <section className="bg-white dark:bg-[#161E2E] py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    className="
    rounded-2xl
    p-4
    dark:p-0
    shadow-[0_0_80px_rgba(34,197,94,0.35)]
    dark:shadow-none
    transition-all
    duration-300
  "
                >
                    <img
                        src={logoss}
                        alt="Company Logos"
                        className="w-full max-w-6xl object-contain"
                    />
                </div>


            </div>
        </section>
    );
}
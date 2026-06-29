import heroImage from "../assets/hero.png";

export default function Hero({ theme }) {


    return (
        <section className="bg-white dark:bg-[#161E2E] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Side */}
                    <div className="lg:w-1/2 text-gray-900 dark:text-white">
                        <h3 className="text-green-500 font-semibold">
                            Award winning company
                        </h3>

                        <h1 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                            Digital marketing agency and design. We grow your business online
                        </h1>

                        <p className="mt-6 text-sm text-gray-600 dark:text-gray-300 max-w-lg leading-7">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet felis egestas aug
                        </p>

                        <button
                            className="bg-green-500 text-white m-8 px-8  py-4 rounded-md hover:bg-green-600">
                            Start a project
                        </button>

                    </div>

                    {/* Right Side */}
                    <div className="lg:w-1/2 flex justify-center">
                        <img
                            src={heroImage}
                            alt="Hero"
                            className="w-full max-w-md lg:max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}


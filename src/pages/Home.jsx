

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompanyLogos from "../components/CompanyLogos";
import AboutSection from "../components/AboutSection";
import Features from "../components/Features";
import StatsSection from "../components/StatsSection";
import DesignDet from "../components/DesignDet";
import Details from "../components/Details";
import SearchDetails from "../components/SearchDetails";
import Addvertisement from "../components/Addvertisement";
import Footer from "../components/Footer";
import Strategy from "../components/Strategy";
import Ecom from "../components/Ecom";
import Testimonial from "../components/Testimonial";
import Newsletter from "../components/Newsletter";

export default function Home({ theme, setTheme }) {
    return (
        <>

            <Navbar theme={theme} setTheme={setTheme} />
            <Hero theme={theme} />
            <CompanyLogos theme={theme} />

            <AboutSection theme={theme} />
            <Features />
            <StatsSection />
            <DesignDet />
            <Details />
            <SearchDetails />
            <Addvertisement />
            <Strategy />
            <Ecom />
            <Testimonial />
            <Newsletter />
            <Footer />
        </>
    );
}

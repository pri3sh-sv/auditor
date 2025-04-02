import AppNavBar from "~/components/nav-bar";
import HeroSection from "~/routes/landing/hero-section";
import WorkStyle from "~/routes/landing/work-style";
import ServicesSection from "~/routes/landing/services";
import Features from "~/routes/landing/features";

const Landing = () => {
    return (
        <div className={"bg-bg w-full h-[100%]"}>
            <AppNavBar/>
            <HeroSection/>
            <WorkStyle/>
            <ServicesSection/>
            <Features/>
        </div>
    )
}

export default Landing;

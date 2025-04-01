import AppNavBar from "~/components/nav-bar";
import HeroSection from "~/routes/landing/hero-section";
import WorkStyle from "~/routes/landing/work-style";
import ServicesSection from "~/routes/landing/services";

const Landing = () => {
    return (
        <div className={"bg-bg w-full h-[100%]"}>
            <AppNavBar/>
            <HeroSection/>
            <WorkStyle/>
            <ServicesSection/>
        </div>
    )
}

export default Landing;

import AppNavBar from "~/components/nav-bar";
import HeroSection from "~/routes/landing/hero-section";
import WorkStyle from "~/routes/landing/work-style";

const Landing = () => {
    return (
        <div className={"bg-bg w-full h-[100%]"}>
            <AppNavBar/>
            <HeroSection/>
            <WorkStyle/>

        </div>
    )
}

export default Landing;

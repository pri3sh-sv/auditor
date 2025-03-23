import upload from "../../assets/landing/upload.jpg";
import progress from "../../assets/landing/progress.jpg";
import deliver from "../../assets/landing/deliver.jpg";

const steps = [
    { image: upload, title: "We Collect Documents", description: "We collect necessary documents from you to initiate the process." },
    { image: progress, title: "We Process", description: "Process the documents and send them to the respective parties." },
    { image: deliver, title: "We Deliver", description: "After successfully processing your documents, we will communicate the deliverables." }
];

const WorkStyle = () => {
    return (
        <section className="h-fit w-full bg-bg flex justify-center items-center">
            <div className="flex flex-col items-center gap-6 mt-5 md:mt-10 lg:mt-12 lg:w-[80rem]">
                <h2 className="font-noto font-semibold text-4xl md:text-4xl lg:text-6xl">How We Work?</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
                    {steps.map(({ image, title, description }, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-transparent m-4">
                            <img
                                src={image}
                                alt={title}
                                loading="lazy"
                                className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover mb-4 rounded-3xl transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                            />
                            <h3 className="text-lg font-noto font-semibold mb-2">{title}</h3>
                            <p className="text-gray-600 font-noto font-light w-64">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkStyle;

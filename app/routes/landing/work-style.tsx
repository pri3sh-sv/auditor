import upload from "../../assets/landing/upload.jpg";
import progress from "../../assets/landing/progress.jpg";
import deliver from "../../assets/landing/deliver.jpg";

const data = [
    {
        image: upload,
        title: "We Collect Documents",
        description: "We collect necessary documents from you to initiate the process."
    },
    {
        image: progress,
        title: "We Process",
        description: "Process the documents and send them to the respective parties."
    },
    {
        image: deliver,
        title: "We Deliver",
        description: "After successfully processing your documents, we will communicate the deliverables"
    }
]

const WorkStyle = () => {
    return (
        <section className={"h-fit w-full bg-bg flex justify-center items-center"}>
            <div className="flex flex-col gap-6 items-center justify-center mt-5 md:mt-10 lg:mt-12 lg:flex-row lg:w-[80rem] lg:justify-evenly">
                <p className="font-noto font-semibold text-4xl md:text-4xl lg:text-6xl">How We Work ?</p>
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-transparent m-4"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-48 h-48 object-cover mb-6 rounded-3xl lg:w-64 lg:h-64 lg:hover:scale-110 lg:hover:shadow-lg lg:hover:transition-all"
                        />
                        <h3 className="text-lg font-noto font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-600 font-noto font-light w-64">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkStyle;
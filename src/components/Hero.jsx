import Form from "./Form";

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between max-md:gap-10 items-center w-full mx-auto">
            {/* Left Content */}
            <div className="text-white md:max-w-6/12">
                <h1 className="text-4xl lg:text-6xl font-semibold lg:leading-20">
                    Power Your Home.<br />
                    Empower Your Future.<br />
                    Switch to Solar Today!
                </h1>
                <ul className="mt-20 space-y-2 text-base list-disc ml-5">
                    <li>Experience Lower Electricity Bills with Solar Power</li>
                    <li>Clean Energy Independence. Invest in a Greener Future</li>
                    <li>Transform Your Roof into a Revenue Stream. Monetize Surplus Solar Energy Through Grid Export</li>
                </ul>
            </div>

            {/* Right Content */}
            <Form />
        </div>

    );
};

export default Hero;
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
            {/* <div className="bg-white rounded-4xl shadow-lg p-6 md:p-8 w-full md:max-w-[500px] min-h-[400px] ">
                <h2 className="text-lg font-semibold mb-4">
                    Complete the steps to unlock your solar potential
                </h2>

                <div className="flex justify-between mb-4">
                    {[1, 2, 3, 4, 5].map((step) => (
                        <div key={step} className="text-sm flex flex-col items-center">
                            <span className={`w-6 h-6 flex items-center justify-center rounded-full border ${step === 1 ? "bg-green-500 text-white" : "border-gray-400"}`}>
                                {step}
                            </span>
                            <span className="text-xs text-gray-500 mt-1">{step === 5 ? "Last Page" : "Next"}</span>
                        </div>
                    ))}
                </div>

                <div className="mb-4">
                    <p className="text-gray-800 font-medium">Are you a home owner? *</p>
                    <label className="flex items-center space-x-2 mt-2">
                        <input type="radio" name="owner" className="accent-blue-600" />
                        <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 mt-1">
                        <input type="radio" name="owner" className="accent-blue-600" />
                        <span>No</span>
                    </label>
                </div>

                <button className="w-[250px]  bg-blue-600 text-white py-2 rounded-4xl font-semibold hover:bg-blue-700">
                    Next
                </button>
            </div> */}
            <Form />
        </div>

    );
};

export default Hero;
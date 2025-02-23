import { useState } from "react";

const Form = () => {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const totalSteps = 5;
    const [formData, setFormData] = useState({
        homeOwner: "",
        electricityBill: "",
        credit: "",
        name: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        contact: "",
        preferredTime: "",

    });

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            setSubmitted(true);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const isNextDisabled = () => {
        if (step === 1 && !formData.homeOwner) return true;
        if (step === 2 && !formData.electricityBill) return true;
        if (step === 3 && !formData.credit) return true;
        if (step === 4 && (!formData.name || !formData.street || !formData.city || !formData.state || !formData.zip)) return true;
        if (step === 5 && (!formData.contact || !formData.preferredTime)) return true;
        return false;
    };
    console.log(isNextDisabled());


    return (
        <div className="bg-white rounded-4xl shadow-lg p-6 md:p-8 w-full md:max-w-[500px] min-h-[400px] transition-all duration-500">
            {submitted ? (
                <div className="p-8 md:p-10 w-full md:max-w-[500px] min-h-[300px]">
                    <h2 className="text-2xl  text-gray-900 text-center">Thank you for your response</h2>
                    <hr className=" border-t-2 border-gray-400 my-4" />
                    <p className="text-gray-800 font-medium">
                        You’re about to save estimated <br />
                        <span className="font-bold">18,000 USD.</span>
                    </p>
                    <p className="text-gray-700 mt-2">
                        We’ll contact you soon with <br /> proper credentials.
                    </p>
                    <div className="text-center">
                        <button
                            onClick={() => window.location.href = "/"}
                            className="mt-6 px-6 py-2 bg-[#033E8A] text-white text-sm rounded-full hover:bg-[#022b65] transition-all duration-300">
                            Back To Home
                        </button>
                    </div>

                </div>
            ) : (
                <>
                    <h2 className="text-lg font-semibold mb-4">
                        Complete the steps to unlock your solar potential
                    </h2>

                    {/* Progress Bar */}
                    <div className="flex items-center justify-between mb-4">
                        {[1, 2, 3, 4, 5].map((num, index) => (
                            <div key={num} className="flex items-center gap-2  h-fit">
                                {/* Step Circle */}
                                <div className="text-sm flex flex-col items-center">
                                    <span
                                        className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 font-semibold
                                    ${num < step ? " text-blue-500 border-blue-500"  // Completed steps
                                                : num === step ? "text-green-500 border-green-500" // Current step
                                                    : "border-gray-400"  // Incomplete steps
                                            }`}>
                                        {num}
                                    </span>
                                    <span className={`text-xs mt-1
                                 ${num < step ? " text-blue-500 "  // Completed steps
                                            : num === step ? "text-green-500 " // Current step
                                                : "text-gray-400"  // Incomplete steps
                                        }`}>
                                        {num === 5 ? "Last Page" : "Next"}
                                    </span>
                                </div>

                                {/* Connector Line*/}
                                {index < 4 && <div className="w-8 h-[2px] bg-gray-400 mb-[25%]"></div>}
                            </div>
                        ))}
                    </div>

                    {/* Step Content */}
                    <div className="mb-4">
                        {step === 1 && (
                            <>
                                <p className="text-gray-800 font-bold">Are you a homeowner? *</p>
                                <label className="flex items-center space-x-2 mt-2">
                                    <input type="radio" name="homeOwner" value="yes" checked={formData.homeOwner === "yes"} onChange={handleChange} className="accent-blue-600" />
                                    <span>Yes</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-1">
                                    <input type="radio" name="homeOwner" value="no" checked={formData.homeOwner === "no"} onChange={handleChange} className="accent-blue-600" />
                                    <span>No</span>
                                </label>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <p className="text-gray-800 font-bold">Is your monthly electricity bill over $99? *</p>
                                <label className="flex items-center space-x-2 mt-2">
                                    <input type="radio" name="electricityBill" value="yes" checked={formData.electricityBill === "yes"} onChange={handleChange} className="accent-blue-600" />
                                    <span>Yes</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-1">
                                    <input type="radio" name="electricityBill" value="no" checked={formData.electricityBill === "no"} onChange={handleChange} className="accent-blue-600" />
                                    <span>No</span>
                                </label>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <p className="text-gray-800 font-bold">Your estimated credit score? *</p>
                                <label className="flex items-center space-x-2 mt-2">
                                    <input type="radio" name="credit" value="More Than 740 ( Excellent )" checked={formData.credit === "More Than 740 ( Excellent )"} onChange={handleChange} className="accent-blue-600" />
                                    <span>More Than 740 ( Excellent )</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-1">
                                    <input type="radio" name="credit" value="680 - 739 ( Good )" checked={formData.credit === "680 - 739 ( Good )"} onChange={handleChange} className="accent-blue-600" />
                                    <span>680 - 739 ( Good )</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-1">
                                    <input type="radio" name="credit" value="Less than 569 ( Poor )" checked={formData.credit === "Less than 569 ( Poor )"} onChange={handleChange} className="accent-blue-600" />
                                    <span>Less than 569 ( Poor )</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-1">
                                    <input type="radio" name="credit" value="I'm not sure" checked={formData.credit === "I'm not sure"} onChange={handleChange} className="accent-blue-600" />
                                    <span>I&apos;m not sure</span>
                                </label>
                            </>
                        )}

                        {step === 4 && (
                            <>
                                <p className="text-gray-800 font-bold">Your Name *</p>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full border py-2 pl-4 rounded-full mt-2" />
                                <p className="text-gray-800 font-bold mt-2">Address *</p>
                                <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Street Address" className="w-full border py-2 pl-4 rounded-full mt-2" />
                                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="w-full border py-2 pl-4 rounded-full mt-2" />
                                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="w-full border py-2 pl-4 rounded-full mt-2" />
                                <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code" className="w-full border py-2 pl-4 rounded-full mt-2" />
                            </>
                        )}

                        {step === 5 && (
                            <>
                                <p className="text-gray-800 text-xl font-bold">One last thing...</p>
                                <p className="text-gray-800 font-bold mt-4">Contact *</p>
                                <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Phone number" className="w-full border px-5 py-2 rounded-full mt-2" />
                                <p className="text-gray-800 font-bold mt-2">Preferred time of calling? *</p>
                                <label className="flex items-center space-x-2 mt-2">
                                    <input type="radio" name="preferredTime" value="9AM-11AM" checked={formData.preferredTime === "9AM-11AM"} onChange={handleChange} className="accent-blue-600" />
                                    <span>9 AM - 11 AM</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-1">
                                    <input type="radio" name="preferredTime" value="6PM-8PM" checked={formData.preferredTime === "6PM-8PM"} onChange={handleChange} className="accent-blue-600" />
                                    <span>6 PM - 8 PM</span>
                                </label>
                                <label className="flex items-center space-x-2 mt-1">
                                    <input type="radio" name="preferredTime" value="I’m available to pick anytime" checked={formData.preferredTime === "I’m available to pick anytime"} onChange={handleChange} className="accent-blue-600" />
                                    <span>I’m available to pick anytime</span>
                                </label>
                            </>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center gap-2.5 mt-4">
                        {step !== 1 && (
                            <button onClick={handleBack} className="px-10 py-2 rounded-full   border border-gray-500 text-gray-700 hover:bg-gray-200 transition-all duration-300">
                                Back
                            </button>
                        )}
                        <button
                            onClick={handleNext}
                            disabled={isNextDisabled()}
                            className={`w-[200px] bg-[#033E8A] text-white border border-[#033E8A]  py-2 rounded-4xl font-semibold transition-all duration-300 hover:bg-transparent hover:text-[#033E8A] ${!isNextDisabled() && "hover:cursor-pointer"}`}>
                            {step === totalSteps ? "Submit" : "Next"}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Form;

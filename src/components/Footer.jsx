
const Footer = () => {
    return (
        <div className="text-white flex justify-between flex-col gap-3 sm:flex-row">
            <h1>&copy;2024 Homeowners Benefit. All rights reserved</h1>
            <div className="flex gap-2">
                <h1>Terms</h1>
                <span className="text-gray-500">|</span>
                <h1>Privacy Policy</h1>
                <span className="text-gray-500">|</span>
                <h1>License Information</h1>
             </div>
        </div>
    );
};

export default Footer;
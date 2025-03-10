import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/burak-kaya-785b14199/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-500 transition-all duration-200" />
                </a>
                <a href="https://github.com/burakalemun" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-500 transition-all duration-200" />
                </a>
                <a href="https://www.instagram.com/burakayaa.11/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-pink-500 transition-all duration-200" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <FaTwitterSquare className="hover:text-blue-400 transition-all duration-200" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

import BKabout from "../assets/BK-about.jpg";
import { motion } from "framer-motion";
import { ABOUT_TEXT } from "../constants/index.js";

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            src={BKabout}
                            className="rounded-[5px] max-w-[400px] h-auto"
                            alt="Profile"
                        />
                    </div>
                </div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-6">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;

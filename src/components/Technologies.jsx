import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandSwift } from 'react-icons/tb';
import { SiGit } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';
import { motion } from "framer-motion";

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">
                Technologies
            </motion.h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                    { icon: <RiReactjsLine className="text-7xl text-cyan-400"/>, duration: 2.5 },
                    { icon: <TbBrandSwift className="text-7xl text-orange-600"/>, duration: 3 },
                    { icon: <SiGit className="text-7xl text-black"/>, duration: 4 },
                    { icon: <FaHtml5 className="text-7xl text-orange-500"/>, duration: 3 },
                    { icon: <FaJava className="text-7xl text-red-600"/>, duration: 5 },
                    { icon: <SiFirebase className="text-7xl text-yellow-600"/>, duration: 4 },
                    { icon: <BiLogoPostgresql className="text-7xl text-sky-700"/>, duration: 6 }
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ y: -10 }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: item.duration,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="rounded-2xl border-4 border-neutral-800 p-4"
                    >
                        {item.icon}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Technologies;

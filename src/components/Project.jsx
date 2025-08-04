import React, { useState } from "react";
import { PROJECTS } from "../constants/index.js";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Project = () => {
    const projectsPerPage = 4;
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(PROJECTS.length / projectsPerPage);

    const paginatedProjects = PROJECTS.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projeler
            </motion.h2>

            <div>
                {paginatedProjects.map((project, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img
                                src={project.image}
                                width={175}
                                height={175}
                                alt={project.title}
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h6 className="mb-2 font-semibold flex items-center justify-between">
                                {project.title}
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 text-sm bg-neutral-800 text-white px-3 py-1 rounded hover:bg-neutral-700 min-w-[120px]"
                                    >
                                        {project.link.includes("github.com") ? (
                                            <>
                                                <FaGithub className="text-xl" />
                                                GitHub
                                            </>
                                        ) : project.link.includes("instagram.com") ? (
                                            <>
                                                <FaInstagram className="text-xl" />
                                                Instagram
                                            </>
                                        ) : (
                                            <>
                                                <FaLink className="text-xl" />
                                                Ziyaret Et
                                            </>
                                        )}
                                    </a>
                                )}
                            </h6>
                            <p className="mb-4 text-neutral-400">{project.description}</p>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-3 py-1 text-sm font-medium text-purple-900">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4 my-10">
                <button
                    disabled={currentPage === 0}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-4 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50"
                >
                    Önceki
                </button>
                <button
                    disabled={currentPage === totalPages - 1}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-4 py-2 rounded-md bg-neutral-800 hover:bg-neutral-700 disabled:opacity-50"
                >
                    Sonraki
                </button>
            </div>
        </div>
    );
};

export default Project;

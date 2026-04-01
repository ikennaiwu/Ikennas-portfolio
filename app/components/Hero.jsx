"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
return (
    <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center py-32"
    >
        <Image
            src="/pics.jpeg"
            alt="Profile"
            width={180}
            height={180}
            className="rounded-lg mx-auto mb-8"
        />

        <h1 className="text-4xl font-bold tracking-tight">Iwu Ikenna Pius</h1>
        <p className="text-xl font-medium mt-3 text-slate-500 dark:text-slate-400">
            Full Stack Software Engineer
        </p>

        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600 dark:text-gray-400">
            Building scalable, production-ready web applications with modern
            frontend, backend, and DevOps tools.
        </p>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
        >
            <motion.a 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#projects" 
                className="px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                View Projects
            </motion.a>
            <motion.a 
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                href="/Ikenna_iwu-fullstack-CV.pdf" 
                target="_blank" 
                className="px-10 py-5 border-2 border-gray-900 dark:border-white/20 text-gray-900 dark:text-white rounded-lg font-bold text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
            >
                View Resume
            </motion.a>
        </motion.div>
    </motion.section>
);
}
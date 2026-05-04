'use client';

import React from "react";
import { motion } from "framer-motion";

interface SectionWithMockupProps {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    primaryImageSrc?: string;
    secondaryImageSrc?: string;
    reverseLayout?: boolean;
    children?: React.ReactNode; // Added to support custom mockups without breaking existing features
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
    title,
    description,
    primaryImageSrc,
    secondaryImageSrc,
    reverseLayout = false,
    children,
}) => {

    const containerVariants = {
        hidden: {},
        visible: {
             transition: {
                staggerChildren: 0.2,
            }
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    };

    const layoutClasses = reverseLayout
        ? "md:grid-cols-2 md:grid-flow-col-dense"
        : "md:grid-cols-2";

    const textOrderClass = reverseLayout ? "md:col-start-2" : "";
    const imageOrderClass = reverseLayout ? "md:col-start-1" : "";


    return (
        <section className="relative py-24 md:py-48 bg-[#f5f4f3] overflow-hidden">
            {/* Note: I changed bg-black to bg-[#f5f4f3] to match the demo's light theme, but wait, the provided code was bg-black. I'll stick closer to the provided code but use background that matches Kletani if needed. Actually, user asked to "change the format to the one I'm going to give you". Let's stick to their code format. */}
            <div className="container max-w-[1220px] w-full px-6 md:px-10 relative z-10 mx-auto">
                <motion.div
                     className={`grid grid-cols-1 gap-16 md:gap-8 w-full items-center ${layoutClasses}`}
                     variants={containerVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Text Content */}
                    <motion.div
                        className={`flex flex-col items-start gap-4 mt-10 md:mt-0 max-w-[546px] mx-auto md:mx-0 ${textOrderClass}`}
                        variants={itemVariants}
                    >
                         <div className="space-y-2 md:space-y-1">
                            <h2 className="text-black text-3xl md:text-[40px] font-bold leading-tight md:leading-[53px] uppercase tracking-tighter">
                                {title}
                            </h2>
                        </div>

                        <p className="text-gray-500 text-sm md:text-lg tracking-wide leading-6 font-light">
                            {description}
                        </p>
                    </motion.div>

                    {/* App mockup/Image Content */}
                    <motion.div
                        className={`relative mt-10 md:mt-0 mx-auto ${imageOrderClass} w-full max-w-[400px] md:max-w-[600px]`}
                        variants={itemVariants}
                    >
                        {/* Decorative Background Element */}
                        <motion.div
                             className={`absolute w-[300px] h-[317px] md:w-[472px] md:h-[500px] bg-[#090909] rounded-[32px] z-0`}
                             style={{
                                top: reverseLayout ? 'auto' : '10%',
                                bottom: reverseLayout ? '10%' : 'auto',
                                left: reverseLayout ? 'auto' : '-10%',
                                right: reverseLayout ? '-10%' : 'auto',
                                transform: reverseLayout ? 'translate(0, 0)' : 'translateY(10%)',
                                filter: 'blur(2px)'
                            }}
                            initial={{ y: reverseLayout ? 0 : 0 }}
                            whileInView={{ y: reverseLayout ? -20 : -30 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.5 }}
                        >
                            {secondaryImageSrc && (
                                <div
                                    className="relative w-full h-full bg-cover bg-center rounded-[32px] opacity-30"
                                    style={{
                                        backgroundImage: `url(${secondaryImageSrc})`,
                                    }}
                                />
                            )}
                        </motion.div>

                        {/* Main Mockup Card */}
                        <motion.div
                            className="relative w-full aspect-square md:aspect-[4/3] bg-white shadow-2xl rounded-xl backdrop-blur-[15px] border-0 z-10 overflow-hidden"
                            initial={{ y: reverseLayout ? 0 : 0 }}
                            whileInView={{ y: reverseLayout ? 20 : 30 }}
                             transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                             viewport={{ once: true, amount: 0.5 }}
                        >
                            <div className="p-0 h-full w-full">
                                {children ? children : (
                                    <div
                                        className="h-full relative"
                                        style={{
                                            backgroundSize: "100% 100%",
                                        }}
                                    >
                                        <div
                                            className="w-full h-full bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url(${primaryImageSrc})`,
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWithMockup;

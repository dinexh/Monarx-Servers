"use client"

import { Button } from "@/components/ui/button"
import { Shield, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
    return (
        <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 px-6 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 grid-background mask-radial -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-xs font-medium text-blue-400 mb-8 backdrop-blur-sm"
                    >
                        <Shield className="h-3.5 w-3.5" />
                        <span>Autonomous Server Defense</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white mb-6"
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Monix</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light mb-10"
                    >
                        Real-time network threat detection, monitoring & response.
                        Identify port scans, SYN floods, and suspicious connections instantly.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                    >
                        <Link href="https://github.com/dinexh/monix" target="_blank" className="w-full sm:w-auto">
                            <Button size="lg" className="bg-white text-black hover:bg-white/90 h-12 px-8 text-base font-medium rounded-full w-full">
                                <Github className="mr-2 h-5 w-5" />
                                View on GitHub
                            </Button>
                        </Link>
                        <Link href="/docs" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-12 px-8 text-base font-medium rounded-full w-full">
                                Read Documentation
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative max-w-5xl mx-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 bg-black">
                        <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay" />
                        <Image
                            src="/dashboard.jpeg"
                            alt="Monix Dashboard"
                            width={1200}
                            height={675}
                            priority
                            className="w-full h-auto opacity-90"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

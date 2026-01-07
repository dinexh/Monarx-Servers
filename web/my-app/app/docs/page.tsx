"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Book } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Footer } from "@/components/layout/Footer"
import { Section, FeatureBlock, CommandRow } from "@/components/sections/docs/DocsComponents"

export default function DocsPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <div className="container mx-auto max-w-5xl px-6 py-12">
                <Link href="/">
                    <Button variant="ghost" className="mb-8 text-white/50 hover:text-white pl-0 hover:bg-transparent">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Content */}
                    <main className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-12 border-b border-white/10 pb-12"
                        >
                            <div className="flex items-center gap-2 text-blue-400 mb-4 font-mono text-sm">
                                <Book className="h-4 w-4" />
                                <span>Documentation</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Monix</h1>
                            <p className="text-xl text-white/60 leading-relaxed font-light">
                                Comprehensive guide to the autonomous server defense agent. Installation, commands, and security features.
                            </p>
                        </motion.div>

                        <div className="space-y-12 prose prose-invert max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-white/70 prose-p:leading-relaxed prose-li:text-white/70">

                            <Section title="Overview">
                                <p>
                                    Monix is a lightweight, real-time network monitoring and threat detection system designed for Linux servers.
                                    It hooks directly into kernel interfaces (<code>/proc/net/tcp</code>) or system APIs to track every active connection,
                                    identify malicious patterns, and provide instant visibility into your infrastructure&apos;s network activity.
                                </p>
                            </Section>

                            <Section title="Core Capabilities">
                                <div className="grid md:grid-cols-2 gap-6 mt-6">
                                    <FeatureBlock title="Real-Time Network Monitoring">
                                        Monitor all active TCP connections (IPv4/IPv6) with 1-second update intervals. Tracks states like ESTABLISHED, LISTEN, TIME_WAIT, and SYN_RECV.
                                    </FeatureBlock>
                                    <FeatureBlock title="Process Intelligence">
                                        Associates every network connection with its system process (PID) and executable name (e.g., nginx, sshd, node).
                                    </FeatureBlock>
                                    <FeatureBlock title="Geographic Intelligence">
                                        Automatic GeoIP lookup determines city, country, and ISP for all remote IP addresses. Includes reverse DNS resolution.
                                    </FeatureBlock>
                                    <FeatureBlock title="Threat Detection Engine">
                                        Detects SYN floods, port scanning attempts, and connection exhaustion attacks in real-time based on configurable thresholds.
                                    </FeatureBlock>
                                </div>
                            </Section>

                            <Section title="Installation">
                                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-6 font-mono text-sm overflow-x-auto">
                                    <div className="flex items-center gap-2 mb-4 text-white/40 border-b border-white/5 pb-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                        <span className="ml-auto">bash</span>
                                    </div>
                                    <div className="space-y-2">
                                        <p><span className="text-white/50"># Clone the repository</span></p>
                                        <p className="text-blue-400">git clone https://github.com/dinexh/monix.git</p>
                                        <p className="text-blue-400">cd monix</p>
                                        <br />
                                        <p><span className="text-white/50"># Install dependencies (requires root for some features)</span></p>
                                        <p className="text-blue-400">pip install -e .</p>
                                        <br />
                                        <p><span className="text-white/50"># Run the monitor</span></p>
                                        <p className="text-blue-400">monix --monitor</p>
                                    </div>
                                </div>
                            </Section>

                            <Section title="Command Line Interface">
                                <p className="mb-6">
                                    Monix is controlled entirely via the CLI. Below are the primary commands available.
                                </p>
                                <div className="space-y-4">
                                    <CommandRow
                                        cmd="--monitor / -m"
                                        desc="Quick system snapshot. Shows connection stats, top processes, and threat summary."
                                    />
                                    <CommandRow
                                        cmd="--watch / -w"
                                        desc="Launches the interactive live dashboard. Auto-refreshes every 3 seconds."
                                    />
                                    <CommandRow
                                        cmd="--scan"
                                        desc="Runs a security analysis. Use --deep for comprehensive port and config checks."
                                    />
                                    <CommandRow
                                        cmd="--alerts / -a"
                                        desc="Lists recent security alerts (SYN floods, port scans) with timestamps."
                                    />
                                    <CommandRow
                                        cmd="--status / -s"
                                        desc="One-line output for health checks. Returns SECURE or ALERT status."
                                    />
                                </div>
                            </Section>

                            <Section title="Security & Threat Detection">
                                <p>The engine automatically detects the following attack vectors:</p>
                                <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-blue-500">
                                    <li><strong>SYN Flood:</strong> 50+ half-open connections (SYN_RECV) from a single IP.</li>
                                    <li><strong>Port Scanning:</strong> Probing 5+ different ports within a 10-second window.</li>
                                    <li><strong>High Connection Count:</strong> 30+ established connections from a single IP (potential botnet).</li>
                                    <li><strong>Suspicious Ports:</strong> outbound connections to known backdoor ports (4444, 5555, etc).</li>
                                </ul>
                            </Section>
                        </div>
                    </main>

                    {/* Sidebar Navigation (Simple) */}
                    <aside className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 space-y-8">
                            <div>
                                <h4 className="font-semibold text-white mb-4">On this page</h4>
                                <ul className="space-y-3 text-sm border-l border-white/10 pl-4">
                                    <li><a href="#overview" className="text-white/60 hover:text-white transition-colors block">Overview</a></li>
                                    <li><a href="#core-capabilities" className="text-white/60 hover:text-white transition-colors block">Capabilities</a></li>
                                    <li><a href="#installation" className="text-white/60 hover:text-white transition-colors block">Installation</a></li>
                                    <li><a href="#command-line-interface" className="text-white/60 hover:text-white transition-colors block">CLI Commands</a></li>
                                    <li><a href="#security-threat-detection" className="text-white/60 hover:text-white transition-colors block">Threat Detection</a></li>
                                </ul>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                                <h4 className="font-semibold text-white mb-2">Need Help?</h4>
                                <p className="text-xs text-white/50 mb-4">
                                    Check out the GitHub repository for issues and contribution guidelines.
                                </p>
                                <Link href="https://github.com/dinexh/monix" target="_blank">
                                    <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5">
                                        GitHub Repo
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export function CLIPreview() {
    return (
        <section className="py-24 px-6 bg-white/[0.02]">
            <div className="container mx-auto max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Command Line <span className="text-blue-500">Power</span>
                        </h2>
                        <p className="text-lg text-white/60 leading-relaxed">
                            Monix is precise, fast, and scriptable. Designed for DevOps engineers and security analysts who live in the terminal.
                        </p>

                        <div className="space-y-4">
                            <CommandItem cmd="monix --monitor" desc="Quick system overview and threat summary" />
                            <CommandItem cmd="monix --watch" desc="Launch live interactive dashboard" />
                            <CommandItem cmd="monix --scan --deep" desc="Run comprehensive security vulnerability checks" />
                            <CommandItem cmd="monix --alerts" desc="View recent security alerts and blocks" />
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000" />
                        <div className="relative bg-black rounded-lg border border-white/10 overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                </div>
                                <div className="text-xs text-white/30 ml-2 font-mono">user@server: ~</div>
                            </div>
                            <div className="p-6 font-mono text-sm leading-6">
                                <div className="mb-4">
                                    <span className="text-green-400 font-bold">➜</span> <span className="text-blue-400">~</span> <span className="text-white">monix --scan --deep</span>
                                </div>
                                <div className="text-white/80 space-y-1">
                                    <p className="text-blue-400 font-bold">Monix Security Scan v1.0.0</p>
                                    <p className="text-white/40">----------------------------------------</p>
                                    <div className="flex justify-between gap-2"><span>[+] Checking SSH Configuration...</span> <span className="text-green-400">SAFE</span></div>
                                    <div className="flex justify-between gap-2"><span>[+] Scanning Critical Ports...</span> <span className="text-green-400">SAFE</span></div>
                                    <div className="flex justify-between gap-2"><span>[!] Checking for SYN Floods...</span> <span className="text-yellow-400">WARNING</span></div>
                                    <p className="pl-4 text-white/50 text-xs">- Detected abnormally high SYN_RECV count (45)</p>
                                    <div className="flex justify-between gap-2"><span>[+] Analyzing Outbound Traffic...</span> <span className="text-green-400">OK</span></div>
                                    <p className="text-white/40">----------------------------------------</p>
                                    <p className="mt-2 text-white/80">
                                        Scan Complete: <span className="text-red-400">1 Warning found</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function CommandItem({ cmd, desc }: { cmd: string, desc: string }) {
    return (
        <div className="group pl-4 border-l-2 border-white/10 hover:border-blue-500 transition-colors">
            <div className="font-mono text-sm text-blue-400 mb-1">{cmd}</div>
            <div className="text-sm text-white/50">{desc}</div>
        </div>
    )
}

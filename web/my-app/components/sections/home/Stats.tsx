export function Stats() {
    return (
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
            <div className="container mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {[
                        { label: "Update Interval", value: "1s", color: "text-blue-400" },
                        { label: "Capabilities", value: "100+", color: "text-purple-400" },
                        { label: "Kernel Access", value: "eBPF", color: "text-green-400" },
                        { label: "Footprint", value: "<15MB", color: "text-red-400" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
                            <div className="text-sm text-white/40 font-medium uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

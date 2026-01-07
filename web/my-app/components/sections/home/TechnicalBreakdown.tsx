import { Network, CheckCircle2, AlertTriangle, Server } from "lucide-react"

export function TechnicalBreakdown() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Technical Breakdown</h2>
                    <p className="text-white/50">Details for the details-obsessed.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm">
                    <div className="space-y-4 text-center">
                        <h3 className="text-lg font-semibold text-white flex items-center justify-center gap-2">
                            <Network className="w-4 h-4 text-blue-400" /> Connection Intelligence
                        </h3>
                        <ul className="space-y-2 text-white/60 w-fit mx-auto text-left">
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500/50 shrink-0" /> TCP State Analysis</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500/50 shrink-0" /> IPv4 & IPv6 Support</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500/50 shrink-0" /> /proc/net/tcp direct parsing</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500/50 shrink-0" /> Reverse DNS Resolution</li>
                        </ul>
                    </div>
                    <div className="space-y-4 text-center">
                        <h3 className="text-lg font-semibold text-white flex items-center justify-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-yellow-400" /> Threat Engine
                        </h3>
                        <ul className="space-y-2 text-white/60 w-fit mx-auto text-left">
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-500/50 shrink-0" /> Half-open connection detection</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-500/50 shrink-0" /> Rapid port scan identification</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-500/50 shrink-0" /> Connection exhaustion alerts</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-yellow-500/50 shrink-0" /> Botnet activity pattern matching</li>
                        </ul>
                    </div>
                    <div className="space-y-4 text-center">
                        <h3 className="text-lg font-semibold text-white flex items-center justify-center gap-2">
                            <Server className="w-4 h-4 text-purple-400" /> System Integration
                        </h3>
                        <ul className="space-y-2 text-white/60 w-fit mx-auto text-left">
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500/50 shrink-0" /> Process ID (PID) mapping</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500/50 shrink-0" /> Executable name resolution</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500/50 shrink-0" /> Cross-platform (Linux/macOS)</li>
                            <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500/50 shrink-0" /> Docker container support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Shield, Cpu, Globe, AlertTriangle, Terminal, LucideIcon } from "lucide-react"

export function Features() {
    return (
        <section className="py-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Capabilities</h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        Everything you need for enterprise-grade server defense, right in your terminal.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Search}
                        title="Real-Time Monitoring"
                        desc="Monitor all active TCP connections, track states (ESTABLISHED, LISTEN), and view live statistics with 1-second updates."
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Threat Detection"
                        desc="Identify SYN floods, port scanning, and high connection counts instantly with automated threshold alerts."
                    />
                    <FeatureCard
                        icon={Cpu}
                        title="Process Intelligence"
                        desc="Map every connection to a PID and process name. Identify exactly which service is communicating."
                    />
                    <FeatureCard
                        icon={Globe}
                        title="Geographic Intel"
                        desc="Automatic GeoIP lookup for every connection. See city, country, and ISP organizations immediately."
                    />
                    <FeatureCard
                        icon={AlertTriangle}
                        title="Security Scanning"
                        desc="Deep scan mode checks for dangerous open ports, default configurations, and suspicious outbound traffic."
                    />
                    <FeatureCard
                        icon={Terminal}
                        title="Terminal Dashboard"
                        desc="A rich, interactive CLI dashboard with color-coded states, sortable tables, and real-time alert panels."
                    />
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
    return (
        <Card className="bg-white/[0.03] border-white/10 hover:bg-white/[0.05] transition-colors">
            <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/5 mx-auto">
                    <Icon className="h-6 w-6 text-white/80" />
                </div>
                <CardTitle className="text-xl text-white font-semibold text-center">{title}</CardTitle>
                <CardDescription className="text-white/50 text-base leading-relaxed text-center">
                    {desc}
                </CardDescription>
            </CardHeader>
        </Card>
    )
}

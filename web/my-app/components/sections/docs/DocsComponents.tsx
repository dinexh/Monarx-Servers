import { Hash } from "lucide-react"

export function Section({ title, children }: { title: string, children: React.ReactNode }) {
    const id = title.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
    return (
        <section id={id} className="scroll-mt-24">
            <h2 className="flex items-center gap-2 group cursor-pointer pb-2 border-b border-white/5">
                <Hash className="h-5 w-5 text-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                {title}
            </h2>
            <div className="mt-6">
                {children}
            </div>
        </section>
    )
}

export function FeatureBlock({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="bg-white/[0.02] border border-white/5 p-5 rounded-lg">
            <h3 className="font-semibold text-white mb-2">{title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{children}</p>
        </div>
    )
}

export function CommandRow({ cmd, desc }: { cmd: string, desc: string }) {
    return (
        <div className="flex flex-col md:flex-row md:items-start md:gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
            <code className="text-blue-400 font-mono text-sm bg-blue-500/5 px-2 py-1 rounded border border-blue-500/10 whitespace-nowrap mb-2 md:mb-0">
                {cmd}
            </code>
            <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
        </div>
    )
}

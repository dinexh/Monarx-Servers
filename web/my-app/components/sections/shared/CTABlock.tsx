import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export function CTABlock() {
    return (
        <section className="border-t border-white/5 bg-black py-20 px-6">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Secure Your Infrastructure
                </h2>
                <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
                    Open source, transparent, and powerful. Join the community and start monitoring today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="https://github.com/dinexh/monix" target="_blank">
                        <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 h-12 w-full sm:w-auto">
                            <Download className="mr-2 h-4 w-4" />
                            Install via Pip
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 h-12 w-full sm:w-auto">
                            Contact Developer
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

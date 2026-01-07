import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black py-12 px-6">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between text-sm text-white/30">
                <p>© 2025 Monix. Open Source Software.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
                    <Link href="https://github.com/dinexh" className="hover:text-white transition-colors">GitHub</Link>
                    <Link href="https://dineshkorukonda.in" className="hover:text-white transition-colors">Developer</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    )
}

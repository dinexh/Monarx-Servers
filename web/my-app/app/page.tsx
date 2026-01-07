"use client"

import { Hero } from "@/components/sections/home/Hero"
import { Stats } from "@/components/sections/home/Stats"
import { Features } from "@/components/sections/home/Features"
import { CLIPreview } from "@/components/sections/home/CLIPreview"
import { TechnicalBreakdown } from "@/components/sections/home/TechnicalBreakdown"
import { CTABlock } from "@/components/sections/shared/CTABlock"
import { Footer } from "@/components/layout/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Hero />
      <Stats />
      <Features />
      <CLIPreview />
      <TechnicalBreakdown />
      <CTABlock />
      <Footer />
    </div>
  )
}

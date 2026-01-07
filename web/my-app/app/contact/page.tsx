"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Footer } from "@/components/layout/Footer"
import { useState } from "react"

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setStatus('idle');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <div className="container mx-auto max-w-2xl px-6 py-12">
                <Link href="/">
                    <Button variant="ghost" className="mb-8 text-white/50 hover:text-white pl-0 hover:bg-transparent">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Card className="bg-white/[0.02] border-white/10">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-bold text-white mb-2">Get in Touch</CardTitle>
                            <CardDescription className="text-white/50 text-base">
                                Have questions about Monix? Want to contribute?
                                Fill out the form below or reach out directly.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name" className="text-white/70">Name</Label>
                                        <Input id="name" name="name" required placeholder="John Doe" className="bg-white/5 border-white/10 text-white placeholder:text-white/20" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-white/70">Email</Label>
                                        <Input id="email" name="email" required type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 text-white placeholder:text-white/20" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject" className="text-white/70">Subject</Label>
                                    <Input id="subject" name="subject" required placeholder="Collaboration / Feature Request" className="bg-white/5 border-white/10 text-white placeholder:text-white/20" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-white/70">Message</Label>
                                    <Textarea id="message" name="message" required placeholder="Tell us what's on your mind..." className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-white/20" />
                                </div>

                                <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50">
                                    {isLoading ? (
                                        "Sending..."
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </>
                                    )}
                                </Button>

                                {status === 'success' && (
                                    <p className="text-green-400 text-sm text-center">Message sent successfully! We&apos;ll get back to you soon.</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-sm text-center">Failed to send message. Please try again later.</p>
                                )}
                            </form>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-white/10"></span></div>
                                <div className="relative flex justify-center text-xs uppercase"><span className="bg-black px-2 text-white/40">Or connect via</span></div>
                            </div>

                            <div className="flex justify-center gap-4">
                                <Link href="https://github.com/dinexh" target="_blank">
                                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 w-32">GitHub</Button>
                                </Link>
                                <Link href="https://dineshkorukonda.in" target="_blank">
                                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 w-32">Website</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}

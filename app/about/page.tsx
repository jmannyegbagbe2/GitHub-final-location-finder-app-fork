"use client"

import { useState } from "react"
import { Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <div className="min-h-screen relative overflow-hidden dark">
      <div
        className="absolute inset-0 bg-black dark:bg-black"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: "50px 50px, 50px 50px, 100% 100%, 100% 100%, 100% 100%",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/kofax-logo.png" alt="KOFA-X" className="h-8 w-auto cursor-pointer rounded-lg" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white">About KOFA-X</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-purple-400 hover:text-white hover:bg-gray-800 rounded-full"
            >
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Go to Home
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
            <div className="fixed right-0 top-0 h-full w-64 bg-gray-900 border-l border-gray-700 p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-semibold text-white">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full p-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="space-y-4">
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-purple-400 hover:text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/venue-locator">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-purple-400 hover:text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Venue Locator
                  </Button>
                </Link>
                <div className="space-y-2">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-purple-400 hover:text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Maps
                  </Button>
                  <div className="ml-4 space-y-1">
                    <Link href="/maps/adec">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        ADEC
                      </Button>
                    </Link>
                    <Link href="/maps/ict-centre">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        ICT Centre
                      </Button>
                    </Link>
                    <Link href="/maps/mtn-digital-library">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        MTN Digital Library
                      </Button>
                    </Link>
                  </div>
                </div>
                <Link href="/faq">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-purple-400 hover:text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About KofaX
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        )}

        <div className="mb-16 text-center">
          <div className="mb-8">
            <img
              src="/kofax-logo.png"
              alt="KOFA-X Logo"
              className="h-32 w-32 mx-auto rounded-2xl border-2 border-purple-400 shadow-lg shadow-purple-400/20"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-8">
            About KOFA-X Post UTME Helper
          </h1>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
            <p className="text-xl text-purple-300 mb-6">Welcome to UNIBEN, Aspirants! 🎉</p>

            <p className="text-lg leading-relaxed">
              On behalf of <span className="text-purple-400 font-semibold">KOFA-X</span>, we warmly welcome all incoming
              aspirants to campus for your upcoming Post-UTME examinations.
            </p>

            <p className="text-lg leading-relaxed">
              This is the beginning of an <span className="text-purple-300 font-medium">exciting journey</span>, and we
              are glad to walk with you every step of the way.
            </p>

            <p className="text-lg leading-relaxed">
              We created this as a branch of our information platform designed to make your entrance into UNIBEN
              <span className="text-purple-300 font-medium"> smoother and stress-free</span>. On this site, you'll find
              helpful resources such as FAQs, Directions, Tips, and much more.
            </p>

            <p className="text-lg leading-relaxed">
              We know how important this stage is, so think of us as your
              <span className="text-purple-400 font-medium"> go-to companion</span> for clarity, updates, and guidance.
            </p>

            <p className="text-xl font-semibold text-purple-400 mt-8">
              From all of us at KOFA-X, we wish you success in your exams and a bright start to your UNIBEN journey.
            </p>
          </div>
        </div>

        <footer className="mt-16 text-center">
          <div className="text-gray-500 text-sm space-y-2">
            <div>Contact us: Prsteam002@gmail.com</div>
            <div>Powered by Kofa-X</div>
            <div>
              <Link href="/">
                <img src="/kofax-logo.png" alt="Kofax" className="h-6 w-auto mx-auto cursor-pointer rounded-md" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Menu, X, MapPin, HelpCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
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
              <h1 className="text-xl font-bold text-white">KOFA-X</h1>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full p-2"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
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
                <div className="space-y-2">
                  <Link href="/venue-locator">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-purple-400 hover:text-white hover:bg-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Directions & Venue Locator
                    </Button>
                  </Link>
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
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-8 tracking-tight">
            KOFA-X Post UTME Helper 
          </h1>
          <p className="text-xl text-gray-300 mb-12">Your guide to Post-UTME at UNIBEN</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          <Link href="/venue-locator">
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer group hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <MapPin className="h-16 w-16 text-purple-400 mx-auto group-hover:text-purple-300 transition-colors group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  Directions & Venue Locator
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Find your way to exam venues with detailed directions and maps
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/faq">
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer group hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <HelpCircle className="h-16 w-16 text-purple-400 mx-auto group-hover:text-purple-300 transition-colors group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  FAQ
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Get answers to frequently asked questions and helpful tips
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/about">
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer group hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Info className="h-16 w-16 text-purple-400 mx-auto group-hover:text-purple-300 transition-colors group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-200 transition-colors">
                  About KofaX
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Learn more about our mission and how we help UNIBEN aspirants
                </p>
              </CardContent>
            </Card>
          </Link>
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

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu, X, Home } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const faqs = [
    {
      question: "How accurate are the walking and driving times?",
      answer:
        "The walking and driving times are estimates based on Google Maps data and may vary depending on traffic conditions, weather, and your walking pace. We recommend allowing extra time for your journey to ensure you arrive at your examination venue on time.",
    },
    {
      question: "What should I do if I can't find my examination venue?",
      answer:
        "If you're having trouble locating your venue, first double-check your examination slip for the correct venue name. You can also ask security personnel at any of the gates for directions.",
    },
    {
      question: "Are all the gates accessible 24/7?",
      answer:
        "Gate accessibility may vary depending on university policies and security protocols. The main gate typically has the longest operating hours. We recommend checking with university security or arriving during regular daytime hours for the best access.",
    },
    {
      question: "Can I use public transportation to reach these venues?",
      answer:
        "Yes, public transportation options like buses and motorcycles (okada) are available around the university area. However, walking or private transportation might be more reliable for ensuring you arrive on time for your examination.",
    },
    {
      question: "What if the route shown doesn't match what I see on the ground?",
      answer:
        "Routes and campus layouts can change due to construction or other factors. If you encounter discrepancies, ask for directions from university staff, security personnel, or other students who are familiar with the current campus layout.",
    },
    {
      question: "Should I visit the venue before my examination day?",
      answer:
        "Yes, we highly recommend visiting your examination venue at least one day before your exam. This will help you familiarize yourself with the route, estimate travel time, and reduce stress on the actual examination day.",
    },
    {
      question: "What items should I bring on examination day?",
      answer:
        "Bring your examination slip, valid identification (preferably the same ID used during registration), writing materials as specified in your exam instructions, and arrive at least 30 minutes before the scheduled time.",
    },
    {
      question: "Are there parking facilities available at the venues?",
      answer:
        "Parking availability varies by venue and may be limited during examination periods. We recommend using public transportation or arranging to be dropped off near the venue rather than relying on finding parking spaces.",
    },
  ]

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

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-2xl">
        <header className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <Link href="/">
              <img src="/kofax-logo.png" alt="KOFA-X" className="h-8 w-auto cursor-pointer" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white">FAQ</h1>
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
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Maps
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-purple-400 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kofa-X
                </Button>
              </nav>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400">Find answers to common questions about using the UTME Venue Locator</p>
        </div>

        <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700">
          <CardContent className="p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
                  <AccordionTrigger className="text-left text-white hover:text-purple-400 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center">
          <div className="text-gray-500 text-sm space-y-2">
            <div>Powered by Kofa-X</div>
            <div>
              <img src="/kofax-logo.png" alt="Kofax" className="h-6 w-auto mx-auto" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

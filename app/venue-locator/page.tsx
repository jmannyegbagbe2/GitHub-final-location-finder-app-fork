"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Menu, X, Home } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

const gates = [
  { id: "main", name: "Uniben Main gate" },
  { id: "small", name: "Uniben Small gate" },
  { id: "ekosodin", name: "Ekosodin back gate" },
  { id: "anatomy", name: "Anatomy back gate" },
]

const locations = [
  { id: "mtn", name: "MTN Library" },
  { id: "adec", name: "ADEC" },
  { id: "ptdf", name: "PTDF ICT Centre" },
  { id: "uniben-ict", name: "Uniben International ICT Centre" },
]

const routeData = {
  "main-mtn": {
    walkingDistance: "",
    walkingTime: "",
    drivingDistance: "",
    drivingTime: "3 min",
    routeImage: "/main-gate-to-mtn-library-new.jpg",
    link: "https://maps.app.goo.gl/UMSUfYkr44Kjczsc7?g_st=ac",
  },
  "main-uniben-ict": {
    walkingDistance: "",
    walkingTime: "12 min",
    drivingDistance: "",
    drivingTime: "3 min",
    routeImage: "/main-gate-to-ict-center-new.jpg",
    link: "https://maps.app.goo.gl/TxzW8YCTHBrHY43m9?g_st=ac",
  },
  "main-adec": {
    walkingDistance: "",
    walkingTime: "11 min",
    drivingDistance: "",
    drivingTime: "3 min",
    routeImage: "/main-gate-to-adec-new.jpg",
    link: "https://maps.app.goo.gl/nJi1HhqhLcK8ckHs7?g_st=ac",
  },
  "main-ptdf": {
    walkingDistance: "",
    walkingTime: "15 min",
    drivingDistance: "",
    drivingTime: "3 min",
    routeImage: "/main-gate-to-ptdf-center-new.jpg",
    link: "https://maps.app.goo.gl/SRqZ9UQUETRbJtby6?g_st=ac",
  },
  "small-mtn": {
    walkingDistance: "",
    walkingTime: "",
    drivingDistance: "",
    drivingTime: "4 min",
    routeImage: "/small-gate-to-mtn-library-new.jpg",
    link: "https://maps.app.goo.gl/1x1FRJYAn7UWcAKZ9?g_st=ac",
  },
  "small-ptdf": {
    walkingDistance: "",
    walkingTime: "18 min",
    drivingDistance: "",
    drivingTime: "4 min",
    routeImage: "/small-gate-to-ptdf-center-new.jpg",
    link: "https://maps.app.goo.gl/jt77L86r7LhMmyMB8?g_st=ac",
  },
  "small-adec": {
    walkingDistance: "",
    walkingTime: "",
    drivingDistance: "",
    drivingTime: "4 min",
    routeImage: "/small-gate-to-adec-new.jpg",
    link: "https://maps.app.goo.gl/U9e66nL2yJ7WfcRFA?g_st=ac",
  },
  "small-uniben-ict": {
    walkingDistance: "",
    walkingTime: "15 min",
    drivingDistance: "",
    drivingTime: "4 min",
    routeImage: "/small-gate-to-ict-center-new.jpg",
    link: "https://maps.app.goo.gl/yLkwK7xnzLVsga8N9?g_st=ac",
  },
  "anatomy-adec": {
    walkingDistance: "1.1 km",
    walkingTime: "14 min",
    drivingDistance: "1.1 km",
    drivingTime: "4 min",
    routeImage: "/anatomy-to-adec-new.jpg",
    link: "https://maps.app.goo.gl/ZmWiV2FWgjNwyUFQ9?g_st=ac",
  },
  "anatomy-uniben-ict": {
    walkingDistance: "0.8 km",
    walkingTime: "11 min",
    drivingDistance: "0.8 km",
    drivingTime: "3 min",
    routeImage: "/anatomy-to-ict-new.jpg",
    link: "https://maps.app.goo.gl/ZGrKav4G8BtNMANc6?g_st=ac",
  },
  "anatomy-ptdf": {
    walkingDistance: "1.2 km",
    walkingTime: "16 min",
    drivingDistance: "1.2 km",
    drivingTime: "4 min",
    routeImage: "/anatomy-to-ptdf-new.jpg",
    link: "https://maps.app.goo.gl/u6d5GMVJYbdURjam6?g_st=ac",
  },
  "anatomy-mtn": {
    walkingDistance: "1.4 km",
    walkingTime: "19 min",
    drivingDistance: "1.4 km",
    drivingTime: "5 min",
    routeImage: "/anatomy-to-mtn-new.jpg",
    link: "https://maps.app.goo.gl/T3jCW2TECNrSy4Ff9?g_st=ac",
  },
  "ekosodin-adec": {
    walkingDistance: "1.6 km",
    walkingTime: "22 min",
    drivingDistance: "1.6 km",
    drivingTime: "6 min",
    routeImage: "/ekosodin-to-adec-new.jpg",
    link: "https://maps.app.goo.gl/ycc4N81xkEdV9Zpu9?g_st=ac",
  },
  "ekosodin-uniben-ict": {
    walkingDistance: "1.3 km",
    walkingTime: "17 min",
    drivingDistance: "1.3 km",
    drivingTime: "5 min",
    routeImage: "/ekosodin-to-uniben-ict-new.jpg",
    link: "https://maps.app.goo.gl/brb2eeW4JD267PiR9?g_st=ac",
  },
  "ekosodin-ptdf": {
    walkingDistance: "1.5 km",
    walkingTime: "20 min",
    drivingDistance: "1.5 km",
    drivingTime: "5 min",
    routeImage: "/ekosodin-to-ptdf-new.jpg",
    link: "https://maps.app.goo.gl/vtWVfpmN2i6FGn4G8?g_st=ac",
  },
  "ekosodin-mtn": {
    walkingDistance: "1.8 km",
    walkingTime: "25 min",
    drivingDistance: "1.8 km",
    drivingTime: "6 min",
    routeImage: "/ekosodin-to-mtn-library-new.jpg",
    link: "https://maps.app.goo.gl/PjzBsoZwhYo8JiKb7?g_st=ac",
  },
}

export default function UTMEVenueLocator() {
  const [selectedGate, setSelectedGate] = useState<string>("")
  const [selectedLocation, setSelectedLocation] = useState<string>("")
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const routeKey = `${selectedGate}-${selectedLocation}` as keyof typeof routeData
  const currentRoute = selectedGate && selectedLocation ? routeData[routeKey] : null

  const ictCenters = [
    {
      id: "mtn-library",
      name: "MTN Digital Library",
      image: "/mtn-library-new.jpg",
      link: "/maps/mtn-digital-library", // Added link to MTN Digital Library page
    },
    {
      id: "ict-center",
      name: "ICT Center",
      image: "/ict-center-building.png",
      link: "/maps/ict-centre", // Added link to ICT Centre page
    },
    {
      id: "adec-ict",
      name: "ADEC ICT Center",
      image: "/adec-new.png",
      link: "/maps/adec", // Added link to ADEC page
    },
    {
      id: "ptdf-ict",
      name: "PTDF ICT Center",
      image: "/ptdf-ict-center-building.png",
      link: "#", // Placeholder link for PTDF
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
              <img src="/kofax-logo.png" alt="Kofax" className="h-8 w-auto cursor-pointer" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-white">My Post - UTME Venue Locator</h1>
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
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Kofa-X
                  </Button>
                </Link>
              </nav>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Examination Centers</h2>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {ictCenters.map((center) => (
              <Link key={center.id} href={center.link}>
                <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700 hover:bg-gray-800/80 transition-colors cursor-pointer">
                  <CardContent className="p-1">
                    <div className="space-y-1">
                      <div className="h-50 w-full rounded-lg overflow-hidden bg-gray-800">
                        <img
                          src={center.image || "/placeholder.svg"}
                          alt={center.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-white text-center leading-tight">{center.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Gate</label>
              <Select value={selectedGate} onValueChange={setSelectedGate}>
                <SelectTrigger className="w-full bg-gray-900 border-gray-700 text-white hover:bg-gray-800 focus:ring-purple-500 focus:border-purple-500">
                  <SelectValue placeholder="Select your entry gate" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  {gates.map((gate) => (
                    <SelectItem
                      key={gate.id}
                      value={gate.id}
                      className="text-white hover:bg-gray-800 focus:bg-purple-600"
                    >
                      {gate.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Location</label>
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full bg-gray-900 border-gray-700 text-white hover:bg-gray-800 focus:ring-purple-500 focus:border-purple-500">
                  <SelectValue placeholder="Select your examination venue" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-700">
                  {locations.map((location) => (
                    <SelectItem
                      key={location.id}
                      value={location.id}
                      className="text-white hover:bg-gray-800 focus:bg-purple-600"
                    >
                      {location.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {currentRoute && (
          <div className="space-y-6">
            <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700">
              <CardContent className="p-6">
                <div className="text-center space-y-6">
                  <h3 className="text-lg font-semibold text-white">
                    {gates.find((g) => g.id === selectedGate)?.name} →{" "}
                    {locations.find((l) => l.id === selectedLocation)?.name}
                  </h3>

                  <div className="rounded-lg overflow-hidden border border-gray-700">
                    <img
                      src={currentRoute.routeImage || "/placeholder.svg"}
                      alt="Route map"
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <h4 className="font-medium text-purple-400">Walking</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Distance:</span>
                          <span className="text-white">{currentRoute.walkingDistance}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Time:</span>
                          <span className="text-white">{currentRoute.walkingTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-medium text-purple-400">Driving</h4>
                      <div className="space-y-1">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Distance:</span>
                          <span className="text-white">{currentRoute.drivingDistance}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Time:</span>
                          <span className="text-white">{currentRoute.drivingTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-white text-black hover:bg-gray-100 font-medium py-3 rounded-full"
                  >
                    <a href={currentRoute.link} target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <footer className="mt-16 text-center">
          <div className="text-gray-500 text-sm space-y-2">
            <div>Powered by Kofa-X</div>
            <div>
              <Link href="/">
                <img src="/kofax-logo.png" alt="Kofax" className="h-6 w-auto mx-auto cursor-pointer" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

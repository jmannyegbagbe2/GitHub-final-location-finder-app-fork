import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"

export default function ICTCentrePage() {
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
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <img src="/kofax-logo.png" alt="Kofax" className="h-8 w-auto" />
            <h1 className="text-xl font-bold text-white">ICT Centre</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
            >
              <Link href="/venue-locator">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Link>
            </Button>
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
          </div>
        </header>

        <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700 mb-6">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="rounded-lg overflow-hidden border border-gray-700">
                <img src="/ict-center-building.png" alt="ICT Centre Building" className="w-full h-64 object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">ICT Centre</h2>
                <p className="text-gray-300">
                  ICT centre also called{" "}
                  <span className="text-purple-400 font-semibold">"IYAYI EFIONAYI COMPUTER BUILDING"</span> is one of
                  the <span className="text-purple-400 font-semibold">ICT CENTRES</span> where the Post-UTME exams are
                  written. The centre has sub classes under it which are listed as follows:
                </p>

                <Card className="bg-gray-800/50 border-purple-500/30">
                  <CardContent className="p-4">
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li className="text-purple-400 font-medium">• Cyber zone A</li>
                      <li className="text-purple-400 font-medium">• Cyber zone B</li>
                      <li className="text-purple-400 font-medium">• Delta class</li>
                      <li className="text-purple-400 font-medium">• Akwa ibom class</li>
                      <li className="text-purple-400 font-medium">• Edo class</li>
                      <li className="text-purple-400 font-medium">• Staff cyber</li>
                      <li className="text-purple-400 font-medium">• Rivers cyber</li>
                      <li className="text-purple-400 font-medium">• Cross river</li>
                      <li className="text-purple-400 font-medium">• Digital library</li>
                      <li className="text-purple-400 font-medium">• Lagos class</li>
                    </ul>
                  </CardContent>
                </Card>

                <p className="text-gray-300">
                  So if on your Post-UTME slip any of the above venue is written, it means you are going to be writing
                  at <span className="text-purple-400 font-semibold">ICT centre</span>. So what you need to do is take
                  your print out, and go to ICT centre 30mins before the time of your exam as everyone has different
                  time for their exams. When entering the ICT centre, you'll be directed by the invigilators on where
                  you are to write your exams.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700">
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">Where is ICT centre located?</h3>
              <p className="text-gray-300">
                When coming from <span className="text-purple-400 font-semibold">Main gate</span>, you have to pass by
                the left side of the <span className="text-purple-400 font-semibold">main auditorium</span>, then
                proceed down the road until you see physical science 500lt, then turn left right before crossing the
                road towards the faculty of engineering. Do not head into the faculty but keep walking straight down the
                road the faculty is off until you see the building in the image above which is the ICT centre.
              </p>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center">
          <div className="text-gray-500 text-sm space-y-2">
            <div>Contact us: Prsteam002@gmail.com</div>
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

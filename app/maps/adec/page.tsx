import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft } from "lucide-react"

export default function ADECPage() {
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
            <h1 className="text-xl font-bold text-white">ADEC</h1>
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
                <img src="/adec-new.png" alt="ADEC Building" className="w-full h-64 object-cover" />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">ADEC</h2>
                <p className="text-gray-300">
                  Advanced digital engineering centre is one of the 4 centres where post utme are usually written.
                </p>
                <p className="text-gray-300">
                  <span className="text-purple-400 font-semibold">ADEC</span> is located just within the faculty of{" "}
                  <span className="text-purple-400 font-semibold">Engineering</span> its just beside a hall they call{" "}
                  <span className="text-purple-400 font-semibold">Engineering old 1000lt</span>. So what you need to do
                  is take your print out, and go to Adec 30mins before the time of your exam as everyone has different
                  time for their exams, when entering the centre, you'll be directed by the invigilators on where you
                  are to sit to write your exams.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700">
          <CardContent className="p-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-purple-400">Where is it located?</h3>
              <p className="text-gray-300">
                When coming from <span className="text-purple-400 font-semibold">Main gate</span>, you have to pass by
                the left side of the <span className="text-purple-400 font-semibold">main auditorium</span>, then
                proceed down the road until you see physical science 500lt, then turn left towards the{" "}
                <span className="text-purple-400 font-semibold">faculty of engineering</span>, just head right into the
                faculty then turn to the first building on your right which is called{" "}
                <span className="text-purple-400 font-semibold">Engineering old 1000lt</span>, just by the left you will
                see <span className="text-purple-400 font-semibold">Adec</span> right beside it.
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

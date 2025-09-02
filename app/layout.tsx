import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: 'Your Post UTME Helper', // Change 'Your Website Name Here' to your desired title
  description: 'Find Your UNIBEN P-UTME Venue, Answers To P-UTME FAQs. From Kofa-X.', // Change this to your website's description
  openGraph: {
    title: 'Your Post UTME helper',
    description: 'Find Your UNIBEN P-UTME Venue, Answers To P-UTME FAQs. From Kofa-X.',
    images: [
      {
        url: '/preview.png', // The path to the image you placed in the /public directory
        width: 1200,
        height: 630,
        alt: 'Find Your UNIBEN P-UTME Venue, Answers To P-UTME FAQs. From Kofa-X.', // A description of the image for accessibility
      },
    ],
    url: 'https://your-kofax-post-utme-helper.vercel.app', // Your website's URL
    siteName: 'Your Post UTME Helper',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Post UTME Helper',
    description: 'Find Your UNIBEN P-UTME Venue, Answers To P-UTME FAQs. From Kofa-X.',
    images: ['/preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

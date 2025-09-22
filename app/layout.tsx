import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ChatFuse - All AI Models in One Place",
  description:
    "Access GPT-5, Claude, Gemini, Llama, and 30+ other AI models for just $15/month. Replace multiple AI subscriptions with one simple plan.",
  keywords: "AI, ChatGPT, Claude, Gemini, AI models, artificial intelligence, chat, subscription",
  authors: [{ name: "ChatFuse" }],
  creator: "ChatFuse",
  publisher: "ChatFuse",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chatfuse.com",
    title: "ChatFuse - All AI Models in One Place",
    description: "Access GPT-5, Claude, Gemini, Llama, and 30+ other AI models for just $15/month.",
    siteName: "ChatFuse",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatFuse - All AI Models in One Place",
    description: "Access GPT-5, Claude, Gemini, Llama, and 30+ other AI models for just $15/month.",
    creator: "@chatfuse",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#2563EB",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
